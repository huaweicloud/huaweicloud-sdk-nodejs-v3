import { ExecuteActionParamsV2 } from './ExecuteActionParamsV2';


export class HandleIncidentRequest {
    private 'incident_id'?: string;
    public body?: ExecuteActionParamsV2;
    public constructor(incidentId?: string) { 
        this['incident_id'] = incidentId;
    }
    public withIncidentId(incidentId: string): HandleIncidentRequest {
        this['incident_id'] = incidentId;
        return this;
    }
    public set incidentId(incidentId: string  | undefined) {
        this['incident_id'] = incidentId;
    }
    public get incidentId(): string | undefined {
        return this['incident_id'];
    }
    public withBody(body: ExecuteActionParamsV2): HandleIncidentRequest {
        this['body'] = body;
        return this;
    }
}