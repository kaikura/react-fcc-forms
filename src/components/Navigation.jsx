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
                    className="h-16 lg:h-24 w-auto lg:px-12 "
                    src="/favicon.png"
                    alt="LSP Solutions"
                  />
                  
                </div>
                

              </div>
              <blockquote className="text-xl lg:text-3xl lg:p-10 p-8 font-semibold italic text-center text-slate-900">
                Keyword .
                <span className="before:block before:absolute before:-inset-2 before:-skew-y-2 before:bg-yellow-400 relative inline-block">
                    <span className="relative text-white">Helper</span>
                </span>
                </blockquote>
            </div>
          </div>
       
    </div>
  )
}
