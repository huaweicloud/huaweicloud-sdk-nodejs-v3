

export class ListSecretsRequest {
    public limit?: string;
    public marker?: string;
    private 'event_name'?: string;
    public constructor() { 
    }
    public withLimit(limit: string): ListSecretsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListSecretsRequest {
        this['marker'] = marker;
        return this;
    }
    public withEventName(eventName: string): ListSecretsRequest {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
}