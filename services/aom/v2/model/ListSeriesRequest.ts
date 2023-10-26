import { SeriesAPIQueryItemParam } from './SeriesAPIQueryItemParam';


export class ListSeriesRequest {
    public limit?: string;
    public offset?: string;
    public body?: SeriesAPIQueryItemParam;
    public constructor() { 
    }
    public withLimit(limit: string): ListSeriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListSeriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: SeriesAPIQueryItemParam): ListSeriesRequest {
        this['body'] = body;
        return this;
    }
}