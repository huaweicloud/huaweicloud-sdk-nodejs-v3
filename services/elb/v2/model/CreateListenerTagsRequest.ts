import { CreateListenerTagsRequestBody } from './CreateListenerTagsRequestBody';


export class CreateListenerTagsRequest {
    private 'listener_id': string | undefined;
    public body?: CreateListenerTagsRequestBody;
    public constructor(listenerId?: any) { 
        this['listener_id'] = listenerId;
    }
    public withListenerId(listenerId: string): CreateListenerTagsRequest {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId() {
        return this['listener_id'];
    }
    public withBody(body: CreateListenerTagsRequestBody): CreateListenerTagsRequest {
        this['body'] = body;
        return this;
    }
}