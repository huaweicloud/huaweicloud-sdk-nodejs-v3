

export class ListTableHistogramsRequestBody {
    public from?: number;
    public to?: number;
    public query?: string;
    public constructor(query?: string) { 
        this['query'] = query;
    }
    public withFrom(from: number): ListTableHistogramsRequestBody {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListTableHistogramsRequestBody {
        this['to'] = to;
        return this;
    }
    public withQuery(query: string): ListTableHistogramsRequestBody {
        this['query'] = query;
        return this;
    }
}