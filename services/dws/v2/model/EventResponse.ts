

export class EventResponse {
    public category?: string;
    public description?: string;
    private 'event_id'?: string | undefined;
    public name?: string;
    private 'display_name'?: string | undefined;
    private 'name_space'?: string | undefined;
    public severity?: string;
    private 'source_type'?: string | undefined;
    private 'occur_time'?: number | undefined;
    private 'project_id'?: string | undefined;
    private 'source_id'?: string | undefined;
    private 'source_name'?: string | undefined;
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
    public set eventId(eventId: string | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId() {
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
    public set displayName(displayName: string | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName() {
        return this['display_name'];
    }
    public withNameSpace(nameSpace: string): EventResponse {
        this['name_space'] = nameSpace;
        return this;
    }
    public set nameSpace(nameSpace: string | undefined) {
        this['name_space'] = nameSpace;
    }
    public get nameSpace() {
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
    public set sourceType(sourceType: string | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType() {
        return this['source_type'];
    }
    public withOccurTime(occurTime: number): EventResponse {
        this['occur_time'] = occurTime;
        return this;
    }
    public set occurTime(occurTime: number | undefined) {
        this['occur_time'] = occurTime;
    }
    public get occurTime() {
        return this['occur_time'];
    }
    public withProjectId(projectId: string): EventResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withSourceId(sourceId: string): EventResponse {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId() {
        return this['source_id'];
    }
    public withSourceName(sourceName: string): EventResponse {
        this['source_name'] = sourceName;
        return this;
    }
    public set sourceName(sourceName: string | undefined) {
        this['source_name'] = sourceName;
    }
    public get sourceName() {
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