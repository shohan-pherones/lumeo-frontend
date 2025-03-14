"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { PostViewModal } from "@/components";
import { eventBus } from "@/lib/eventBus";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [modal, setModal] = useState<{ type: string; data?: any } | null>(null);

  useEffect(() => {
    const openModalHandler = (data: { type: string; data?: any }) => {
      setModal(data);
    };

    eventBus.subscribe("openModal", openModalHandler);
    return () => {
      eventBus.unsubscribe("openModal", openModalHandler);
    };
  }, []);

  if (!modal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="relative bg-white p-6 rounded-xl shadow-xl max-w-[80vw]">
        {modal.type === "postView" && <PostViewModal post={modal.data} />}
        <button
          onClick={() => setModal(null)}
          className="absolute top-2 right-2 cursor-pointer"
        >
          <X />
        </button>
      </div>
    </div>
  );
};

export default ModalProvider;
