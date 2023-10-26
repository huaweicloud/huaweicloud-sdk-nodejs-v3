import { ExecutionResultList } from './ExecutionResultList';


export class WorkflowExecutionBrief {
    private 'workflow_id'?: string;
    private 'execution_id'?: string;
    public status?: string;
    private 'begin_time'?: number;
    private 'end_time'?: number;
    private 'last_update_time'?: number;
    private 'created_by'?: string;
    private 'approve_user_name_list'?: Array<string>;
    private 'execution_result_list'?: Array<ExecutionResultList>;
    private 'project_id'?: string;
    private 'workflow_edit_time'?: number;
    private 'last_record_id_with_snapshot'?: string;
    public constructor() { 
    }
    public withWorkflowId(workflowId: string): WorkflowExecutionBrief {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withExecutionId(executionId: string): WorkflowExecutionBrief {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
    public withStatus(status: string): WorkflowExecutionBrief {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: number): WorkflowExecutionBrief {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): WorkflowExecutionBrief {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withLastUpdateTime(lastUpdateTime: number): WorkflowExecutionBrief {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: number  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): number | undefined {
        return this['last_update_time'];
    }
    public withCreatedBy(createdBy: string): WorkflowExecutionBrief {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withApproveUserNameList(approveUserNameList: Array<string>): WorkflowExecutionBrief {
        this['approve_user_name_list'] = approveUserNameList;
        return this;
    }
    public set approveUserNameList(approveUserNameList: Array<string>  | undefined) {
        this['approve_user_name_list'] = approveUserNameList;
    }
    public get approveUserNameList(): Array<string> | undefined {
        return this['approve_user_name_list'];
    }
    public withExecutionResultList(executionResultList: Array<ExecutionResultList>): WorkflowExecutionBrief {
        this['execution_result_list'] = executionResultList;
        return this;
    }
    public set executionResultList(executionResultList: Array<ExecutionResultList>  | undefined) {
        this['execution_result_list'] = executionResultList;
    }
    public get executionResultList(): Array<ExecutionResultList> | undefined {
        return this['execution_result_list'];
    }
    public withProjectId(projectId: string): WorkflowExecutionBrief {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkflowEditTime(workflowEditTime: number): WorkflowExecutionBrief {
        this['workflow_edit_time'] = workflowEditTime;
        return this;
    }
    public set workflowEditTime(workflowEditTime: number  | undefined) {
        this['workflow_edit_time'] = workflowEditTime;
    }
    public get workflowEditTime(): number | undefined {
        return this['workflow_edit_time'];
    }
    public withLastRecordIdWithSnapshot(lastRecordIdWithSnapshot: string): WorkflowExecutionBrief {
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