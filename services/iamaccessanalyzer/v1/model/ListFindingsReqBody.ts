import { FindingFilter } from './FindingFilter';


export class ListFindingsReqBody {
    public filters?: Array<FindingFilter>;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withFilters(filters: Array<FindingFilter>): ListFindingsReqBody {
        this['filters'] = filters;
        return this;
    }
    public withLimit(limit: number): ListFindingsReqBody {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListFindingsReqBody {
        this['marker'] = marker;
        return this;
    }
}