'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { submitContactForm } from '@/server/actions';
import { MailIcon, MapPin, PhoneIcon } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().min(10, {
    message: 'Please enter a valid phone number.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
  newsletter: z.boolean().default(false),
});

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      newsletter: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      await submitContactForm(values);
      toast({
        title: 'Form submitted successfully!',
        description: "We'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: 'Error submitting form',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 mt-12" id="contact">
      <h2 className=" font-bold tracking-tighter text-4xl mb-2 text-center">Contact Us</h2>
      <p className="text-gray-500 text-center max-w-5xl mb-12 mx-auto">
        Get in touch with our cyber security experts. We're here to help protect your digital
        assets.
      </p>
      <motion.div
        className=" grid items-center gap-12  lg:grid-cols-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-start gap-4 justify-start max-w-[70%] text-sm">
            <MapPin className="text-primary" size={20} />
            <p>307A, 3rd Floor, Govardhan House, 53‐54, Nehru Place, New Delhi – 110019</p>
          </div>
          <div className="flex items-start gap-4 justify-start max-w-[70%] text-sm">
            <PhoneIcon className="text-primary" size={16} />
            <p>0000 96656 666</p>
          </div>
          <div className="flex items-start gap-4 justify-start max-w-[70%] text-sm">
            <MailIcon className="text-primary" size={16} />
            <Link href="mailto:info@somorg.io" className="hover:text-primary duration-200 mb-4">
              contact@somorg.com
            </Link>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="md:flex justify-between items-center w-full gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input className="w-full" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input className="w-full" placeholder="+91 999 999 9999" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How can we help?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your cyber security needs..."
                        {...field}
                        rows={6}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="newsletter"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Sign up for our newsletter</FormLabel>
                      <FormDescription>
                        Get the latest cyber security tips and updates.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              <motion.div
                className="w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </motion.div>
            </form>
          </Form>
        </motion.div>
        <motion.div
          className="h-full overflow-hidden rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.592576540953!2d77.04613707507731!3d28.4616956918188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19714814b3eb%3A0xe6fac571909e062d!2sGoogle%20Gurgaon%20-%20Signature%20Towers!5e0!3m2!1sen!2sin!4v1726782468201!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
}
