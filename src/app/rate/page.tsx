'use client'
import Alert from "@/components/Alert";
import Card from "@/components/Card";
import ItemCard from "@/components/ItemCard";
import { useState } from "react";
import Modal from "@/components/Modal";
import invest from '../../../public/invest.svg'
import panels from '../../../public/pannels.svg'
import gen from '../../../public/gen.svg'
import elec from '../../../public/electric.svg'
import addons from '../../../public/Addons.svg'
import upgrate from '../../../public/upgrade.svg'
import roof from '../../../public/roof.svg'
import battary from '../../../public/image 42.svg'

const RateCard = () => {
    const [showModal, setShowModal] = useState(false)

    function handleShowModal() {
        setShowModal(!showModal)

    }
    return (
        <div style={{ width: '100%', height: '100%' }}>

            <Card>
                <div className="flex justify-between items-center font-medium border-b-2">
                    <h3 className="text-lg mb-2">Adders Categories</h3>
                    <div className="flex items-center gap-2  mb-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path
                                fillRule="evenodd"
                                d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                            />
                        </svg>
                        <button className="hover:text-blue-800">Add Category</button>
                    </div>
                </div>
                <Alert />
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-4 md:gap-3 lg:grid-cols-5 gap-4">
                    <ItemCard handleShowModal={handleShowModal} text="Inverters" image={invest}/>
                    <ItemCard handleShowModal={handleShowModal} text="Panels" image={panels} />
                    <ItemCard handleShowModal={handleShowModal} text="Generators" image={gen} />
                    <ItemCard handleShowModal={handleShowModal} text="Electrical Adders" image={elec} />
                    <ItemCard handleShowModal={handleShowModal} text="Addons" image={addons} />
                    <ItemCard handleShowModal={handleShowModal} text="Batteries" image={battary} />
                    <ItemCard handleShowModal={handleShowModal} text="Job type" image={roof} />
                    <ItemCard handleShowModal={handleShowModal} text="Electrical upgrades" image={battary}/>
                    <ItemCard handleShowModal={handleShowModal} text="Travel" image={upgrate} />
                </div>

            </Card>
            {showModal && <Modal handleShowModal={handleShowModal} />}

        </div>

    );
};

export default RateCard;
