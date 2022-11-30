import { ErrorInfo } from './ErrorInfo';


export class TaskDetail {
    public target?: string;
    public status?: string;
    public output?: string;
    public error?: ErrorInfo;
    public constructor() { 
    }
    public withTarget(target: string): TaskDetail {
        this['target'] = target;
        return this;
    }
    public withStatus(status: string): TaskDetail {
        this['status'] = status;
        return this;
    }
    public withOutput(output: string): TaskDetail {
        this['output'] = output;
        return this;
    }
    public withError(error: ErrorInfo): TaskDetail {
        this['error'] = error;
        return this;
    }
}