

export class ListBatchOperationTasksItem {
    public id?: string;
    public type?: string;
    public status?: string;
    private 'created_at'?: string;
    private 'success_count'?: number;
    private 'error_count'?: number;
    public constructor() { 
    }
    public withId(id: string): ListBatchOperationTasksItem {
        this['id'] = id;
        return this;
    }
    public withType(type: string): ListBatchOperationTasksItem {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): ListBatchOperationTasksItem {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): ListBatchOperationTasksItem {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withSuccessCount(successCount: number): ListBatchOperationTasksItem {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withErrorCount(errorCount: number): ListBatchOperationTasksItem {
        this['error_count'] = errorCount;
        return this;
    }
    public set errorCount(errorCount: number  | undefined) {
        this['error_count'] = errorCount;
    }
    public get errorCount(): number | undefined {
        return this['error_count'];
    }
}