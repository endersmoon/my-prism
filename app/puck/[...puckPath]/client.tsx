"use client";

import type { Data } from "@measured/puck";
import { Puck } from "@measured/puck";
import config from "../../../puck.config";
import { PyramidIcon } from "lucide-react";



export function Client({ path, data }: { path: string; data: Partial<Data> }) {
  return (
    <Puck
    overrides={{
        header: ({ actions }) => (
          <div className='flex items-center justify-between w-screen p-3 border-b'>
            <div className='flex items-center gap-2'>
              <div className='flex items-center justify-center bg-gray-100 rounded-full size-11'> 
                <PyramidIcon size={24
                  
                } />
              </div> 
            <div className='text-xl font-medium '>PRISM</div>
            </div>
            
            <div>{actions}</div>
          </div>
        ),
      }}
      headerTitle='Prism'
      config={config}
      data={data}
      onPublish={async (data) => {
        await fetch("/puck/api", {
          method: "post",
          body: JSON.stringify({ data, path }),
        });
      }}
    />
  );
}
