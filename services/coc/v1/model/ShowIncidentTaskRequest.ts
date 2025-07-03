

export class ShowIncidentTaskRequest {
    private 'incident_id'?: string;
    public constructor(incidentId?: string) { 
        this['incident_id'] = incidentId;
    }
    public withIncidentId(incidentId: string): ShowIncidentTaskRequest {
        this['incident_id'] = incidentId;
        return this;
    }
    public set incidentId(incidentId: string  | undefined) {
        this['incident_id'] = incidentId;
    }
    public get incidentId(): string | undefined {
        return this['incident_id'];
    }
}