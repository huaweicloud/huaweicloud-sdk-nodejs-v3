import { ObsObjInfo } from './ObsObjInfo';


export class EachEncryptRsp {
    private 'task_id'?: string | undefined;
    public status?: string;
    private 'create_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public input?: ObsObjInfo;
    public output?: ObsObjInfo;
    private 'output_file_name'?: Array<string> | undefined;
    private 'user_data'?: string | undefined;
    public description?: string;
    public constructor() { 
    }
    public withTaskId(taskId: string): EachEncryptRsp {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
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
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withEndTime(endTime: string): EachEncryptRsp {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
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
    public set outputFileName(outputFileName: Array<string> | undefined) {
        this['output_file_name'] = outputFileName;
    }
    public get outputFileName() {
        return this['output_file_name'];
    }
    public withUserData(userData: string): EachEncryptRsp {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string | undefined) {
        this['user_data'] = userData;
    }
    public get userData() {
        return this['user_data'];
    }
    public withDescription(description: string): EachEncryptRsp {
        this['description'] = description;
        return this;
    }
}