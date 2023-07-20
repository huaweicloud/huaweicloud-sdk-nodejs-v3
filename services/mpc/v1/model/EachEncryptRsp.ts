import { ObsObjInfo } from './ObsObjInfo';


export class EachEncryptRsp {
    private 'task_id'?: string;
    public status?: string;
    private 'create_time'?: string;
    private 'end_time'?: string;
    public input?: ObsObjInfo;
    public output?: ObsObjInfo;
    private 'output_file_name'?: Array<string>;
    private 'user_data'?: string;
    public description?: string;
    public constructor() { 
    }
    public withTaskId(taskId: string): EachEncryptRsp {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withStatus(status: string): EachEncryptRsp {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): EachEncryptRsp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withEndTime(endTime: string): EachEncryptRsp {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withInput(input: ObsObjInfo): EachEncryptRsp {
        this['input'] = input;
        return this;
    }
    public withOutput(output: ObsObjInfo): EachEncryptRsp {
        this['output'] = output;
        return this;
    }
    public withOutputFileName(outputFileName: Array<string>): EachEncryptRsp {
        this['output_file_name'] = outputFileName;
        return this;
    }
    public set outputFileName(outputFileName: Array<string>  | undefined) {
        this['output_file_name'] = outputFileName;
    }
    public get outputFileName(): Array<string> | undefined {
        return this['output_file_name'];
    }
    public withUserData(userData: string): EachEncryptRsp {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withDescription(description: string): EachEncryptRsp {
        this['description'] = description;
        return this;
    }
}