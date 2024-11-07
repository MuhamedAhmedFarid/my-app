// components/RadioGroup.js

export default function RadioGroup() {
    return (
      <div className="flex flex-col">
        <label className="text-lg font-medium text-gray-700  mb-2">Type</label>
        
        <div className="flex items-center space-x-6">
          
          {/* Adder Radio Button */}
          <label className="flex items-center space-x-2">
            <input 
              type="radio" 
              name="type" 
              className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
              defaultChecked 
            />
            <span className="text-gray-800 font-medium">Adder</span>
          </label>
          
          {/* Standard Product Radio Button */}
          <label className="flex items-center space-x-2">
            <input 
              type="radio" 
              name="type" 
              className="form-radio h-5 w-5 text-gray-300 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-gray-800 font-medium">Standard product</span>
          </label>
          
        </div>
      </div>
    );
    
  }

