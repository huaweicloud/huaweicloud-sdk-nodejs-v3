

export class ListInstantQueryAomPromPostRequest {
    public query?: string;
    public time?: string;
    public constructor(query?: string) { 
        this['query'] = query;
    }
    public withQuery(query: string): ListInstantQueryAomPromPostRequest {
        this['query'] = query;
        return this;
    }
    public withTime(time: string): ListInstantQueryAomPromPostRequest {
        this['time'] = time;
        return this;
    }
}