

export class DeleteListenerTagsRequest {
    private 'listener_id': string | undefined;
    public key: string;
    public constructor(listenerId?: any, key?: any) { 
        this['listener_id'] = listenerId;
        this['key'] = key;
    }
    public withListenerId(listenerId: string): DeleteListenerTagsRequest {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId() {
        return this['listener_id'];
    }
    public withKey(key: string): DeleteListenerTagsRequest {
        this['key'] = key;
        return this;
    }
}