"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";

export const AddConditionForm = () => {
    const emoji2Num = (emoji: string) => {
    switch (emoji) {
      case "😆":
        return 100;
      case "😁":
        return 75;
      case "😐":
        return 50;
      case "🥲":
        return 25;
      case "😭":
        return 0;
      default:
        throw new Error("Invalid emoji");
    }
  }
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const onSubmit = (emoji: string) => {
    if (!textareaRef.current) {
      return;
    }
    const condition = emoji2Num(emoji);
  }
  return (
    <div className="bg-pingBg px-2 pt-4 pb-2 flex flex-col gap-2">
      <Textarea ref={textareaRef} placeholder="How are you feeling?" />
      <div className="flex justify-between">
        <Button onClick={() => onSubmit("😆")} variant="ghost" className="text-lg">😆</Button>
        <Button onClick={() => onSubmit("😁")} variant="ghost" className="text-lg">😁</Button>
        <Button onClick={() => onSubmit("😐")} variant="ghost" className="text-lg">😐</Button>
        <Button onClick={() => onSubmit("🥲")} variant="ghost" className="text-lg">🥲</Button>
        <Button onClick={() => onSubmit("😭")} variant="ghost" className="text-lg">😭</Button>
      </div>
    </div>
  );
};
