import { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";

const ItemCard = ({ image, text, className = "", handleShowModal }: any) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button onClick={handleShowModal}>
                <div className={`lg:h-[160px] h-[48px] rounded-lg bg-primary20 flex flex-row md:flex-col gap-2 items-start  md:items-center py-[12px] px-[12px] md:justify-center w=[467px] md:w-[144px] md:h-[144px] lg:w-[160px]`}>
                    <Image  className="md:w-[70px] md:h-[70px] w-[24px] h-[24px]" src={image} alt={text} />
                    <h4 className="md:font-medium font-normal md:text-center">{text}</h4>
                </div>
            </button>

            {/* Mobile Modal */}
            {/* {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}>Modal Content</Modal>} */}
        </>
    );
};

export default ItemCard;