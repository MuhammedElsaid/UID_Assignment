export enum Priority {
    Low,
    Medium,
    High,
    VeryHigh,
    Critical
}

export class Task {
    uid: number;
    name: string;
    description: string;
    dueDate: string;
    priority: Priority;
    isFinished: boolean;

    constructor() {
        this.uid = 0;
        this.description = '';
        this.name = '';
        this.dueDate = '';
        this.isFinished = false;
        this.priority = Priority.Low;
    }
}