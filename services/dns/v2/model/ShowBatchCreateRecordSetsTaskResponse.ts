import { ShowBatchCreateRecordSetsTaskErrorItem } from './ShowBatchCreateRecordSetsTaskErrorItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBatchCreateRecordSetsTaskResponse extends SdkResponse {
    private 'task_id'?: string;
    public status?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'total_count'?: number;
    private 'success_count'?: number;
    private 'error_count'?: number;
    private 'error_items'?: Array<ShowBatchCreateRecordSetsTaskErrorItem>;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowBatchCreateRecordSetsTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withStatus(status: string): ShowBatchCreateRecordSetsTaskResponse {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): ShowBatchCreateRecordSetsTaskResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowBatchCreateRecordSetsTaskResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withTotalCount(totalCount: number): ShowBatchCreateRecordSetsTaskResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withSuccessCount(successCount: number): ShowBatchCreateRecordSetsTaskResponse {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withErrorCount(errorCount: number): ShowBatchCreateRecordSetsTaskResponse {
        this['error_count'] = errorCount;
        return this;
    }
    public set errorCount(errorCount: number  | undefined) {
        this['error_count'] = errorCount;
    }
    public get errorCount(): number | undefined {
        return this['error_count'];
    }
    public withErrorItems(errorItems: Array<ShowBatchCreateRecordSetsTaskErrorItem>): ShowBatchCreateRecordSetsTaskResponse {
        this['error_items'] = errorItems;
        return this;
    }
    public set errorItems(errorItems: Array<ShowBatchCreateRecordSetsTaskErrorItem>  | undefined) {
        this['error_items'] = errorItems;
    }
    public get errorItems(): Array<ShowBatchCreateRecordSetsTaskErrorItem> | undefined {
        return this['error_items'];
    }
}