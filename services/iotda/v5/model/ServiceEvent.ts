import { ServiceCommandPara } from './ServiceCommandPara';


export class ServiceEvent {
    private 'event_type'?: string;
    public paras?: Array<ServiceCommandPara>;
    public constructor(eventType?: string) { 
        this['event_type'] = eventType;
    }
    public withEventType(eventType: string): ServiceEvent {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withParas(paras: Array<ServiceCommandPara>): ServiceEvent {
        this['paras'] = paras;
        return this;
    }
}