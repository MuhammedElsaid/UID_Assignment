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
    priority: Priority;
    isFinished: boolean;

    constructor() {
        this.uid = 0;
        this.description = '';
        this.name = '';
        this.isFinished = false;
        this.priority = Priority.Low;
    }
}