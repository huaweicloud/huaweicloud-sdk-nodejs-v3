import { ListenerAccessControlType } from './ListenerAccessControlType';


export class ListenerAccessControlPolicy {
    private 'listener_id'?: string;
    public type?: ListenerAccessControlType;
    public constructor() { 
    }
    public withListenerId(listenerId: string): ListenerAccessControlPolicy {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
    public withType(type: ListenerAccessControlType): ListenerAccessControlPolicy {
        this['type'] = type;
        return this;
    }
}