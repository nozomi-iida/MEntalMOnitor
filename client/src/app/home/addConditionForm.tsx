"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { addCondition } from "./actions";

export const AddConditionForm = () => {
  const [comment, setComment] = useState<string>("");
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

  const onSubmit = async (emoji: string) => {
    const point = emoji2Num(emoji);
    await addCondition({ point, comment });
    setComment("");
  };

  return (
    <div className="bg-pingBg px-2 pt-4 pb-2 flex flex-col gap-2 sticky bottom-[57px] z-10">
      <Textarea
        placeholder="(Optional) How are you feeling?"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
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
