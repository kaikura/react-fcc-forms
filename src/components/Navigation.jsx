/*-------------------------------------------------------------------
|  🐼 React FC Navigation
|
|  🐯 Purpose: TOP NAVIGATION BAR
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import React from 'react'
import { BsGithub, BsTwitter } from 'react-icons/bs'

export const Navigation = () => {
  return (
    <div className="border-b bg-slate-100">
    <div className="mx-auto max-w-7xl">
            <div className="relative flex h-auto justify-between">

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-24 w-auto p-4"
                    src="/Logo_Masterclass_-1-_Original.png"
                    alt="LSP Solutions"
                  />
                  
                </div>
                

              </div>
              <blockquote className="text-3xl p-6 font-semibold italic text-center text-slate-900">
                Keyword .
                <span className="before:block before:absolute before:-inset-2 before:-skew-y-2 before:bg-blue-500 relative inline-block">
                    <span className="relative text-white">Helper</span>
                </span>
                </blockquote>
            </div>
          </div>
       
    </div>
  )
}
