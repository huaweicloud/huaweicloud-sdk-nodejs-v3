

export class ListRangeQueryAomPromPostRequest {
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
    public withQuery(query: string): ListRangeQueryAomPromPostRequest {
        this['query'] = query;
        return this;
    }
    public withStart(start: string): ListRangeQueryAomPromPostRequest {
        this['start'] = start;
        return this;
    }
    public withEnd(end: string): ListRangeQueryAomPromPostRequest {
        this['end'] = end;
        return this;
    }
    public withStep(step: string): ListRangeQueryAomPromPostRequest {
        this['step'] = step;
        return this;
    }
}