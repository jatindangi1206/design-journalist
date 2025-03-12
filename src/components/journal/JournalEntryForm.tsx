
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Smile, Tag, Plus, X, MapPin, Image, Headphones, VideoIcon } from "lucide-react";
import RichTextEditor from './RichTextEditor';
import { toast } from "sonner";
import { JournalEntry, saveJournalEntry } from '@/lib/journalService';

interface JournalEntryFormProps {
  entry?: JournalEntry;
  onSave?: (entry: JournalEntry) => void;
}

const MoodOptions = [
  { label: 'Happy', value: 'happy' },
  { label: 'Sad', value: 'sad' },
  { label: 'Neutral', value: 'neutral' },
  { label: 'Excited', value: 'excited' },
  { label: 'Anxious', value: 'anxious' },
  { label: 'Relaxed', value: 'relaxed' },
];

const JournalEntryForm: React.FC<JournalEntryFormProps> = ({ entry, onSave }) => {
  const [title, setTitle] = useState(entry?.title || '');
  const [content, setContent] = useState(entry?.content || '');
  const [mood, setMood] = useState(entry?.mood || '');
  const [tags, setTags] = useState<string[]>(entry?.tags || []);
  const [newTag, setNewTag] = useState('');
  const [location, setLocation] = useState(entry?.location?.name || '');
  const [attachments, setAttachments] = useState<{ type: 'image' | 'audio' | 'video'; url: string }[]>(
    entry?.attachments || []
  );
  const [isDraft, setIsDraft] = useState(entry?.isDraft || true);
  const [isSaving, setIsSaving] = useState(false);

  // Set current date when creating a new entry
  const [entryDate, setEntryDate] = useState<string>(
    entry?.date || new Date().toISOString()
  );

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleAddLocation = () => {
    // In a real app, we would use the browser's geolocation API
    // and then perhaps a reverse geocoding service to get the location name
    setLocation('Current Location');
    toast.success("Location added!");
  };

  const handleAttachFile = (file: File, type: 'image' | 'audio' | 'video') => {
    // In a real app, you would upload the file to a server and get a URL
    // Here we're just using a fake URL as a placeholder
    const fakeUrl = URL.createObjectURL(file);
    setAttachments([...attachments, { type, url: fakeUrl }]);
    toast.success(`${type} attached!`);
  };

  const handleSave = (saveAsDraft: boolean) => {
    setIsSaving(true);
    
    try {
      if (!title.trim()) {
        toast.error("Please enter a title for your journal entry");
        setIsSaving(false);
        return;
      }

      const entryToSave: Omit<JournalEntry, 'id'> & { id?: string } = {
        id: entry?.id,
        title: title.trim(),
        content,
        date: entryDate,
        mood,
        tags,
        isDraft: saveAsDraft,
      };

      if (location) {
        entryToSave.location = { name: location };
      }

      if (attachments.length > 0) {
        entryToSave.attachments = attachments.map(att => ({
          ...att,
          thumbnail: att.type === 'image' ? att.url : undefined
        }));
      }

      const savedEntry = saveJournalEntry(entryToSave);
      toast.success(saveAsDraft ? "Draft saved successfully!" : "Entry published successfully!");
      
      if (onSave) {
        onSave(savedEntry);
      }
    } catch (error) {
      toast.error("Failed to save journal entry");
      console.error("Error saving journal entry:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a title for your entry"
          className="font-serif text-headline"
        />
      </div>
      
      <div className="flex flex-wrap gap-4 items-center">
        <div>
          <Label>Date</Label>
          <div className="text-body font-serif">
            {new Date(entryDate).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>
        
        <div>
          <Label>Mood</Label>
          <div className="flex gap-2 mt-1">
            <Button 
              type="button" 
              variant="outline" 
              size="sm"
              className="flex items-center gap-1"
              onClick={() => setMood('')}
            >
              <Smile size={16} />
              {mood || 'Select mood'}
            </Button>
            <div className="flex gap-1">
              {MoodOptions.map((option) => (
                <Button
                  key={option.value}
                  type="button"
                  variant={mood === option.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setMood(option.value)}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <Label>Tags</Label>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <div 
              key={tag}
              className="bg-nyt-background text-nyt-black px-3 py-1 rounded-full flex items-center gap-1"
            >
              <span>{tag}</span>
              <button 
                type="button"
                onClick={() => handleRemoveTag(tag)}
                className="text-nyt-gray-dark hover:text-nyt-red"
              >
                <X size={14} />
              </button>
            </div>
          ))}
          <div className="flex items-center">
            <Input
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="Add a tag"
              className="w-32 h-8"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddTag();
                }
              }}
            />
            <Button 
              type="button" 
              variant="ghost" 
              size="sm"
              onClick={handleAddTag}
              className="ml-1"
            >
              <Plus size={16} />
            </Button>
          </div>
        </div>
      </div>
      
      <div>
        <Label>Attachments</Label>
        <div className="flex gap-2 mt-2">
          {attachments.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {attachments.map((att, index) => (
                <div key={index} className="relative group">
                  <div className="w-20 h-20 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                    {att.type === 'image' && (
                      <img src={att.url} alt="" className="object-cover w-full h-full" />
                    )}
                    {att.type === 'audio' && <Headphones size={24} />}
                    {att.type === 'video' && <VideoIcon size={24} />}
                  </div>
                  <button 
                    className="absolute -top-2 -right-2 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => setAttachments(attachments.filter((_, i) => i !== index))}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div>
        <Label>Content</Label>
        <RichTextEditor
          initialContent={content}
          onChange={handleContentChange}
          onAttachImage={(file) => handleAttachFile(file, 'image')}
          onAttachAudio={(file) => handleAttachFile(file, 'audio')}
          onAttachVideo={(file) => handleAttachFile(file, 'video')}
          onAddLocation={handleAddLocation}
        />
      </div>
      
      <div className="flex justify-between pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => handleSave(true)}
          disabled={isSaving}
        >
          Save as Draft
        </Button>
        <Button
          type="button"
          onClick={() => handleSave(false)}
          disabled={isSaving}
        >
          {isSaving ? "Saving..." : "Publish Entry"}
        </Button>
      </div>
    </div>
  );
};

export default JournalEntryForm;
