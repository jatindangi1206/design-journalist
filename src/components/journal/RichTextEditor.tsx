
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Bold, Italic, Underline, List, ListOrdered, 
  AlignLeft, AlignCenter, AlignRight, Image, 
  FileAudio, FileVideo, Link, Check, Headphones, MapPin
} from 'lucide-react';

interface RichTextEditorProps {
  initialContent: string;
  onChange: (content: string) => void;
  onAttachImage?: (file: File) => void;
  onAttachAudio?: (file: File) => void;
  onAttachVideo?: (file: File) => void;
  onAddLocation?: () => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  initialContent,
  onChange,
  onAttachImage,
  onAttachAudio,
  onAttachVideo,
  onAddLocation
}) => {
  const [content, setContent] = useState(initialContent);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  // Auto-save functionality
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onChange(content);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [content, onChange]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const insertAtCursor = (before: string, after: string = '') => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    const newText = content.substring(0, start) + before + selectedText + after + content.substring(end);
    
    setContent(newText);
    
    // Focus back on the textarea and set the cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length);
    }, 0);
  };

  const formatText = (format: string) => {
    switch (format) {
      case 'bold':
        insertAtCursor('**', '**');
        break;
      case 'italic':
        insertAtCursor('_', '_');
        break;
      case 'underline':
        insertAtCursor('<u>', '</u>');
        break;
      case 'h1':
        insertAtCursor('# ');
        break;
      case 'h2':
        insertAtCursor('## ');
        break;
      case 'h3':
        insertAtCursor('### ');
        break;
      case 'ul':
        insertAtCursor('- ');
        break;
      case 'ol':
        insertAtCursor('1. ');
        break;
      case 'quote':
        insertAtCursor('> ');
        break;
      case 'link':
        insertAtCursor('[', '](url)');
        break;
      case 'checkbox':
        insertAtCursor('- [ ] ');
        break;
      default:
        break;
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'audio' | 'video') => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Handle file based on type
    switch (type) {
      case 'image':
        onAttachImage?.(file);
        insertAtCursor(`![${file.name}](image-placeholder) `);
        break;
      case 'audio':
        onAttachAudio?.(file);
        insertAtCursor(`[Audio: ${file.name}] `);
        break;
      case 'video':
        onAttachVideo?.(file);
        insertAtCursor(`[Video: ${file.name}] `);
        break;
    }

    // Reset the input
    event.target.value = '';
  };

  const triggerFileInput = (type: 'image' | 'audio' | 'video') => {
    switch (type) {
      case 'image':
        fileInputRef.current?.click();
        break;
      case 'audio':
        audioInputRef.current?.click();
        break;
      case 'video':
        videoInputRef.current?.click();
        break;
    }
  };

  const handleAddLocation = () => {
    onAddLocation?.();
    insertAtCursor('[Current Location] ');
  };

  return (
    <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-white border-b border-gray-200 p-2 flex flex-wrap gap-1">
        {/* Text formatting */}
        <Button 
          type="button" 
          variant="ghost" 
          size="sm"
          onClick={() => formatText('bold')}
          title="Bold (Ctrl+B)"
        >
          <Bold size={18} />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm"
          onClick={() => formatText('italic')}
          title="Italic (Ctrl+I)"
        >
          <Italic size={18} />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm"
          onClick={() => formatText('underline')}
          title="Underline (Ctrl+U)"
        >
          <Underline size={18} />
        </Button>

        <div className="w-px h-6 bg-gray-200 mx-1"></div>

        {/* Headings */}
        <Button 
          type="button" 
          variant="ghost" 
          size="sm"
          onClick={() => formatText('h1')}
          title="Heading 1"
          className="font-serif"
        >
          H1
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm"
          onClick={() => formatText('h2')}
          title="Heading 2"
          className="font-serif"
        >
          H2
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm"
          onClick={() => formatText('h3')}
          title="Heading 3"
          className="font-serif"
        >
          H3
        </Button>

        <div className="w-px h-6 bg-gray-200 mx-1"></div>

        {/* Lists */}
        <Button 
          type="button" 
          variant="ghost" 
          size="sm"
          onClick={() => formatText('ul')}
          title="Bullet List"
        >
          <List size={18} />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm"
          onClick={() => formatText('ol')}
          title="Numbered List"
        >
          <ListOrdered size={18} />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm"
          onClick={() => formatText('checkbox')}
          title="Checklist"
        >
          <Check size={18} />
        </Button>

        <div className="w-px h-6 bg-gray-200 mx-1"></div>

        {/* Alignment */}
        <Button 
          type="button" 
          variant="ghost" 
          size="sm"
          title="Left Align"
        >
          <AlignLeft size={18} />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm"
          title="Center Align"
        >
          <AlignCenter size={18} />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm"
          title="Right Align"
        >
          <AlignRight size={18} />
        </Button>

        <div className="w-px h-6 bg-gray-200 mx-1"></div>

        {/* Links and media */}
        <Button 
          type="button" 
          variant="ghost" 
          size="sm"
          onClick={() => formatText('link')}
          title="Insert Link"
        >
          <Link size={18} />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm"
          onClick={() => triggerFileInput('image')}
          title="Insert Image"
        >
          <Image size={18} />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm"
          onClick={() => triggerFileInput('audio')}
          title="Insert Audio"
        >
          <FileAudio size={18} />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm"
          onClick={() => triggerFileInput('video')}
          title="Insert Video"
        >
          <FileVideo size={18} />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm"
          onClick={handleAddLocation}
          title="Add Location"
        >
          <MapPin size={18} />
        </Button>
      </div>

      <Textarea
        ref={textareaRef}
        value={content}
        onChange={handleTextChange}
        className="w-full min-h-[300px] p-4 border-0 focus:ring-0 font-serif text-body leading-relaxed resize-y"
        placeholder="Write your journal entry here..."
      />

      {/* Hidden file inputs */}
      <input 
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={(e) => handleFileUpload(e, 'image')}
      />
      <input 
        type="file"
        ref={audioInputRef}
        className="hidden"
        accept="audio/*"
        onChange={(e) => handleFileUpload(e, 'audio')}
      />
      <input 
        type="file"
        ref={videoInputRef}
        className="hidden"
        accept="video/*"
        onChange={(e) => handleFileUpload(e, 'video')}
      />
    </div>
  );
};

export default RichTextEditor;
