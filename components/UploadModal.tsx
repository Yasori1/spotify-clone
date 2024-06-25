"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

import useUploadModal from "@/hooks/useUploadModal";

import Modal from "./Modal";
import Input from "./Input";

const UploadModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const uploadModal = useUploadModal();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    // Upload to supabase
  };

  return (
    <Modal
      title="Add a song"
      description="Upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3">
        <Input
          id="title"
          disabled={isLoading}
          {...(register("title"), { required: true })}
          placeholder="Song title"
        />
        <Input
          id="author"
          disabled={isLoading}
          {...(register("author"), { required: true })}
          placeholder="Song author"
        />
        <div>
          <div className="pb-1">Select a song file</div>
          <Input
            id="Song"
            type = "file"
            disabled={isLoading}
            accept=".mp3"
            {...(register("Song"), { required: true })}            
          />
          
        </div>
      </form>
    </Modal>
  );
};

export default UploadModal;
