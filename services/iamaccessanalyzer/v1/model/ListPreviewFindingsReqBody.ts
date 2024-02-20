import { FindingFilter } from './FindingFilter';


export class ListPreviewFindingsReqBody {
    public filters?: Array<FindingFilter>;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withFilters(filters: Array<FindingFilter>): ListPreviewFindingsReqBody {
        this['filters'] = filters;
        return this;
    }
    public withLimit(limit: number): ListPreviewFindingsReqBody {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPreviewFindingsReqBody {
        this['marker'] = marker;
        return this;
    }
}