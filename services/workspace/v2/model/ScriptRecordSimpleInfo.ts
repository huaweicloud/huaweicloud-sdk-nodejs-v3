

export class ScriptRecordSimpleInfo {
    public id?: string;
    private 'script_id'?: string;
    private 'script_name'?: string;
    private 'script_task_id'?: string;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'resource_type'?: string;
    private 'start_time'?: Date;
    private 'end_time'?: Date;
    public status?: string;
    private 'execute_order'?: number;
    private 'result_code'?: string;
    public reason?: string;
    public constructor() { 
    }
    public withId(id: string): ScriptRecordSimpleInfo {
        this['id'] = id;
        return this;
    }
    public withScriptId(scriptId: string): ScriptRecordSimpleInfo {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withScriptName(scriptName: string): ScriptRecordSimpleInfo {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
    public withScriptTaskId(scriptTaskId: string): ScriptRecordSimpleInfo {
        this['script_task_id'] = scriptTaskId;
        return this;
    }
    public set scriptTaskId(scriptTaskId: string  | undefined) {
        this['script_task_id'] = scriptTaskId;
    }
    public get scriptTaskId(): string | undefined {
        return this['script_task_id'];
    }
    public withResourceId(resourceId: string): ScriptRecordSimpleInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ScriptRecordSimpleInfo {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceType(resourceType: string): ScriptRecordSimpleInfo {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withStartTime(startTime: Date): ScriptRecordSimpleInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: Date): ScriptRecordSimpleInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withStatus(status: string): ScriptRecordSimpleInfo {
        this['status'] = status;
        return this;
    }
    public withExecuteOrder(executeOrder: number): ScriptRecordSimpleInfo {
        this['execute_order'] = executeOrder;
        return this;
    }
    public set executeOrder(executeOrder: number  | undefined) {
        this['execute_order'] = executeOrder;
    }
    public get executeOrder(): number | undefined {
        return this['execute_order'];
    }
    public withResultCode(resultCode: string): ScriptRecordSimpleInfo {
        this['result_code'] = resultCode;
        return this;
    }
    public set resultCode(resultCode: string  | undefined) {
        this['result_code'] = resultCode;
    }
    public get resultCode(): string | undefined {
        return this['result_code'];
    }
    public withReason(reason: string): ScriptRecordSimpleInfo {
        this['reason'] = reason;
        return this;
    }
}