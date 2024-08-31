"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCheckout } from "../api/use-checkout";
import { useRouter } from "next/navigation";
import { useSuccessModal } from "../store/use-success-modal";

export const SuccessModal = () => {
  const mutation = useCheckout();
  const router = useRouter();
  const { isOpen, onClose } = useSuccessModal();
  const handleClose = () => {
    router.replace("/");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader className="flex items-center space-y-4">
          <Image src="/logo.svg" alt="Logo" width={36} height={36} />
          <DialogTitle className="text-center text-green-500">
            Subscription Successful!
          </DialogTitle>
          <DialogDescription className="text-center text-green-500">
            You Have Successfully Subscribed To PRO+ Of Pixel Palette By Aditya
            Singh Rajput.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="pt-2 mt-4 gap-y-2">
          <Button className="w-full" onClick={handleClose}>
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
