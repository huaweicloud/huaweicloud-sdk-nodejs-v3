import { ListenerAccessControlType } from './ListenerAccessControlType';


export class AssociateListenerRequestBody {
    private 'listener_id': string | undefined;
    public type: ListenerAccessControlType;
    public constructor(listenerId?: any, type?: any) { 
        this['listener_id'] = listenerId;
        this['type'] = type;
    }
    public withListenerId(listenerId: string): AssociateListenerRequestBody {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId() {
        return this['listener_id'];
    }
    public withType(type: ListenerAccessControlType): AssociateListenerRequestBody {
        this['type'] = type;
        return this;
    }
}