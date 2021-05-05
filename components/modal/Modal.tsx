import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

type ModalProps = {
  children: any,
  open: boolean,
  setOpen: (open: boolean) => boolean,
}

const Modal = (props: ModalProps) => {
  const { open, setOpen } = props;

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        static
        open={open}
        onClose={setOpen}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              {props.children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

Modal.Header = (props) => (
  <Dialog.Title as="h3">
    {props.children}
  </Dialog.Title>
);

Modal.Body = (props) => (
  <div className="mt-2">
    <p className="text-sm text-gray-500">
      {props.children}
    </p>
  </div>
);

Modal.Footer = (props) => (
  <div className="mt-4">
    {props.children}
  </div>
);

export default Modal;
