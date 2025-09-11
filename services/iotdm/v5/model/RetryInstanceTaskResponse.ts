import { OperateWindow } from './OperateWindow';
import { TargetConfig } from './TargetConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RetryInstanceTaskResponse extends SdkResponse {
    private 'task_id'?: string;
    public type?: string;
    public status?: string;
    private 'status_detail'?: string;
    private 'create_time'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'target_config'?: TargetConfig;
    private 'operate_window'?: OperateWindow;
    public progress?: number;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): RetryInstanceTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withType(type: string): RetryInstanceTaskResponse {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): RetryInstanceTaskResponse {
        this['status'] = status;
        return this;
    }
    public withStatusDetail(statusDetail: string): RetryInstanceTaskResponse {
        this['status_detail'] = statusDetail;
        return this;
    }
    public set statusDetail(statusDetail: string  | undefined) {
        this['status_detail'] = statusDetail;
    }
    public get statusDetail(): string | undefined {
        return this['status_detail'];
    }
    public withCreateTime(createTime: string): RetryInstanceTaskResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withStartTime(startTime: string): RetryInstanceTaskResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): RetryInstanceTaskResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withTargetConfig(targetConfig: TargetConfig): RetryInstanceTaskResponse {
        this['target_config'] = targetConfig;
        return this;
    }
    public set targetConfig(targetConfig: TargetConfig  | undefined) {
        this['target_config'] = targetConfig;
    }
    public get targetConfig(): TargetConfig | undefined {
        return this['target_config'];
    }
    public withOperateWindow(operateWindow: OperateWindow): RetryInstanceTaskResponse {
        this['operate_window'] = operateWindow;
        return this;
    }
    public set operateWindow(operateWindow: OperateWindow  | undefined) {
        this['operate_window'] = operateWindow;
    }
    public get operateWindow(): OperateWindow | undefined {
        return this['operate_window'];
    }
    public withProgress(progress: number): RetryInstanceTaskResponse {
        this['progress'] = progress;
        return this;
    }
}