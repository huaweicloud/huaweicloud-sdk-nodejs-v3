

export class ListRangeQueryAomPromGetRequest {
    public query?: string;
    public start?: string;
    public end?: string;
    public step?: string;
    public constructor(query?: string, start?: string, end?: string, step?: string) { 
        this['query'] = query;
        this['start'] = start;
        this['end'] = end;
        this['step'] = step;
    }
    public withQuery(query: string): ListRangeQueryAomPromGetRequest {
        this['query'] = query;
        return this;
    }
    public withStart(start: string): ListRangeQueryAomPromGetRequest {
        this['start'] = start;
        return this;
    }
    public withEnd(end: string): ListRangeQueryAomPromGetRequest {
        this['end'] = end;
        return this;
    }
    public withStep(step: string): ListRangeQueryAomPromGetRequest {
        this['step'] = step;
        return this;
    }
}