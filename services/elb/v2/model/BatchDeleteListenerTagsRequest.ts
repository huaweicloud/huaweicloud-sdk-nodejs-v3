import { BatchDeleteListenerTagsRequestBody } from './BatchDeleteListenerTagsRequestBody';


export class BatchDeleteListenerTagsRequest {
    private 'listener_id': string | undefined;
    public body?: BatchDeleteListenerTagsRequestBody;
    public constructor(listenerId?: any) { 
        this['listener_id'] = listenerId;
    }
    public withListenerId(listenerId: string): BatchDeleteListenerTagsRequest {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId() {
        return this['listener_id'];
    }
    public withBody(body: BatchDeleteListenerTagsRequestBody): BatchDeleteListenerTagsRequest {
        this['body'] = body;
        return this;
    }
}