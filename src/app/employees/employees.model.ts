import { taskDTO } from "../tasks/tasks.model";

export interface employeeCreationDTO{
    name: string;
    taskIds: number[];
}

export interface employeeDTO{
    id: number;
    name: string;
    tasks: taskDTO[];
}

export interface PostGetDTO{
    tasks: taskDTO[];
}

export interface PutGetDTO{
    employee: employeeDTO;
    selectedTasks: taskDTO[];
    nonSelectedTasks: taskDTO[];
}