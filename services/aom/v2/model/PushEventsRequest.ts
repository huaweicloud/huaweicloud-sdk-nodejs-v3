import { EventList } from './EventList';


export class PushEventsRequest {
    private 'enterprise-project-id'?: string;
    public action?: PushEventsRequestActionEnum | string;
    public body?: EventList;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PushEventsRequest {
        this['enterprise-project-id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise-project-id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise-project-id'];
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
