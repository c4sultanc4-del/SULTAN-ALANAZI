import React, { useState } from 'react';
import { generateTrainingImage } from '../services/geminiService';
import { AspectRatio, GeneratedImage } from '../types';
import { Button } from './Button';

export const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>(AspectRatio.Square);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<GeneratedImage | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imageUrl = await generateTrainingImage(prompt, aspectRatio);
      setGeneratedImage({
        url: imageUrl,
        prompt: prompt,
        timestamp: Date.now()
      });
    } catch (err) {
      setError("Failed to generate image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Image Configuration</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Prompt
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the medical diagram or training visual..."
                rows={4}
                className="w-full rounded-lg border-slate-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Aspect Ratio
              </label>
              <select
                value={aspectRatio}
                onChange={(e) => setAspectRatio(e.target.value as AspectRatio)}
                className="w-full rounded-lg border-slate-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm"
              >
                <option value={AspectRatio.Square}>1:1 (Square)</option>
                <option value={AspectRatio.Landscape}>16:9 (Landscape)</option>
                <option value={AspectRatio.Portrait}>9:16 (Portrait)</option>
                <option value={AspectRatio.StandardLandscape}>4:3 (Standard Landscape)</option>
                <option value={AspectRatio.StandardPortrait}>3:4 (Standard Portrait)</option>
              </select>
            </div>

            <Button 
              onClick={handleGenerate} 
              disabled={isLoading || !prompt.trim()}
              className="w-full"
            >
              {isLoading ? 'Generating...' : 'Generate Visual'}
            </Button>

            {error && (
              <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200">
                {error}
              </div>
            )}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-semibold text-blue-900 mb-2">Pro Tip</h3>
          <p className="text-sm text-blue-800">
            Use specific medical terminology to get the most accurate diagrams. For example, "Anatomical heart diagram showing blockage in LAD artery, clean vector style."
          </p>
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 h-full min-h-[500px] flex flex-col">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Preview</h2>
          
          <div className="flex-1 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden relative">
            {generatedImage ? (
              <img 
                src={generatedImage.url} 
                alt={generatedImage.prompt}
                className="max-w-full max-h-full object-contain shadow-lg"
              />
            ) : (
              <div className="text-center p-8">
                <svg className="mx-auto h-12 w-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <p className="mt-2 text-sm text-slate-500">
                  No image generated yet. Configure the settings and click generate.
                </p>
              </div>
            )}
          </div>
           {generatedImage && (
             <div className="mt-4 flex justify-between items-center text-sm text-slate-500">
                <p className="truncate max-w-md">Prompt: "{generatedImage.prompt}"</p>
                <Button variant="outline" size="sm" onClick={() => window.open(generatedImage.url, '_blank')}>
                   Download
                </Button>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};