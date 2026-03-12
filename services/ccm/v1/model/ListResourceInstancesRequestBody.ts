import { DomainTags } from './DomainTags';
import { ResourceTag } from './ResourceTag';


export class ListResourceInstancesRequestBody {
    public tags?: Array<DomainTags>;
    public limit?: number;
    public offset?: number;
    public matches?: Array<ResourceTag>;
    public constructor() { 
    }
    public withTags(tags: Array<DomainTags>): ListResourceInstancesRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withLimit(limit: number): ListResourceInstancesRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListResourceInstancesRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withMatches(matches: Array<ResourceTag>): ListResourceInstancesRequestBody {
        this['matches'] = matches;
        return this;
    }
}