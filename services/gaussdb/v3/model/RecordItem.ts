import { OnlineDDLTaskContentItem } from './OnlineDDLTaskContentItem';


export class RecordItem {
    private 'task_id'?: string;
    private 'task_content'?: Array<OnlineDDLTaskContentItem>;
    private 'created_at'?: number;
    private 'ended_at'?: number;
    private 'task_status'?: string;
    private 'alter_stage'?: number;
    public percentage?: number;
    private 'error_reason'?: string;
    private 'temp_table_name'?: string;
    public constructor() { 
    }
    public withTaskId(taskId: string): RecordItem {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskContent(taskContent: Array<OnlineDDLTaskContentItem>): RecordItem {
        this['task_content'] = taskContent;
        return this;
    }
    public set taskContent(taskContent: Array<OnlineDDLTaskContentItem>  | undefined) {
        this['task_content'] = taskContent;
    }
    public get taskContent(): Array<OnlineDDLTaskContentItem> | undefined {
        return this['task_content'];
    }
    public withCreatedAt(createdAt: number): RecordItem {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: number  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): number | undefined {
        return this['created_at'];
    }
    public withEndedAt(endedAt: number): RecordItem {
        this['ended_at'] = endedAt;
        return this;
    }
    public set endedAt(endedAt: number  | undefined) {
        this['ended_at'] = endedAt;
    }
    public get endedAt(): number | undefined {
        return this['ended_at'];
    }
    public withTaskStatus(taskStatus: string): RecordItem {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
    }
    public withAlterStage(alterStage: number): RecordItem {
        this['alter_stage'] = alterStage;
        return this;
    }
    public set alterStage(alterStage: number  | undefined) {
        this['alter_stage'] = alterStage;
    }
    public get alterStage(): number | undefined {
        return this['alter_stage'];
    }
    public withPercentage(percentage: number): RecordItem {
        this['percentage'] = percentage;
        return this;
    }
    public withErrorReason(errorReason: string): RecordItem {
        this['error_reason'] = errorReason;
        return this;
    }
    public set errorReason(errorReason: string  | undefined) {
        this['error_reason'] = errorReason;
    }
    public get errorReason(): string | undefined {
        return this['error_reason'];
    }
    public withTempTableName(tempTableName: string): RecordItem {
        this['temp_table_name'] = tempTableName;
        return this;
    }
    public set tempTableName(tempTableName: string  | undefined) {
        this['temp_table_name'] = tempTableName;
    }
    public get tempTableName(): string | undefined {
        return this['temp_table_name'];
    }
}