import Image from "next/image"
import alert from '../../public/alert-triangle.svg'
const Alert = () => {
    return (
        <div className="flex p-4 mb-4 text-darkRed rounded-lg bg-redLight mt-3" role="alert">
          <Image src={alert} alt="alert-icon" className="flex-shrink-0 inline w-5 h-5 mr-3"/>
       
        <div className="font-medium">
          Please fill in all of the existing adders with pricing in order to be selected on the marketplace and/or your company.
          <p className="text-md mt-1">
            When you do not charge an adder for a service that you do, make sure to put a $0.00 adder cost to that service so it is shown on the marketplace as a service you do.
          </p>
        </div>
      </div>
    )
}

export default Alert