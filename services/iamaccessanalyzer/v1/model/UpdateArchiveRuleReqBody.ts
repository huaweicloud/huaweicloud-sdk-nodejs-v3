import { FindingFilter } from './FindingFilter';


export class UpdateArchiveRuleReqBody {
    public filters?: Array<FindingFilter>;
    public constructor(filters?: Array<FindingFilter>) { 
        this['filters'] = filters;
    }
    public withFilters(filters: Array<FindingFilter>): UpdateArchiveRuleReqBody {
        this['filters'] = filters;
        return this;
    }
}