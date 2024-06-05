import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="
        fixed
        inset-0
        backdrop-blur-sm
        bg-gradient-to-r
        from-blue-500/20
        via-[#71a0a5]/20
        to-[#77628c]/20
        "
        />
        <Dialog.Content
          className="
            fixed
            drop-shadow-md
            border
            border-cyan-950
            top-1/2
            left-1/2
            max-h-full
            h-full
            md:h-auto
            md:max-h-[90vh]
            w-full
            md:w-[90vw]
            md:max-w-[500px]
            transform
            -translate-x-1/2
            -translate-y-1/2
            rounded-md
            bg-neutral-800
            p-[25px]
            focus:outline-none
    "
        >
          <Dialog.Title
            className="
            text-xl
            text-center
            font-bold
            text-pink-600
            mb-2
            "
          >
            {title}
          </Dialog.Title>
          <Dialog.Description 
          className="
          mb-5
          text-sm
          leading-normal
          text-center
          ">
            {description}
          </Dialog.Description>
          <div>
            {children}
          </div>
          <Dialog.Close>
            <button className="
            text-white
            hover:text-red-800
            absolute
            top-[15px]
            right-[15px]
            inline-flex
            h-[25px]
            w-[25px]
            appearance-none
            items-center
            justify-center
            rounded-full
            focus:outline-none
            ">
                <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
