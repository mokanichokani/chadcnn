"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
})

import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { buttonVariants } from "@/components/ui/button"


export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Cal({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  // Define the dates to highlight
  const highlightedDates = [
    new Date(2024, 9, 4), // October 5, 2024
    new Date(2024, 9, 30), // October 15, 2024
    new Date(2024, 10, 26),
  ]

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      // Add custom modifiers to highlight specific dates
      modifiers={{
        highlighted: highlightedDates,
      }}
      modifiersClassNames={{
        highlighted: "bg-pink-300 text-black font-bold ", // Custom class for highlighted dates
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}

export { Cal }

import { BellRing, Check } from "lucide-react"
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

type CardProps = React.ComponentProps<typeof Card>

export function Consult({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]","rounded", className)} {...props}>
      <CardHeader>
        <CardTitle>Track</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to track upcoming cyles.
            </p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (
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
        <Button className="w-full rounded">
        Consult A Doctor
        </Button>
      </CardFooter>
    </Card>
  )
}

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function Symptoms() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3 rounded">
        <TabsTrigger value="cramps" className="rounded">Cramps</TabsTrigger>
        <TabsTrigger value="head-ache" className="rounded">Head-Ache</TabsTrigger>
        <TabsTrigger value="bloating" className="rounded">Bloating</TabsTrigger>
      </TabsList>
      <TabsContent value="cramps">
        <Card className="rounded">
          <CardHeader>
            <CardTitle>Suffering from Cramps?</CardTitle>
            <CardDescription>
              Explore home remedies
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <p>Menstrual cramps can be painful, but there are simple remedies you can try:</p>
            <ul className="list-disc ml-4">
              <li>Apply a heating pad to the lower abdomen.</li>
              <li>Drink chamomile tea to relax muscles.</li>
              <li>Massage the abdominal area with essential oils like lavender or clary sage.</li>
              <li>Stay hydrated and avoid caffeine and salty foods.</li>
              <li>Do light exercises like walking or yoga.</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="rounded">Add Suggestion</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="bloating">
        <Card className="rounded">
          <CardHeader>
            <CardTitle>Suffering from Bloating?</CardTitle>
            <CardDescription>
              Explore home remedies
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <p>Bloating can be uncomfortable, but these remedies can help reduce it:</p>
            <ul className="list-disc ml-4">
              <li>Drink peppermint or ginger tea to aid digestion.</li>
              <li>Avoid carbonated drinks and chewing gum.</li>
              <li>Eat slowly and chew food thoroughly to prevent swallowing air.</li>
              <li>Incorporate potassium-rich foods like bananas to balance fluids.</li>
              
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="rounded">Add Suggestion</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="head-ache">
        <Card className="rounded">
          <CardHeader>
            <CardTitle>Experiencing Headache?</CardTitle>
            <CardDescription>
              Explore home remedies
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <p>For headaches, especially tension headaches, consider these remedies:</p>
            <ul className="list-disc ml-4">
              <li>Apply a cold or warm compress to your forehead or neck.</li>
              <li>Drink plenty of water to stay hydrated.</li>
              <li>Relax with deep breathing exercises or meditation.</li>
              <li>Avoid prolonged screen time or take frequent breaks.</li>
              
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="rounded">Add Suggestion</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      
    </Tabs>
  )
}


export function Menst() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div>
        <div className=" flex justify-center items-center px-28">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Take Control of Your Cycle <span className="italic text-pink-400"> TODAY </span> For a Healty <span className="italic text-pink-500"> TOMORROW </span>
    </h2>
        </div>
                
        <div className=" px-28 py-12 flex justify-center items-center mx-auto gap-20">            
    <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold">
        Add Period Dates
        </h1>
        <br />
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    className="rounded"
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select a date to add menstuation cycle
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="rounded">Add</Button>
      </form>
    </Form>    
    </div>    
    <Cal />
    <Consult />
    </div>
    <div className=" px-28 flex justify-center items-center mx-auto gap-20 mb-6">
        <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold">
        Feeling Under the Weather?
        </h1>
        <br />
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Find Simple solutions to your issues
        </h3>
        <br />
        </div>
        <div>
            <Symptoms />
        </div>
    </div>
    </div>
  )
}
