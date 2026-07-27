import axios from 'axios'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateTodo } from './features/todoSlice'


const UpdateModal = () => {
    const { register, handleSubmit, formState, setValue } = useForm({

    })

    const { id } = useParams()
    console.log(id);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    async function getById() {
        const result = await axios.get(`http://localhost:8001/getById/${id}`)
        console.log(result.data.data.title);
        const title = result.data.data.title
        setValue("title", title)
    }

    const handleUpdate = (data) =>{
        dispatch(updateTodo({id,data}));
        navigate("/")
    }

    function cancelUpdate(){
        navigate('/')
    }

    useEffect(() => {
        getById()
    }, [])



    return (
      <div>
        <form onSubmit={handleSubmit(handleUpdate)}>
          <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
            <div className="mb-6">
              <label
                htmlFor="title"
                className="text-sm font-semibold leading-7 text-gray-600 mt-3"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                {...register("title")}
                className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            <div className="flex justify-center gap-5">
              <button
                className="rounded border-0 mt-5 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none"
                type="button"
                onClick={cancelUpdate}
              >
                Cancel
              </button>
              <button
                className="rounded border-0 mt-5 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none"
                type="submit"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    );
}

export default UpdateModal
