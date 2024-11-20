import React, { useState } from 'react';

interface ImagePickerProps {
  value: string;
  onChange: (value: string) => void;
  onClose: () => void;
}

const SAMPLE_IMAGES = [
  'https://react.email/static/logo-without-background.png',
  'https://react.email/static/herman-miller-chair.jpg',
  'https://react.email/static/monty-art-cup-1.jpg',
  'https://react.email/static/monty-art-cup-2.jpg',
  // Add more sample images here
];

export const ImagePicker: React.FC<ImagePickerProps> = ({ value, onChange, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Select Image</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {SAMPLE_IMAGES.map((src, index) => (
            <div 
              key={index}
              className={`cursor-pointer border-2 rounded-lg p-2 ${
                value === src ? 'border-blue-500' : 'border-gray-200'
              }`}
              onClick={() => {
                onChange(src);
                onClose();
              }}
            >
              <img 
                src={src} 
                alt={`Sample image ${index + 1}`}
                className="object-cover w-full h-40 rounded"
              />
            </div>
          ))}
        </div>

        <div className="mt-4">
          <p className="mb-2 text-sm text-gray-600">Or enter image URL:</p>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="https://example.com/image.jpg"
          />
        </div>
      </div>
    </div>
  );
}; 