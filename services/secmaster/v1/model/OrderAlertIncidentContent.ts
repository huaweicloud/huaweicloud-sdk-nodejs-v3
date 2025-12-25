import { OrderAlertIncidentContentIncidentType } from './OrderAlertIncidentContentIncidentType';


export class OrderAlertIncidentContent {
    public title?: string;
    private 'incident_type'?: OrderAlertIncidentContentIncidentType;
    public constructor() { 
    }
    public withTitle(title: string): OrderAlertIncidentContent {
        this['title'] = title;
        return this;
    }
    public withIncidentType(incidentType: OrderAlertIncidentContentIncidentType): OrderAlertIncidentContent {
        this['incident_type'] = incidentType;
        return this;
    }
    public set incidentType(incidentType: OrderAlertIncidentContentIncidentType  | undefined) {
        this['incident_type'] = incidentType;
    }
    public get incidentType(): OrderAlertIncidentContentIncidentType | undefined {
        return this['incident_type'];
    }
}