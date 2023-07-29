import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function TaskModal({ isOpen, setIsOpen }) {
  //   const [isOpen, setIsOpen] = useState(true);

  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(true)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div
          className="fixed w-screen overflow-hidden inset-0 bg-black/30"
          aria-hidden="true"
        />

        {/* Full-screen container to center the panel */}
        <div className="fixed w-screen  overflow-hidden h-screen inset-0 flex items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto max-w-sm w-[34.4rem] rounded bg-white">
            <Dialog.Title className="font-bold text-[1.8rem] leading-normal text-black mb-[2.4rem]">
              Research pricing points of various competitors and trial different
              business models
            </Dialog.Title>
            <Dialog.Description>
              We know what we're planning to build for version one. Now we need
              to finalise the first pricing model we'll use. Keep iterating the
              subtasks until we have a coherent proposition.
            </Dialog.Description>

            <div>
              <p>Subtasks (2 of 3)</p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>

              <p>Current Status</p>
            </div>

            <button onClick={() => setIsOpen(false)}>Deactivate</button>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}
