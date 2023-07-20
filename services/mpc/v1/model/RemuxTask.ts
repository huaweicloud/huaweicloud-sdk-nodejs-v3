import { CommonTask } from './CommonTask';
import { MetaData } from './MetaData';
import { ObsObjInfo } from './ObsObjInfo';
import { RemuxOutputParam } from './RemuxOutputParam';


export class RemuxTask {
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
    private 'output_param'?: RemuxOutputParam;
    private 'complete_ratio'?: number;
    private 'output_metadata'?: MetaData;
    public constructor() { 
    }
    public withTaskId(taskId: string): RemuxTask {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withStatus(status: string): RemuxTask {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): RemuxTask {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withStartTime(startTime: string): RemuxTask {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): RemuxTask {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withErrorCode(errorCode: string): RemuxTask {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withDescription(description: string): RemuxTask {
        this['description'] = description;
        return this;
    }
    public withUserData(userData: string): RemuxTask {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withInput(input: ObsObjInfo): RemuxTask {
        this['input'] = input;
        return this;
    }
    public withOutput(output: ObsObjInfo): RemuxTask {
        this['output'] = output;
        return this;
    }
    public withOutputParam(outputParam: RemuxOutputParam): RemuxTask {
        this['output_param'] = outputParam;
        return this;
    }
    public set outputParam(outputParam: RemuxOutputParam  | undefined) {
        this['output_param'] = outputParam;
    }
    public get outputParam(): RemuxOutputParam | undefined {
        return this['output_param'];
    }
    public withCompleteRatio(completeRatio: number): RemuxTask {
        this['complete_ratio'] = completeRatio;
        return this;
    }
    public set completeRatio(completeRatio: number  | undefined) {
        this['complete_ratio'] = completeRatio;
    }
    public get completeRatio(): number | undefined {
        return this['complete_ratio'];
    }
    public withOutputMetadata(outputMetadata: MetaData): RemuxTask {
        this['output_metadata'] = outputMetadata;
        return this;
    }
    public set outputMetadata(outputMetadata: MetaData  | undefined) {
        this['output_metadata'] = outputMetadata;
    }
    public get outputMetadata(): MetaData | undefined {
        return this['output_metadata'];
    }
}