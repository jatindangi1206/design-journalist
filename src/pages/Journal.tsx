
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Plus, Search, Tag, Calendar, Clock, SortAsc, 
  SortDesc, Eye, EyeOff, Pencil, Trash2, Filter
} from 'lucide-react';
import { toast } from "sonner";
import { 
  JournalEntry, 
  getJournalEntries, 
  deleteJournalEntry, 
  searchJournalEntries,
  filterEntriesByTag,
  getAllTags
} from '@/lib/journalService';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useAuth } from '@/contexts/AuthContext';

const Journal: React.FC = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [showDrafts, setShowDrafts] = useState(true);
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    
    loadEntries();
  }, [isLoggedIn, navigate]);

  const loadEntries = () => {
    const allEntries = getJournalEntries();
    setEntries(allEntries);
    setAllTags(getAllTags());
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const results = searchJournalEntries(searchQuery);
      setEntries(results);
      setActiveTag(null);
    } else {
      loadEntries();
    }
  };

  const handleFilterByTag = (tag: string) => {
    if (activeTag === tag) {
      setActiveTag(null);
      loadEntries();
    } else {
      setActiveTag(tag);
      const filtered = filterEntriesByTag(tag);
      setEntries(filtered);
      setSearchQuery('');
    }
  };

  const handleSort = () => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newDirection);
    
    const sorted = [...entries].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return newDirection === 'asc' ? dateA - dateB : dateB - dateA;
    });
    
    setEntries(sorted);
  };

  const handleDeleteEntry = (id: string) => {
    if (window.confirm('Are you sure you want to delete this journal entry?')) {
      deleteJournalEntry(id);
      toast.success('Journal entry deleted successfully');
      loadEntries();
    }
  };

  const handleToggleVisibility = () => {
    setShowDrafts(!showDrafts);
  };

  const handleCreateNew = () => {
    navigate('/journal/new');
  };

  const handleEditEntry = (id: string) => {
    navigate(`/journal/edit/${id}`);
  };

  const handleViewEntry = (id: string) => {
    navigate(`/journal/${id}`);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const filteredEntries = showDrafts 
    ? entries 
    : entries.filter(entry => !entry.isDraft);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <>
      <Navbar />
      <main className="container-fluid py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-headline font-serif">My Journal</h1>
          <div className="flex gap-2">
            <Button onClick={handleToggleVisibility} variant="outline">
              {showDrafts ? (
                <>
                  <EyeOff size={16} className="mr-1" />
                  Hide Drafts
                </>
              ) : (
                <>
                  <Eye size={16} className="mr-1" />
                  Show Drafts
                </>
              )}
            </Button>
            <Button onClick={handleCreateNew}>
              <Plus size={16} className="mr-1" />
              New Entry
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="p-4 border-b flex flex-wrap gap-3 items-center">
            <div className="relative flex-grow max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search entries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="pl-10"
              />
            </div>
            
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleSearch}
              className="ml-1"
            >
              Search
            </Button>
            
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleSort}
              className="flex items-center"
            >
              {sortDirection === 'asc' ? (
                <>
                  <SortAsc size={16} className="mr-1" />
                  Oldest First
                </>
              ) : (
                <>
                  <SortDesc size={16} className="mr-1" />
                  Newest First
                </>
              )}
            </Button>
            
            {allTags.length > 0 && (
              <div className="relative group">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                >
                  <Filter size={16} className="mr-1" />
                  Filter Tags
                </Button>
                <div className="absolute right-0 mt-1 w-48 bg-white border rounded-md shadow-lg z-10 hidden group-hover:block">
                  <div className="p-2 max-h-60 overflow-y-auto">
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        className={`flex items-center w-full px-3 py-2 text-left text-sm rounded-md ${
                          activeTag === tag ? 'bg-nyt-background' : 'hover:bg-gray-50'
                        }`}
                        onClick={() => handleFilterByTag(tag)}
                      >
                        <Tag size={14} className="mr-2" />
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {filteredEntries.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-body text-nyt-gray-dark mb-4">No journal entries found.</p>
              <Button onClick={handleCreateNew}>Create Your First Entry</Button>
            </div>
          ) : (
            <div>
              {filteredEntries.map((entry) => (
                <div 
                  key={entry.id}
                  className={`p-4 border-b hover:bg-gray-50 cursor-pointer transition-colors ${
                    entry.isDraft ? 'bg-nyt-background' : ''
                  }`}
                  onClick={() => handleViewEntry(entry.id)}
                >
                  <div className="flex justify-between">
                    <h2 className="text-xl font-serif mb-2 text-nyt-black">
                      {entry.isDraft && (
                        <span className="inline-block bg-nyt-gray-light text-nyt-gray-dark text-xs px-2 py-1 rounded mr-2">
                          Draft
                        </span>
                      )}
                      {entry.title}
                    </h2>
                    <div className="flex space-x-2">
                      <button
                        className="text-nyt-blue hover:text-nyt-gray-dark"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditEntry(entry.id);
                        }}
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        className="text-nyt-red hover:text-nyt-gray-dark"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteEntry(entry.id);
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-caption text-nyt-gray mb-3">
                    <Calendar size={14} className="mr-1" />
                    <span className="mr-3">{formatDate(entry.date)}</span>
                    <Clock size={14} className="mr-1" />
                    <span>
                      {new Date(entry.date).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                  
                  <p className="text-body text-nyt-black line-clamp-2 mb-3">
                    {entry.content.length > 150 
                      ? `${entry.content.substring(0, 150)}...` 
                      : entry.content}
                  </p>
                  
                  {entry.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {entry.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs px-2 py-1 bg-nyt-background text-nyt-gray-dark rounded-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFilterByTag(tag);
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Journal;
