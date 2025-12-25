

export class IncidentIncidentType {
    public category?: string;
    private 'incident_type'?: string;
    public constructor() { 
    }
    public withCategory(category: string): IncidentIncidentType {
        this['category'] = category;
        return this;
    }
    public withIncidentType(incidentType: string): IncidentIncidentType {
        this['incident_type'] = incidentType;
        return this;
    }
    public set incidentType(incidentType: string  | undefined) {
        this['incident_type'] = incidentType;
    }
    public get incidentType(): string | undefined {
        return this['incident_type'];
    }
}