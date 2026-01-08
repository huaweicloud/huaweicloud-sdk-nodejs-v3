

export class BatchDeleteListenersRequestBody {
    private 'listener_ids'?: Array<string>;
    public constructor(listenerIds?: Array<string>) { 
        this['listener_ids'] = listenerIds;
    }
    public withListenerIds(listenerIds: Array<string>): BatchDeleteListenersRequestBody {
        this['listener_ids'] = listenerIds;
        return this;
    }
    public set listenerIds(listenerIds: Array<string>  | undefined) {
        this['listener_ids'] = listenerIds;
    }
    public get listenerIds(): Array<string> | undefined {
        return this['listener_ids'];
    }
}