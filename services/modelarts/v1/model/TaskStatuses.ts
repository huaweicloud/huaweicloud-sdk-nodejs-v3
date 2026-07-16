

export class TaskStatuses {
    public task?: string;
    private 'exit_code'?: number;
    public message?: string;
    public constructor() { 
    }
    public withTask(task: string): TaskStatuses {
        this['task'] = task;
        return this;
    }
    public withExitCode(exitCode: number): TaskStatuses {
        this['exit_code'] = exitCode;
        return this;
    }
    public set exitCode(exitCode: number  | undefined) {
        this['exit_code'] = exitCode;
    }
    public get exitCode(): number | undefined {
        return this['exit_code'];
    }
    public withMessage(message: string): TaskStatuses {
        this['message'] = message;
        return this;
    }
}