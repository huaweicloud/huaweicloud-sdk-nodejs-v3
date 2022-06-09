import { UpdateListenerRequestBody } from './UpdateListenerRequestBody';


export class UpdateListenerRequest {
    private 'listener_id': string | undefined;
    public body?: UpdateListenerRequestBody;
    public constructor(listenerId?: any) { 
        this['listener_id'] = listenerId;
    }
    public withListenerId(listenerId: string): UpdateListenerRequest {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId() {
        return this['listener_id'];
    }
    public withBody(body: UpdateListenerRequestBody): UpdateListenerRequest {
        this['body'] = body;
        return this;
    }
}