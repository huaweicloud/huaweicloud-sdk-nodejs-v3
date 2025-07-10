import { ScriptRecordSimpleInfo } from './ScriptRecordSimpleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowScriptRecordDetailResponse extends SdkResponse {
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
    public output?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowScriptRecordDetailResponse {
        this['id'] = id;
        return this;
    }
    public withScriptId(scriptId: string): ShowScriptRecordDetailResponse {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withScriptName(scriptName: string): ShowScriptRecordDetailResponse {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
    public withScriptTaskId(scriptTaskId: string): ShowScriptRecordDetailResponse {
        this['script_task_id'] = scriptTaskId;
        return this;
    }
    public set scriptTaskId(scriptTaskId: string  | undefined) {
        this['script_task_id'] = scriptTaskId;
    }
    public get scriptTaskId(): string | undefined {
        return this['script_task_id'];
    }
    public withResourceId(resourceId: string): ShowScriptRecordDetailResponse {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ShowScriptRecordDetailResponse {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceType(resourceType: string): ShowScriptRecordDetailResponse {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withStartTime(startTime: Date): ShowScriptRecordDetailResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: Date): ShowScriptRecordDetailResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withStatus(status: string): ShowScriptRecordDetailResponse {
        this['status'] = status;
        return this;
    }
    public withExecuteOrder(executeOrder: number): ShowScriptRecordDetailResponse {
        this['execute_order'] = executeOrder;
        return this;
    }
    public set executeOrder(executeOrder: number  | undefined) {
        this['execute_order'] = executeOrder;
    }
    public get executeOrder(): number | undefined {
        return this['execute_order'];
    }
    public withResultCode(resultCode: string): ShowScriptRecordDetailResponse {
        this['result_code'] = resultCode;
        return this;
    }
    public set resultCode(resultCode: string  | undefined) {
        this['result_code'] = resultCode;
    }
    public get resultCode(): string | undefined {
        return this['result_code'];
    }
    public withReason(reason: string): ShowScriptRecordDetailResponse {
        this['reason'] = reason;
        return this;
    }
    public withOutput(output: string): ShowScriptRecordDetailResponse {
        this['output'] = output;
        return this;
    }
}