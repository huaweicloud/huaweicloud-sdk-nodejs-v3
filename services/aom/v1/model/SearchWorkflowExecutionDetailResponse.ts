import { ExecutionResultList } from './ExecutionResultList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchWorkflowExecutionDetailResponse extends SdkResponse {
    private 'workflow_id'?: string;
    private 'execution_id'?: string;
    public status?: string;
    private 'begin_time'?: number;
    private 'end_time'?: number;
    private 'last_update_time'?: number;
    private 'execution_result_list'?: Array<ExecutionResultList>;
    private 'approve_user_name_list'?: Array<string>;
    private 'project_id'?: string;
    private 'workflow_edit_time'?: number;
    private 'last_record_id_with_snapshot'?: string;
    public constructor() { 
        super();
    }
    public withWorkflowId(workflowId: string): SearchWorkflowExecutionDetailResponse {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withExecutionId(executionId: string): SearchWorkflowExecutionDetailResponse {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
    public withStatus(status: string): SearchWorkflowExecutionDetailResponse {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: number): SearchWorkflowExecutionDetailResponse {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): SearchWorkflowExecutionDetailResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withLastUpdateTime(lastUpdateTime: number): SearchWorkflowExecutionDetailResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: number  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): number | undefined {
        return this['last_update_time'];
    }
    public withExecutionResultList(executionResultList: Array<ExecutionResultList>): SearchWorkflowExecutionDetailResponse {
        this['execution_result_list'] = executionResultList;
        return this;
    }
    public set executionResultList(executionResultList: Array<ExecutionResultList>  | undefined) {
        this['execution_result_list'] = executionResultList;
    }
    public get executionResultList(): Array<ExecutionResultList> | undefined {
        return this['execution_result_list'];
    }
    public withApproveUserNameList(approveUserNameList: Array<string>): SearchWorkflowExecutionDetailResponse {
        this['approve_user_name_list'] = approveUserNameList;
        return this;
    }
    public set approveUserNameList(approveUserNameList: Array<string>  | undefined) {
        this['approve_user_name_list'] = approveUserNameList;
    }
    public get approveUserNameList(): Array<string> | undefined {
        return this['approve_user_name_list'];
    }
    public withProjectId(projectId: string): SearchWorkflowExecutionDetailResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkflowEditTime(workflowEditTime: number): SearchWorkflowExecutionDetailResponse {
        this['workflow_edit_time'] = workflowEditTime;
        return this;
    }
    public set workflowEditTime(workflowEditTime: number  | undefined) {
        this['workflow_edit_time'] = workflowEditTime;
    }
    public get workflowEditTime(): number | undefined {
        return this['workflow_edit_time'];
    }
    public withLastRecordIdWithSnapshot(lastRecordIdWithSnapshot: string): SearchWorkflowExecutionDetailResponse {
        this['last_record_id_with_snapshot'] = lastRecordIdWithSnapshot;
        return this;
    }
    public set lastRecordIdWithSnapshot(lastRecordIdWithSnapshot: string  | undefined) {
        this['last_record_id_with_snapshot'] = lastRecordIdWithSnapshot;
    }
    public get lastRecordIdWithSnapshot(): string | undefined {
        return this['last_record_id_with_snapshot'];
    }
}