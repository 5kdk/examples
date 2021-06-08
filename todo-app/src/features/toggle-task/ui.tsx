import { Checkbox } from "antd"; // ~ "shared/ui/checkbox"
import { taskModel } from "entities/task";

export type ToggleTaskProps = {
    taskId: number;
}

// resolve / unresolve
export const ToggleTask = ({ taskId }: ToggleTaskProps) => {
    const task = taskModel.selectors.useTask(taskId);
    if (!task) return null;

    const status = taskModel.getters.getTaskStatus(task);

    return (
        <Checkbox 
            onClick={() => taskModel.events.toggleTask(taskId)} 
            checked={task.completed}
        >
            {status}
        </Checkbox>
    )
}