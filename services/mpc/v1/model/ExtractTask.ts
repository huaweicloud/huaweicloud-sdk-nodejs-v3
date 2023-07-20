import { CommonTask } from './CommonTask';
import { MetaData } from './MetaData';
import { ObsObjInfo } from './ObsObjInfo';


export class ExtractTask {
    private 'task_id'?: string;
    public status?: string;
    private 'create_time'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'error_code'?: string;
    public description?: string;
    private 'user_data'?: string;
    public input?: ObsObjInfo;
    public output?: ObsObjInfo;
    public metadata?: MetaData;
    public constructor() { 
    }
    public withTaskId(taskId: string): ExtractTask {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withStatus(status: string): ExtractTask {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): ExtractTask {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withStartTime(startTime: string): ExtractTask {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ExtractTask {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withErrorCode(errorCode: string): ExtractTask {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withDescription(description: string): ExtractTask {
        this['description'] = description;
        return this;
    }
    public withUserData(userData: string): ExtractTask {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withInput(input: ObsObjInfo): ExtractTask {
        this['input'] = input;
        return this;
    }
    public withOutput(output: ObsObjInfo): ExtractTask {
        this['output'] = output;
        return this;
    }
    public withMetadata(metadata: MetaData): ExtractTask {
        this['metadata'] = metadata;
        return this;
    }
}