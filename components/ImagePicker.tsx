import React, { useState } from 'react';

interface ImagePickerProps {
  value: string;
  onChange: (value: string) => void;
  onClose: () => void;
}

const SAMPLE_IMAGES = [
    "https://ik.imagekit.io/prismkit/adhbut.jpg",
    "https://ik.imagekit.io/prismkit/application.jpg",
    "https://ik.imagekit.io/prismkit/Camp1.jpg",
    "https://ik.imagekit.io/prismkit/Camp2.jpg",
    "https://ik.imagekit.io/prismkit/Camp3.jpg",
    "https://ik.imagekit.io/prismkit/campus.jpg",
    "https://ik.imagekit.io/prismkit/chairs person.jpg",
    "https://ik.imagekit.io/prismkit/claim.jpg",
    "https://ik.imagekit.io/prismkit/college.jpg",
    "https://ik.imagekit.io/prismkit/degree.jpg",
    "https://ik.imagekit.io/prismkit/engaged.jpg",
    "https://ik.imagekit.io/prismkit/findjob.jpg",
    "https://ik.imagekit.io/prismkit/free credits.jpg",
    "https://ik.imagekit.io/prismkit/gold-1.jpg",
    "https://ik.imagekit.io/prismkit/gold.jpg",
    "https://ik.imagekit.io/prismkit/grad.jpg",
    "https://ik.imagekit.io/prismkit/handshake.jpg",
    "https://ik.imagekit.io/prismkit/hello.jpg",
    "https://ik.imagekit.io/prismkit/jobop.jpg",
    "https://ik.imagekit.io/prismkit/laptop.jpg",
    "https://ik.imagekit.io/prismkit/money.jpg",
    "https://ik.imagekit.io/prismkit/News.jpg",
    "https://ik.imagekit.io/prismkit/newyear.jpg",
    "https://ik.imagekit.io/prismkit/offline.jpg",
    "https://ik.imagekit.io/prismkit/Packet.jpg",
    "https://ik.imagekit.io/prismkit/people.jpg",
    "https://ik.imagekit.io/prismkit/Reminder.jpg",
    "https://ik.imagekit.io/prismkit/res.jpg",
    "https://ik.imagekit.io/prismkit/resume rea.jpg",
    "https://ik.imagekit.io/prismkit/resume.jpg",
    "https://ik.imagekit.io/prismkit/sweets.jpg",
    "https://ik.imagekit.io/prismkit/thumbsup.jpg",
    "https://ik.imagekit.io/prismkit/Trial1.jpg",
    "https://ik.imagekit.io/prismkit/Trial2.jpg",
    "https://ik.imagekit.io/prismkit/Trial3.jpg",
    "https://ik.imagekit.io/prismkit/Trial4.jpg",
    "https://ik.imagekit.io/prismkit/xmas.jpg"
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