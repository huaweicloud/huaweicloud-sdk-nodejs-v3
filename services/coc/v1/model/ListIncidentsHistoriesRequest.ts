import { ListTicketParamsV2 } from './ListTicketParamsV2';


export class ListIncidentsHistoriesRequest {
    private 'incident_id'?: string;
    public body?: ListTicketParamsV2;
    public constructor(incidentId?: string) { 
        this['incident_id'] = incidentId;
    }
    public withIncidentId(incidentId: string): ListIncidentsHistoriesRequest {
        this['incident_id'] = incidentId;
        return this;
    }
    public set incidentId(incidentId: string  | undefined) {
        this['incident_id'] = incidentId;
    }
    public get incidentId(): string | undefined {
        return this['incident_id'];
    }
    public withBody(body: ListTicketParamsV2): ListIncidentsHistoriesRequest {
        this['body'] = body;
        return this;
    }
}