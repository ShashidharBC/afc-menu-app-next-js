import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <h1 className="sm:flex text-6xl md:text-7xl lg:text-8xl">
          Hello, From Shashi
        </h1>

        <div>
          <Drawer>
            <DrawerTrigger>
              {
                <div>
                  <Button className="sm:text-lg md:text-xl lg:text-2xl sm:py-6 md:py-6 lg:py-8 sm:px-4 md:px-6 lg:px-60">
                    Click me
                  </Button>
                </div>
              }
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </Suspense>
  );
}
