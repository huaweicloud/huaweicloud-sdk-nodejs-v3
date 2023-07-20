

export class EventResponse {
    public category?: string;
    public description?: string;
    private 'event_id'?: string;
    public name?: string;
    private 'display_name'?: string;
    private 'name_space'?: string;
    public severity?: string;
    private 'source_type'?: string;
    private 'occur_time'?: number;
    private 'project_id'?: string;
    private 'source_id'?: string;
    private 'source_name'?: string;
    public status?: number;
    public subject?: string;
    public context?: string;
    public constructor() { 
    }
    public withCategory(category: string): EventResponse {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): EventResponse {
        this['description'] = description;
        return this;
    }
    public withEventId(eventId: string): EventResponse {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withName(name: string): EventResponse {
        this['name'] = name;
        return this;
    }
    public withDisplayName(displayName: string): EventResponse {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withNameSpace(nameSpace: string): EventResponse {
        this['name_space'] = nameSpace;
        return this;
    }
    public set nameSpace(nameSpace: string  | undefined) {
        this['name_space'] = nameSpace;
    }
    public get nameSpace(): string | undefined {
        return this['name_space'];
    }
    public withSeverity(severity: string): EventResponse {
        this['severity'] = severity;
        return this;
    }
    public withSourceType(sourceType: string): EventResponse {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): string | undefined {
        return this['source_type'];
    }
    public withOccurTime(occurTime: number): EventResponse {
        this['occur_time'] = occurTime;
        return this;
    }
    public set occurTime(occurTime: number  | undefined) {
        this['occur_time'] = occurTime;
    }
    public get occurTime(): number | undefined {
        return this['occur_time'];
    }
    public withProjectId(projectId: string): EventResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSourceId(sourceId: string): EventResponse {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withSourceName(sourceName: string): EventResponse {
        this['source_name'] = sourceName;
        return this;
    }
    public set sourceName(sourceName: string  | undefined) {
        this['source_name'] = sourceName;
    }
    public get sourceName(): string | undefined {
        return this['source_name'];
    }
    public withStatus(status: number): EventResponse {
        this['status'] = status;
        return this;
    }
    public withSubject(subject: string): EventResponse {
        this['subject'] = subject;
        return this;
    }
    public withContext(context: string): EventResponse {
        this['context'] = context;
        return this;
    }
}