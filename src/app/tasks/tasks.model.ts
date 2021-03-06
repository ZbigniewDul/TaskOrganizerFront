export interface taskCreationDTO{
    name: string;
    dateToFinished: Date;
    description: string;
    userName: string;
}

export interface taskDTO{
    id: number;
    name: string;
    dateToFinished: Date;
    timeLeft: number;
    description: string;
    taskStatus: number;
    isCompleted: boolean;
    personAttached: string;
    employeeId: number;
    userName: string;
}