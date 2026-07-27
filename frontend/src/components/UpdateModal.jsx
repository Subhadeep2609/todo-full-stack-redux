import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateTodo } from "./features/todoSlice";

const UpdateModal = () => {
  const { register, handleSubmit, setValue } = useForm();

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch Todo by ID
  const getById = async () => {
    try {
      const result = await axios.get(`http://localhost:8001/getById/${id}`);

      setValue("title", result.data.data.title);
    } catch (error) {
      toast.error("Failed to fetch todo!");
      navigate("/");
    }
  };

  // Update Todo
  const handleUpdate = async (data) => {
    if (!data.title.trim()) {
      toast.error("Task cannot be empty!");
      return;
    }

    const result = await dispatch(updateTodo({ id, data }));

    if (updateTodo.fulfilled.match(result)) {
      toast.success("Todo updated successfully!");
      navigate("/");
    } else {
      toast.error(result.payload || "Failed to update todo!");
    }
  };

  // Cancel Update
  const cancelUpdate = () => {
    navigate("/");
  };

  useEffect(() => {
    getById();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8 shadow-lg">
          <div className="mb-6">
            <label
              htmlFor="title"
              className="text-sm font-semibold leading-7 text-gray-600"
            >
              Title
            </label>

            <input
              type="text"
              {...register("title")}
              className="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base text-gray-700 outline-none transition duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <div className="flex justify-center gap-5">
            <button
              type="button"
              onClick={cancelUpdate}
              className="rounded bg-gray-500 py-2 px-6 text-lg text-white hover:bg-gray-600"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateModal;
