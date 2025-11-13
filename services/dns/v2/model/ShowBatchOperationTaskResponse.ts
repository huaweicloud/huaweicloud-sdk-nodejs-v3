import { ShowBatchOperationTaskErrorItem } from './ShowBatchOperationTaskErrorItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBatchOperationTaskResponse extends SdkResponse {
    public id?: string;
    public type?: string;
    public status?: string;
    private 'created_at'?: string;
    private 'success_count'?: number;
    private 'error_count'?: number;
    private 'error_items'?: Array<ShowBatchOperationTaskErrorItem>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowBatchOperationTaskResponse {
        this['id'] = id;
        return this;
    }
    public withType(type: string): ShowBatchOperationTaskResponse {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): ShowBatchOperationTaskResponse {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): ShowBatchOperationTaskResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withSuccessCount(successCount: number): ShowBatchOperationTaskResponse {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withErrorCount(errorCount: number): ShowBatchOperationTaskResponse {
        this['error_count'] = errorCount;
        return this;
    }
    public set errorCount(errorCount: number  | undefined) {
        this['error_count'] = errorCount;
    }
    public get errorCount(): number | undefined {
        return this['error_count'];
    }
    public withErrorItems(errorItems: Array<ShowBatchOperationTaskErrorItem>): ShowBatchOperationTaskResponse {
        this['error_items'] = errorItems;
        return this;
    }
    public set errorItems(errorItems: Array<ShowBatchOperationTaskErrorItem>  | undefined) {
        this['error_items'] = errorItems;
    }
    public get errorItems(): Array<ShowBatchOperationTaskErrorItem> | undefined {
        return this['error_items'];
    }
}