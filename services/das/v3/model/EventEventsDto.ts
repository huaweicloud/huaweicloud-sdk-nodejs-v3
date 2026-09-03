

export class EventEventsDto {
    private 'log_name'?: string;
    public pos?: number;
    private 'event_type'?: string;
    private 'server_id'?: string;
    private 'end_log_pos'?: number;
    public info?: string;
    public constructor() { 
    }
    public withLogName(logName: string): EventEventsDto {
        this['log_name'] = logName;
        return this;
    }
    public set logName(logName: string  | undefined) {
        this['log_name'] = logName;
    }
    public get logName(): string | undefined {
        return this['log_name'];
    }
    public withPos(pos: number): EventEventsDto {
        this['pos'] = pos;
        return this;
    }
    public withEventType(eventType: string): EventEventsDto {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withServerId(serverId: string): EventEventsDto {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withEndLogPos(endLogPos: number): EventEventsDto {
        this['end_log_pos'] = endLogPos;
        return this;
    }
    public set endLogPos(endLogPos: number  | undefined) {
        this['end_log_pos'] = endLogPos;
    }
    public get endLogPos(): number | undefined {
        return this['end_log_pos'];
    }
    public withInfo(info: string): EventEventsDto {
        this['info'] = info;
        return this;
    }
}