import React, { useState, useRef } from 'react';
import { X, Upload, Link as LinkIcon, Camera, Check, RotateCcw, Image as ImageIcon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string;
  onUpdatePhoto: (newPhotoUrl: string) => void;
  onResetPhoto: () => void;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  onUpdatePhoto,
  onResetPhoto
}) => {
  const [photoUrlInput, setPhotoUrlInput] = useState('');
  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setUploadError('Please select a valid image file (JPG, PNG, WEBP, etc.)');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setUploadError('File size is too large. Please select an image under 10MB.');
      return;
    }

    setUploadError('');
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        onUpdatePhoto(result);
        onClose();
      }
    };
    reader.readAsDataURL(file);
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!photoUrlInput.trim()) {
      setUploadError('Please enter a valid image URL');
      return;
    }
    setUploadError('');
    onUpdatePhoto(photoUrlInput.trim());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div
        className="bg-[#0B132B] border border-sky-500/30 rounded-2xl w-full max-w-lg p-6 relative space-y-6 shadow-[0_0_40px_rgba(56,189,248,0.2)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-sky-500/20 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-sky-400" />
              <h3 className="text-base font-bold text-white font-mono uppercase tracking-wider">
                Upload / Update Profile Photo
              </h3>
            </div>
            <p className="text-xs text-slate-300">
              Add your personal photograph to display across the website portfolio.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-[#050811] border border-sky-500/30 text-slate-300 hover:text-sky-300 rounded-xl transition-colors"
            aria-label="Close photo modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Photo Preview */}
        <div className="flex items-center gap-4 p-4 bg-[#050811] border border-sky-500/20 rounded-xl">
          <div className="w-20 h-20 bg-[#0B132B] border border-sky-500/30 rounded-xl overflow-hidden shrink-0 relative group">
            <img
              src={currentPhoto}
              alt={personalInfo.fullName}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="space-y-1 text-xs">
            <div className="font-bold text-white font-mono uppercase">{personalInfo.fullName}</div>
            <div className="text-slate-400">Current Profile Picture</div>
            <div className="pt-1">
              <button
                type="button"
                onClick={onResetPhoto}
                className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase text-sky-400 hover:text-sky-300 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset to Default Generated Photo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-sky-500/20 text-xs font-mono uppercase tracking-wider">
          <button
            onClick={() => { setActiveTab('upload'); setUploadError(''); }}
            className={`flex-1 py-2.5 text-center border-b-2 transition-colors rounded-t-lg ${
              activeTab === 'upload'
                ? 'border-sky-400 text-sky-300 font-bold bg-[#050811]'
                : 'border-transparent text-slate-400 hover:text-sky-300'
            }`}
          >
            Upload Device Image
          </button>
          <button
            onClick={() => { setActiveTab('url'); setUploadError(''); }}
            className={`flex-1 py-2.5 text-center border-b-2 transition-colors rounded-t-lg ${
              activeTab === 'url'
                ? 'border-sky-400 text-sky-300 font-bold bg-[#050811]'
                : 'border-transparent text-slate-400 hover:text-sky-300'
            }`}
          >
            Paste Image URL
          </button>
        </div>

        {/* Upload File Tab */}
        {activeTab === 'upload' && (
          <div className="space-y-4">
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-sky-500/30 hover:border-sky-400 bg-[#050811] rounded-xl p-8 text-center cursor-pointer transition-colors space-y-3"
            >
              <div className="w-12 h-12 bg-[#0B132B] border border-sky-500/30 rounded-xl flex items-center justify-center mx-auto text-sky-400">
                <Upload className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-white font-mono uppercase">Click to browse your device photo</p>
                <p className="text-[11px] text-slate-400">Supports JPG, PNG, WEBP, GIF (Max 10MB)</p>
              </div>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
        )}

        {/* URL Tab */}
        {activeTab === 'url' && (
          <form onSubmit={handleUrlSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-sky-400 font-medium block">
                Direct Image Link (URL)
              </label>
              <div className="relative">
                <input
                  type="url"
                  placeholder="https://example.com/my-photo.jpg"
                  value={photoUrlInput}
                  onChange={(e) => setPhotoUrlInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#050811] border border-sky-500/20 rounded-xl text-white text-xs font-mono focus:outline-none focus:border-sky-400 transition-colors pl-9"
                />
                <LinkIcon className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(56,189,248,0.3)]"
            >
              <Check className="w-4 h-4" />
              <span>Apply Image URL</span>
            </button>
          </form>
        )}

        {/* Error message if any */}
        {uploadError && (
          <div className="p-3 bg-[#050811] border border-red-500/30 text-xs text-red-400 font-mono rounded-xl">
            {uploadError}
          </div>
        )}

        {/* Modal Footer */}
        <div className="pt-2 border-t border-sky-500/20 flex justify-between items-center text-[11px] text-slate-400 font-mono uppercase">
          <span>Saved locally in browser</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-[#050811] border border-sky-500/30 rounded-xl text-white hover:border-sky-400/50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
