

export class OperateHtapQueryQueueControlReq {
    private 'enable_query_queue_select'?: string;
    public constructor(enableQueryQueueSelect?: string) { 
        this['enable_query_queue_select'] = enableQueryQueueSelect;
    }
    public withEnableQueryQueueSelect(enableQueryQueueSelect: string): OperateHtapQueryQueueControlReq {
        this['enable_query_queue_select'] = enableQueryQueueSelect;
        return this;
    }
    public set enableQueryQueueSelect(enableQueryQueueSelect: string  | undefined) {
        this['enable_query_queue_select'] = enableQueryQueueSelect;
    }
    public get enableQueryQueueSelect(): string | undefined {
        return this['enable_query_queue_select'];
    }
}