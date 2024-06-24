"use client";

import { FieldValues, useForm } from "react-hook-form";

import useUploadModal from "@/hooks/useUploadModal";

import Modal from "./Modal";
import { title } from "process";

const UploadModal = () => {
  const uploadModal = useUploadModal();

  const {
    register,
    handleSubmit,
    reset   
  } = useForm<FieldValues>({
    defaultValues: {
        author:'',
        title: '',
        song : null,
        image : null,
    }
  })

  const onChange = (open: boolean) => {
    if (!open) {
        reset();
      uploadModal.onClose();
    }
  }

  const onSubmit = () => {
    // Upload to supabase
  }



  return (
    <Modal
      title="Add a song"
      description="Upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      Form
    </Modal>
  );
};

export default UploadModal;
