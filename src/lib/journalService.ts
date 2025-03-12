
export interface JournalEntry {
  id: string;
  title: string;
  content: string;
  date: string;
  mood?: 'happy' | 'sad' | 'neutral' | 'excited' | 'anxious' | 'relaxed' | string;
  tags: string[];
  location?: {
    name: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  attachments?: {
    type: 'image' | 'audio' | 'video';
    url: string;
    thumbnail?: string;
  }[];
  isDraft: boolean;
}

// Get all journal entries
export const getJournalEntries = (): JournalEntry[] => {
  const entries = localStorage.getItem('journalEntries');
  return entries ? JSON.parse(entries) : [];
};

// Get a single journal entry by ID
export const getJournalEntryById = (id: string): JournalEntry | undefined => {
  const entries = getJournalEntries();
  return entries.find(entry => entry.id === id);
};

// Save a new journal entry or update an existing one
export const saveJournalEntry = (entry: Omit<JournalEntry, 'id'> & { id?: string }): JournalEntry => {
  const entries = getJournalEntries();
  const newEntry = {
    ...entry,
    id: entry.id || Date.now().toString(36) + Math.random().toString(36).substring(2),
  };
  
  const existingIndex = entries.findIndex(e => e.id === newEntry.id);
  
  if (existingIndex >= 0) {
    entries[existingIndex] = newEntry;
  } else {
    entries.push(newEntry);
  }
  
  localStorage.setItem('journalEntries', JSON.stringify(entries));
  return newEntry;
};

// Delete a journal entry
export const deleteJournalEntry = (id: string): void => {
  const entries = getJournalEntries();
  const filteredEntries = entries.filter(entry => entry.id !== id);
  localStorage.setItem('journalEntries', JSON.stringify(filteredEntries));
};

// Get all draft entries
export const getDraftEntries = (): JournalEntry[] => {
  return getJournalEntries().filter(entry => entry.isDraft);
};

// Get all published entries
export const getPublishedEntries = (): JournalEntry[] => {
  return getJournalEntries().filter(entry => !entry.isDraft);
};

// Search journal entries
export const searchJournalEntries = (query: string): JournalEntry[] => {
  const entries = getJournalEntries();
  const lowercaseQuery = query.toLowerCase();
  
  return entries.filter(entry => 
    entry.title.toLowerCase().includes(lowercaseQuery) ||
    entry.content.toLowerCase().includes(lowercaseQuery) ||
    entry.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

// Filter journal entries by tag
export const filterEntriesByTag = (tag: string): JournalEntry[] => {
  const entries = getJournalEntries();
  return entries.filter(entry => entry.tags.includes(tag));
};

// Get all unique tags
export const getAllTags = (): string[] => {
  const entries = getJournalEntries();
  const tagsSet = new Set<string>();
  
  entries.forEach(entry => {
    entry.tags.forEach(tag => tagsSet.add(tag));
  });
  
  return Array.from(tagsSet);
};
