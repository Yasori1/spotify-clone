import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthMode";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModal();

    useEffect(() => {
      if (session) {
        router.refresh();
        router.push("/home");
        onClose();
      }
    }, [session, router, onClose]);


  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  }

  return (
    <Modal
      title="Welcome Back"
      description="Login to Your Account"
      isOpen={isOpen}
      onChange={onChange}
    >
      Auth Modal Children!
      <Auth
        theme="dark"
        magicLink
        providers={["github", "apple"]}
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#14565d",
                brandAccent: "#22c5e9",
              },
            },
          },
        }}
      />
    </Modal>
  );
};

export default AuthModal;
