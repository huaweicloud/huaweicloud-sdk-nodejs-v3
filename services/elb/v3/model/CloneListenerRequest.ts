import { CloneListenerRequestBody } from './CloneListenerRequestBody';


export class CloneListenerRequest {
    private 'listener_id'?: string;
    public body?: CloneListenerRequestBody;
    public constructor(listenerId?: string) { 
        this['listener_id'] = listenerId;
    }
    public withListenerId(listenerId: string): CloneListenerRequest {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
    public withBody(body: CloneListenerRequestBody): CloneListenerRequest {
        this['body'] = body;
        return this;
    }
}