import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskForm = ({ onSubmit, defaultValues }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
  } = useForm({
    defaultValues: defaultValues || { taskName: "" },
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const handleFormSubmit = (data) => {
    if (!data.taskName.trim()) {
      toast.error("Task name is required!"); // Notify user if task name is empty
      return;
    }
    onSubmit(data);
    reset();
    toast.success("Task added successfully!"); // Toast notification on successful form submission
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
    <input
      type="text"
      placeholder="Task"
      name="taskName"
      {...register("taskName", { required: "This name is required" })}
      style={{
        borderColor: errors.taskName ? "red" : "green",
      }}
    />

    {errors.taskName && <p style={{ color: "red", fontWeight: 700 }}>{errors.taskName.message}</p>}
    <button type="submit">Send</button>
  </form>
  );
};

export default TaskForm;
