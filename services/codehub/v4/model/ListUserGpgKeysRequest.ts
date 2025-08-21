

export class ListUserGpgKeysRequest {
    public query?: string;
    public constructor() { 
    }
    public withQuery(query: string): ListUserGpgKeysRequest {
        this['query'] = query;
        return this;
    }
}