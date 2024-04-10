enum Priority {
    Low,
    Medium,
    High,
    VeryHight,
    critical
}

export class Task {
    uid: number;
    name: string;
    description: string;
    priority: Priority;

    constructor() {
        this.uid = 0;
        this.description = '';
        this.name = '';
        this.priority = Priority.Low;
    }
}