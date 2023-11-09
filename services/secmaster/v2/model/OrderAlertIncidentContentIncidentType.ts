

export class OrderAlertIncidentContentIncidentType {
    public id?: string;
    public category?: string;
    private 'incident_type'?: string;
    public constructor() { 
    }
    public withId(id: string): OrderAlertIncidentContentIncidentType {
        this['id'] = id;
        return this;
    }
    public withCategory(category: string): OrderAlertIncidentContentIncidentType {
        this['category'] = category;
        return this;
    }
    public withIncidentType(incidentType: string): OrderAlertIncidentContentIncidentType {
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