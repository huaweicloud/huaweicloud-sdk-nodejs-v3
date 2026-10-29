

export class ProcessInfo {
    public exeTime?: string;
    public executeTime?: string;
    public message?: string;
    public process?: string;
    public status?: string;
    public constructor() { 
    }
    public withExeTime(exeTime: string): ProcessInfo {
        this['exeTime'] = exeTime;
        return this;
    }
    public withExecuteTime(executeTime: string): ProcessInfo {
        this['executeTime'] = executeTime;
        return this;
    }
    public withMessage(message: string): ProcessInfo {
        this['message'] = message;
        return this;
    }
    public withProcess(process: string): ProcessInfo {
        this['process'] = process;
        return this;
    }
    public withStatus(status: string): ProcessInfo {
        this['status'] = status;
        return this;
    }
}