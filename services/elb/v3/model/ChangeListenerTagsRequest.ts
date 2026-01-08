import { ChangeListenerTagsRequestBody } from './ChangeListenerTagsRequestBody';


export class ChangeListenerTagsRequest {
    private 'listener_id'?: string;
    public body?: ChangeListenerTagsRequestBody;
    public constructor(listenerId?: string) { 
        this['listener_id'] = listenerId;
    }
    public withListenerId(listenerId: string): ChangeListenerTagsRequest {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
    public withBody(body: ChangeListenerTagsRequestBody): ChangeListenerTagsRequest {
        this['body'] = body;
        return this;
    }
}