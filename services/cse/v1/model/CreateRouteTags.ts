

export class CreateRouteTags {
    private '&lt;tag&gt;'?: string;
    public constructor() { 
    }
    public withLessThanTagGreaterThan(lessThanTagGreaterThan: string): CreateRouteTags {
        this['&lt;tag&gt;'] = lessThanTagGreaterThan;
        return this;
    }
    public set lessThanTagGreaterThan(lessThanTagGreaterThan: string  | undefined) {
        this['&lt;tag&gt;'] = lessThanTagGreaterThan;
    }
    public get lessThanTagGreaterThan(): string | undefined {
        return this['&lt;tag&gt;'];
    }
}