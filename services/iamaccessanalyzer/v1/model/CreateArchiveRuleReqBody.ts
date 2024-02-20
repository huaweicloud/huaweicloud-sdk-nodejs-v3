import { FindingFilter } from './FindingFilter';


export class CreateArchiveRuleReqBody {
    public filters?: Array<FindingFilter>;
    public name?: string;
    public constructor(filters?: Array<FindingFilter>, name?: string) { 
        this['filters'] = filters;
        this['name'] = name;
    }
    public withFilters(filters: Array<FindingFilter>): CreateArchiveRuleReqBody {
        this['filters'] = filters;
        return this;
    }
    public withName(name: string): CreateArchiveRuleReqBody {
        this['name'] = name;
        return this;
    }
}