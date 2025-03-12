
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { toast } from "sonner";
import { JournalEntry, getJournalEntryById } from '@/lib/journalService';
import JournalEntryForm from '@/components/journal/JournalEntryForm';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useAuth } from '@/contexts/AuthContext';

const JournalForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [entry, setEntry] = useState<JournalEntry | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const isNewEntry = !id || id === 'new';

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    if (!isNewEntry && id) {
      const journalEntry = getJournalEntryById(id);
      if (journalEntry) {
        setEntry(journalEntry);
      } else {
        toast.error("Journal entry not found");
        navigate('/journal');
      }
    }
    setIsLoading(false);
  }, [id, navigate, isNewEntry, isLoggedIn]);

  const handleSave = (savedEntry: JournalEntry) => {
    if (isNewEntry) {
      toast.success("New journal entry created!");
    } else {
      toast.success("Journal entry updated!");
    }
    navigate(`/journal/${savedEntry.id}`);
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

  return (
    <>
      <Navbar />
      <main className="container-fluid py-8">
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={handleBackToJournal}
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Journal
          </Button>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-headline font-serif mb-6">
            {isNewEntry ? "Create New Journal Entry" : "Edit Journal Entry"}
          </h1>
          
          <JournalEntryForm 
            entry={entry || undefined} 
            onSave={handleSave}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default JournalForm;
