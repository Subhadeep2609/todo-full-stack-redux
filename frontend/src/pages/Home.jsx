import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, fetchTodos } from "../components/features/todoSlice";
import { toast } from "react-hot-toast";

const Home = () => {
  const [task, setTask] = useState("");

  const { todos } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

 const handleTodo = async () => {
   const trimmedTask = task.trim();


   if (!trimmedTask) {
     toast.error("Task cannot be empty!");
     return;
   }


   const alreadyExists = todos.some(
     (todo) => todo.title.trim().toLowerCase() === trimmedTask.toLowerCase(),
   );

   if (alreadyExists) {
     toast.error("Task already exists!");
     setTask("")
     return;
   }

   const result = await dispatch(addTodo({ title: trimmedTask }));

   if (addTodo.fulfilled.match(result)) {
     toast.success("Todo added successfully!");
     setTask("");
   } else {
     toast.error(result.payload || "Something went wrong!");
   }
 };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <Header />

      <div className="flex justify-center items-center mb-8 mt-20">
        <input
          type="text"
          value={task}
          placeholder="Enter task"
          className="border border-gray-300 rounded-md py-2 px-4 me-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleTodo();
            }
          }}
        />

        <button
          onClick={handleTodo}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>

      <MainSection todo={todos} />

      <Footer />
    </>
  );
};

export default Home;
