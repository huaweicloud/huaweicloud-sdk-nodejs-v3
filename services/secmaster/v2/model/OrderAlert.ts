import { OrderAlertIncidentContent } from './OrderAlertIncidentContent';


export class OrderAlert {
    public ids?: Array<string>;
    private 'incident_content'?: OrderAlertIncidentContent;
    public constructor() { 
    }
    public withIds(ids: Array<string>): OrderAlert {
        this['ids'] = ids;
        return this;
    }
    public withIncidentContent(incidentContent: OrderAlertIncidentContent): OrderAlert {
        this['incident_content'] = incidentContent;
        return this;
    }
    public set incidentContent(incidentContent: OrderAlertIncidentContent  | undefined) {
        this['incident_content'] = incidentContent;
    }
    public get incidentContent(): OrderAlertIncidentContent | undefined {
        return this['incident_content'];
    }
}