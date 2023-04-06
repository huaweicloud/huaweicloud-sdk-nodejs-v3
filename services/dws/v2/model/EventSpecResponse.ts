

export class EventSpecResponse {
    public id?: string;
    public name?: string;
    private 'display_name'?: string | undefined;
    public description?: string;
    public subject?: string;
    public category?: string;
    public severity?: string;
    private 'source_type'?: string | undefined;
    private 'name_space'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): EventSpecResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EventSpecResponse {
        this['name'] = name;
        return this;
    }
    public withDisplayName(displayName: string): EventSpecResponse {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName() {
        return this['display_name'];
    }
    public withDescription(description: string): EventSpecResponse {
        this['description'] = description;
        return this;
    }
    public withSubject(subject: string): EventSpecResponse {
        this['subject'] = subject;
        return this;
    }
    public withCategory(category: string): EventSpecResponse {
        this['category'] = category;
        return this;
    }
    public withSeverity(severity: string): EventSpecResponse {
        this['severity'] = severity;
        return this;
    }
    public withSourceType(sourceType: string): EventSpecResponse {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType() {
        return this['source_type'];
    }
    public withNameSpace(nameSpace: string): EventSpecResponse {
        this['name_space'] = nameSpace;
        return this;
    }
    public set nameSpace(nameSpace: string | undefined) {
        this['name_space'] = nameSpace;
    }
    public get nameSpace() {
        return this['name_space'];
    }
}