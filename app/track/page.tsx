"use client"

import React from 'react'
import { BellRing, Navigation } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const notifications = [
  {
    title: "Your next cycle is due",
    description: "30th October",
  },
  {
    title: "Your expected cycle next month ",
    description: "26th November",
  }
]

export default function Track() {
  return (
    <div className='mb-12'>
        <div className=" flex justify-center items-center px-28 pb-12">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Share Your Location Privately With Your Loved Ones
        </h2>
        </div>
        <div className=" flex justify-center items-center px-28 pb-12 gap-12">
        <div className="rounded-lg overflow-hidden " style={{ borderRadius: '20px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1281302904977!2d72.8370!3d19.1293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63c55aaaaab%3A0x649746a364e2c8e7!2sSardar%20Patel%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1697813926149!5m2!1sen!2sin"
                  width="100%"
                  height="480"
                  style={{ border: 0, borderRadius: '20px' }}  
                  allowFullScreen
                  loading="lazy"
                ></iframe>
            </div>
            <div>
            <Sendlocation />
            <SendAlert />
            </div>
    </div>
    </div>
  )
}

const notifications1 = [
    {
      title: "Live Location Shared",
      description: "3 saved contacts",
    }
  ]
  
  type CardProps = React.ComponentProps<typeof Card>
  
 function Sendlocation({ className, ...props }: CardProps) {
    return (
      <Card className={cn("w-[380px]","rounded", className)} {...props}>
        <CardHeader>
          <CardTitle>Share Location</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <Navigation />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Enable Live Location Sharing
              </p>
            </div>
            <Switch onClick={() => alert('Live Location Shared with contacts!')} />  
            
          </div>
          <div>
            {notifications1.map((notifications1, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notifications1.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notifications1.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full rounded">
          Update Saved Contacts
          </Button>
        </CardFooter>
      </Card>
    )
  }

  const notifications3 = [
    {
      title: "Alert shared",
      description: "3 saved contacts & Nearby police station",
    }
  ]
  
  type CardProps2 = React.ComponentProps<typeof Card>
  
 function SendAlert({ className, ...props }: CardProps2) {
    return (
      <Card className={cn("w-[380px]","rounded","mt-6", className)} {...props}>
        <CardHeader>
          <CardTitle>Send Emergency Alert</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            {notifications3.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full rounded" onClick={() => alert('Alert sent to nearest police station and saved contacts!')}>
          Send Alert
          </Button>
        </CardFooter>
      </Card>
    )
  }


