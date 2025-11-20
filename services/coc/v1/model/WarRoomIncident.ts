

export class WarRoomIncident {
    public id?: string;
    private 'incident_id'?: string;
    private 'alarm_id'?: string;
    private 'is_change_event'?: boolean;
    private 'source_id'?: number;
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
    public withAlarmId(alarmId: string): WarRoomIncident {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
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
    public withSourceId(sourceId: number): WarRoomIncident {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: number  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): number | undefined {
        return this['source_id'];
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