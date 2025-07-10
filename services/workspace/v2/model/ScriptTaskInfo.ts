import { ScriptTaskInfoTaskScripts } from './ScriptTaskInfoTaskScripts';


export class ScriptTaskInfo {
    public id?: string;
    private 'task_scripts'?: Array<ScriptTaskInfoTaskScripts>;
    private 'resource_type'?: string;
    private 'resource_ids'?: Array<string>;
    private 'gray_resource_ids'?: Array<string>;
    private 'success_num'?: number;
    private 'failed_num'?: number;
    private 'skip_num'?: number;
    private 'start_time'?: Date;
    private 'end_time'?: Date;
    public status?: string;
    public constructor() { 
    }
    public withId(id: string): ScriptTaskInfo {
        this['id'] = id;
        return this;
    }
    public withTaskScripts(taskScripts: Array<ScriptTaskInfoTaskScripts>): ScriptTaskInfo {
        this['task_scripts'] = taskScripts;
        return this;
    }
    public set taskScripts(taskScripts: Array<ScriptTaskInfoTaskScripts>  | undefined) {
        this['task_scripts'] = taskScripts;
    }
    public get taskScripts(): Array<ScriptTaskInfoTaskScripts> | undefined {
        return this['task_scripts'];
    }
    public withResourceType(resourceType: string): ScriptTaskInfo {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceIds(resourceIds: Array<string>): ScriptTaskInfo {
        this['resource_ids'] = resourceIds;
        return this;
    }
    public set resourceIds(resourceIds: Array<string>  | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds(): Array<string> | undefined {
        return this['resource_ids'];
    }
    public withGrayResourceIds(grayResourceIds: Array<string>): ScriptTaskInfo {
        this['gray_resource_ids'] = grayResourceIds;
        return this;
    }
    public set grayResourceIds(grayResourceIds: Array<string>  | undefined) {
        this['gray_resource_ids'] = grayResourceIds;
    }
    public get grayResourceIds(): Array<string> | undefined {
        return this['gray_resource_ids'];
    }
    public withSuccessNum(successNum: number): ScriptTaskInfo {
        this['success_num'] = successNum;
        return this;
    }
    public set successNum(successNum: number  | undefined) {
        this['success_num'] = successNum;
    }
    public get successNum(): number | undefined {
        return this['success_num'];
    }
    public withFailedNum(failedNum: number): ScriptTaskInfo {
        this['failed_num'] = failedNum;
        return this;
    }
    public set failedNum(failedNum: number  | undefined) {
        this['failed_num'] = failedNum;
    }
    public get failedNum(): number | undefined {
        return this['failed_num'];
    }
    public withSkipNum(skipNum: number): ScriptTaskInfo {
        this['skip_num'] = skipNum;
        return this;
    }
    public set skipNum(skipNum: number  | undefined) {
        this['skip_num'] = skipNum;
    }
    public get skipNum(): number | undefined {
        return this['skip_num'];
    }
    public withStartTime(startTime: Date): ScriptTaskInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: Date): ScriptTaskInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withStatus(status: string): ScriptTaskInfo {
        this['status'] = status;
        return this;
    }
}