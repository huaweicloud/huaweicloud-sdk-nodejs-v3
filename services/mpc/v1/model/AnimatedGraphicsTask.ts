import { AnimatedGraphicsOutputParam } from './AnimatedGraphicsOutputParam';
import { CommonTask } from './CommonTask';
import { ObsObjInfo } from './ObsObjInfo';


export class AnimatedGraphicsTask {
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
    private 'output_param'?: AnimatedGraphicsOutputParam;
    public constructor() { 
    }
    public withTaskId(taskId: string): AnimatedGraphicsTask {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withStatus(status: string): AnimatedGraphicsTask {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): AnimatedGraphicsTask {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withStartTime(startTime: string): AnimatedGraphicsTask {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): AnimatedGraphicsTask {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withErrorCode(errorCode: string): AnimatedGraphicsTask {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withDescription(description: string): AnimatedGraphicsTask {
        this['description'] = description;
        return this;
    }
    public withUserData(userData: string): AnimatedGraphicsTask {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withInput(input: ObsObjInfo): AnimatedGraphicsTask {
        this['input'] = input;
        return this;
    }
    public withOutput(output: ObsObjInfo): AnimatedGraphicsTask {
        this['output'] = output;
        return this;
    }
    public withOutputParam(outputParam: AnimatedGraphicsOutputParam): AnimatedGraphicsTask {
        this['output_param'] = outputParam;
        return this;
    }
    public set outputParam(outputParam: AnimatedGraphicsOutputParam  | undefined) {
        this['output_param'] = outputParam;
    }
    public get outputParam(): AnimatedGraphicsOutputParam | undefined {
        return this['output_param'];
    }
}