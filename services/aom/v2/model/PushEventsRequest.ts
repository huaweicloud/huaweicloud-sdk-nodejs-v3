import { EventList } from './EventList';


export class PushEventsRequest {
    private 'x-enterprise-prject-id'?: string;
    public action?: PushEventsRequestActionEnum | string;
    public body?: EventList;
    public constructor() { 
    }
    public withXEnterprisePrjectId(xEnterprisePrjectId: string): PushEventsRequest {
        this['x-enterprise-prject-id'] = xEnterprisePrjectId;
        return this;
    }
    public set xEnterprisePrjectId(xEnterprisePrjectId: string  | undefined) {
        this['x-enterprise-prject-id'] = xEnterprisePrjectId;
    }
    public get xEnterprisePrjectId(): string | undefined {
        return this['x-enterprise-prject-id'];
    }
    public withAction(action: PushEventsRequestActionEnum | string): PushEventsRequest {
        this['action'] = action;
        return this;
    }
    public withBody(body: EventList): PushEventsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PushEventsRequestActionEnum {
    CLEAR = 'clear'
}
