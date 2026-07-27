import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { Link } from "react-router-dom";



const Card = ({title,id}) => {

  const [delModal,setDelModal] = useState(false);
  const [todoId,setTodoId] = useState(null);



  function handleDel(){
    setDelModal(true);
    setTodoId(id);
  }

  return (
    <div className=" flex justify-between border w-full border-gray-300 hover:bg-gray-300  rounded-md py-2 px-4 mb-2">
            <span className="overflow-auto scrollbar-hidden me-4">{title}</span>
            <span className="flex gap-5">
                <Link to={`/update/${id}`}>
                  <button className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"> <FaEdit/> </button>
                </Link>
            <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600" onClick={handleDel}>
              <RiDeleteBin5Fill/>
            </button>
            </span>
            {delModal && <DeleteModal id={todoId} setDelModal={setDelModal} />}
    </div>
  )
}

export default Card
