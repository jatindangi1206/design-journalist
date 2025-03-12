
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Pencil, Trash2, Calendar, MapPin, Tag } from 'lucide-react';
import { toast } from "sonner";
import { JournalEntry, getJournalEntryById, deleteJournalEntry } from '@/lib/journalService';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useAuth } from '@/contexts/AuthContext';

const JournalEntryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [entry, setEntry] = useState<JournalEntry | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    if (id) {
      const journalEntry = getJournalEntryById(id);
      if (journalEntry) {
        setEntry(journalEntry);
      } else {
        toast.error("Journal entry not found");
        navigate('/journal');
      }
    }
    setIsLoading(false);
  }, [id, navigate, isLoggedIn]);

  const handleEdit = () => {
    navigate(`/journal/edit/${id}`);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this journal entry?')) {
      if (id) {
        deleteJournalEntry(id);
        toast.success('Journal entry deleted successfully');
        navigate('/journal');
      }
    }
  };

  const handleBackToJournal = () => {
    navigate('/journal');
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <main className="container-fluid py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!entry) {
    return (
      <>
        <Navbar />
        <main className="container-fluid py-8">
          <Button 
            variant="outline" 
            onClick={handleBackToJournal}
            className="mb-6"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Journal
          </Button>
          <div className="text-center py-12">
            <h2 className="text-headline font-serif mb-4">Entry Not Found</h2>
            <p className="text-body text-nyt-gray-dark mb-6">
              Sorry, the journal entry you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate('/journal')}>Return to Journal</Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Simple markdown-like parser for basic formatting
  const renderFormattedContent = (content: string) => {
    let formattedContent = content
      // Bold
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Italic
      .replace(/_(.*?)_/g, '<em>$1</em>')
      // Underline
      .replace(/<u>(.*?)<\/u>/g, '<u>$1</u>')
      // Headers
      .replace(/^# (.*?)$/gm, '<h1>$1</h1>')
      .replace(/^## (.*?)$/gm, '<h2>$1</h2>')
      .replace(/^### (.*?)$/gm, '<h3>$1</h3>')
      // Lists
      .replace(/^- (.*?)$/gm, '<li>$1</li>')
      .replace(/^(\d+)\. (.*?)$/gm, '<li>$2</li>')
      // Checkboxes
      .replace(/^- \[ \] (.*?)$/gm, '<div class="flex items-start"><input type="checkbox" class="mt-1 mr-2" disabled /> <span>$1</span></div>')
      .replace(/^- \[x\] (.*?)$/gm, '<div class="flex items-start"><input type="checkbox" class="mt-1 mr-2" checked disabled /> <span>$1</span></div>')
      // Links
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-nyt-blue hover:underline" target="_blank">$1</a>')
      // Images
      .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" class="my-4 rounded-md max-w-full" />')
      // Blockquote
      .replace(/^> (.*?)$/gm, '<blockquote class="border-l-4 border-nyt-gray-light pl-4 italic text-nyt-gray-dark my-4">$1</blockquote>');

    // Replace newlines with <br> tags
    formattedContent = formattedContent.replace(/\n/g, '<br />');

    return (
      <div 
        className="article-typography prose prose-lg max-w-none prose-headings:font-serif" 
        dangerouslySetInnerHTML={{ __html: formattedContent }} 
      />
    );
  };

  return (
    <>
      <Navbar />
      <main className="container-fluid py-8">
        <div className="mb-6 flex justify-between items-center">
          <Button 
            variant="outline" 
            onClick={handleBackToJournal}
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Journal
          </Button>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={handleEdit}
            >
              <Pencil size={16} className="mr-2" />
              Edit
            </Button>
            <Button 
              variant="outline" 
              onClick={handleDelete}
              className="text-nyt-red hover:bg-red-50"
            >
              <Trash2 size={16} className="mr-2" />
              Delete
            </Button>
          </div>
        </div>

        <article className="bg-white p-8 rounded-lg shadow-md max-w-5xl mx-auto">
          {entry.isDraft && (
            <div className="bg-nyt-background text-nyt-gray-dark px-4 py-2 rounded-md inline-block mb-4">
              Draft
            </div>
          )}
          
          <h1 className="text-featured font-serif mb-4">{entry.title}</h1>
          
          <div className="flex items-center text-nyt-gray-dark mb-6">
            <Calendar size={16} className="mr-2" />
            <span>{formatDate(entry.date)}</span>
            
            {entry.location && (
              <>
                <span className="mx-2">•</span>
                <MapPin size={16} className="mr-2" />
                <span>{entry.location.name}</span>
              </>
            )}
            
            {entry.mood && (
              <>
                <span className="mx-2">•</span>
                <span>Mood: {entry.mood}</span>
              </>
            )}
          </div>
          
          {entry.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {entry.tags.map(tag => (
                <div key={tag} className="flex items-center bg-nyt-background text-nyt-gray-dark px-3 py-1 rounded-full text-sm">
                  <Tag size={14} className="mr-1" />
                  {tag}
                </div>
              ))}
            </div>
          )}
          
          {entry.attachments && entry.attachments.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-serif mb-3">Attachments</h3>
              <div className="flex flex-wrap gap-4">
                {entry.attachments.map((attachment, index) => (
                  <div key={index} className="border rounded-md overflow-hidden">
                    {attachment.type === 'image' && (
                      <img 
                        src={attachment.url} 
                        alt="" 
                        className="w-40 h-40 object-cover"
                      />
                    )}
                    {attachment.type === 'audio' && (
                      <div className="p-4">
                        <audio controls src={attachment.url} className="w-full" />
                      </div>
                    )}
                    {attachment.type === 'video' && (
                      <div className="p-4">
                        <video controls src={attachment.url} className="w-full h-40" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="mb-6 border-t border-b border-nyt-gray-light py-6">
            {renderFormattedContent(entry.content)}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default JournalEntryDetail;
