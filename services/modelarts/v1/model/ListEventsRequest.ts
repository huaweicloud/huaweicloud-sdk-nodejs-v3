

export class ListEventsRequest {
    public resource?: string;
    public name?: string;
    public limit?: number;
    private 'continue'?: string;
    public since?: number;
    public until?: number;
    public type?: string;
    public constructor(resource?: string, name?: string) { 
        this['resource'] = resource;
        this['name'] = name;
    }
    public withResource(resource: string): ListEventsRequest {
        this['resource'] = resource;
        return this;
    }
    public withName(name: string): ListEventsRequest {
        this['name'] = name;
        return this;
    }
    public withLimit(limit: number): ListEventsRequest {
        this['limit'] = limit;
        return this;
    }
    public withContinue(_continue: string): ListEventsRequest {
        this['continue'] = _continue;
        return this;
    }
    public set _continue(_continue: string  | undefined) {
        this['continue'] = _continue;
    }
    public get _continue(): string | undefined {
        return this['continue'];
    }
    public withSince(since: number): ListEventsRequest {
        this['since'] = since;
        return this;
    }
    public withUntil(until: number): ListEventsRequest {
        this['until'] = until;
        return this;
    }
    public withType(type: string): ListEventsRequest {
        this['type'] = type;
        return this;
    }
}