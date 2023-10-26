

export class ListInstantQueryAomPromGetRequest {
    public query?: string;
    public time?: string;
    public constructor(query?: string) { 
        this['query'] = query;
    }
    public withQuery(query: string): ListInstantQueryAomPromGetRequest {
        this['query'] = query;
        return this;
    }
    public withTime(time: string): ListInstantQueryAomPromGetRequest {
        this['time'] = time;
        return this;
    }
}