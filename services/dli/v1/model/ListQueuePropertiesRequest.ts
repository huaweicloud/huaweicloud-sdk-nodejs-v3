

export class ListQueuePropertiesRequest {
    private 'queue_name'?: string;
    public page?: number;
    private 'page_size'?: number;
    public constructor(queueName?: string) { 
        this['queue_name'] = queueName;
    }
    public withQueueName(queueName: string): ListQueuePropertiesRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withPage(page: number): ListQueuePropertiesRequest {
        this['page'] = page;
        return this;
    }
    public withPageSize(pageSize: number): ListQueuePropertiesRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
}