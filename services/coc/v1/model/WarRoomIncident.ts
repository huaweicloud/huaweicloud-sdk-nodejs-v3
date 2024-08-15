

export class WarRoomIncident {
    public id?: string;
    private 'incident_id'?: string;
    private 'is_change_event'?: boolean;
    private 'failure_level'?: string;
    private 'incident_url'?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): WarRoomIncident {
        this['id'] = id;
        return this;
    }
    public withIncidentId(incidentId: string): WarRoomIncident {
        this['incident_id'] = incidentId;
        return this;
    }
    public set incidentId(incidentId: string  | undefined) {
        this['incident_id'] = incidentId;
    }
    public get incidentId(): string | undefined {
        return this['incident_id'];
    }
    public withIsChangeEvent(isChangeEvent: boolean): WarRoomIncident {
        this['is_change_event'] = isChangeEvent;
        return this;
    }
    public set isChangeEvent(isChangeEvent: boolean  | undefined) {
        this['is_change_event'] = isChangeEvent;
    }
    public get isChangeEvent(): boolean | undefined {
        return this['is_change_event'];
    }
    public withFailureLevel(failureLevel: string): WarRoomIncident {
        this['failure_level'] = failureLevel;
        return this;
    }
    public set failureLevel(failureLevel: string  | undefined) {
        this['failure_level'] = failureLevel;
    }
    public get failureLevel(): string | undefined {
        return this['failure_level'];
    }
    public withIncidentUrl(incidentUrl: string): WarRoomIncident {
        this['incident_url'] = incidentUrl;
        return this;
    }
    public set incidentUrl(incidentUrl: string  | undefined) {
        this['incident_url'] = incidentUrl;
    }
    public get incidentUrl(): string | undefined {
        return this['incident_url'];
    }
}