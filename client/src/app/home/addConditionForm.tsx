"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Database } from "@/lib/schema.gen";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRef } from "react";

export const AddConditionForm = () => {
  const supabase = createClientComponentClient<Database>();
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
  };
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const onSubmit = async (emoji: string) => {
    const {data: {user}} = await supabase.auth.getUser();
    if (!user || !textareaRef.current) {
      return;
    }
    const condition = emoji2Num(emoji);
    await supabase.from("conditions").insert({
      point: condition,
      comment: textareaRef.current.value,
      user_id: user.id,
    })
  };
  return (
    <div className="bg-pingBg px-2 pt-4 pb-2 flex flex-col gap-2">
      <Textarea ref={textareaRef} placeholder="How are you feeling?" />
      <div className="flex justify-between">
        <Button
          onClick={() => onSubmit("😆")}
          variant="ghost"
          className="text-lg"
        >
          😆
        </Button>
        <Button
          onClick={() => onSubmit("😁")}
          variant="ghost"
          className="text-lg"
        >
          😁
        </Button>
        <Button
          onClick={() => onSubmit("😐")}
          variant="ghost"
          className="text-lg"
        >
          😐
        </Button>
        <Button
          onClick={() => onSubmit("🥲")}
          variant="ghost"
          className="text-lg"
        >
          🥲
        </Button>
        <Button
          onClick={() => onSubmit("😭")}
          variant="ghost"
          className="text-lg"
        >
          😭
        </Button>
      </div>
    </div>
  );
};
