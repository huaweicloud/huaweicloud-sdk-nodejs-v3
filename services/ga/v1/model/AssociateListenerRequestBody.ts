import { ListenerAccessControlType } from './ListenerAccessControlType';


export class AssociateListenerRequestBody {
    private 'listener_id'?: string;
    public type?: ListenerAccessControlType;
    public constructor(listenerId?: string, type?: ListenerAccessControlType) { 
        this['listener_id'] = listenerId;
        this['type'] = type;
    }
    public withListenerId(listenerId: string): AssociateListenerRequestBody {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
    public withType(type: ListenerAccessControlType): AssociateListenerRequestBody {
        this['type'] = type;
        return this;
    }
}