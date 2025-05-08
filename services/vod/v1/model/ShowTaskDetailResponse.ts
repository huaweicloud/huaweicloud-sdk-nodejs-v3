import { EditMediaTask } from './EditMediaTask';
import { WorkflowTask } from './WorkflowTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaskDetailResponse extends SdkResponse {
    private 'task_id'?: string;
    private 'task_type'?: string;
    public status?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'create_time'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'workflow_task'?: WorkflowTask;
    private 'edit_media_task'?: EditMediaTask;
    private 'session_context'?: string;
    private 'callback_url'?: string;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowTaskDetailResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskType(taskType: string): ShowTaskDetailResponse {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withStatus(status: string): ShowTaskDetailResponse {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): ShowTaskDetailResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ShowTaskDetailResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withCreateTime(createTime: string): ShowTaskDetailResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withStartTime(startTime: string): ShowTaskDetailResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowTaskDetailResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withWorkflowTask(workflowTask: WorkflowTask): ShowTaskDetailResponse {
        this['workflow_task'] = workflowTask;
        return this;
    }
    public set workflowTask(workflowTask: WorkflowTask  | undefined) {
        this['workflow_task'] = workflowTask;
    }
    public get workflowTask(): WorkflowTask | undefined {
        return this['workflow_task'];
    }
    public withEditMediaTask(editMediaTask: EditMediaTask): ShowTaskDetailResponse {
        this['edit_media_task'] = editMediaTask;
        return this;
    }
    public set editMediaTask(editMediaTask: EditMediaTask  | undefined) {
        this['edit_media_task'] = editMediaTask;
    }
    public get editMediaTask(): EditMediaTask | undefined {
        return this['edit_media_task'];
    }
    public withSessionContext(sessionContext: string): ShowTaskDetailResponse {
        this['session_context'] = sessionContext;
        return this;
    }
    public set sessionContext(sessionContext: string  | undefined) {
        this['session_context'] = sessionContext;
    }
    public get sessionContext(): string | undefined {
        return this['session_context'];
    }
    public withCallbackUrl(callbackUrl: string): ShowTaskDetailResponse {
        this['callback_url'] = callbackUrl;
        return this;
    }
    public set callbackUrl(callbackUrl: string  | undefined) {
        this['callback_url'] = callbackUrl;
    }
    public get callbackUrl(): string | undefined {
        return this['callback_url'];
    }
}