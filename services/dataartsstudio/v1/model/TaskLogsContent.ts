import { TaskLogFile } from './TaskLogFile';


export class TaskLogsContent {
    private 'is_success'?: boolean;
    public message?: string;
    public prefix?: string;
    public time?: string;
    public files?: Array<TaskLogFile>;
    public constructor() { 
    }
    public withIsSuccess(isSuccess: boolean): TaskLogsContent {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): TaskLogsContent {
        this['message'] = message;
        return this;
    }
    public withPrefix(prefix: string): TaskLogsContent {
        this['prefix'] = prefix;
        return this;
    }
    public withTime(time: string): TaskLogsContent {
        this['time'] = time;
        return this;
    }
    public withFiles(files: Array<TaskLogFile>): TaskLogsContent {
        this['files'] = files;
        return this;
    }
}