import { Tag } from './Tag';
import { TagItem } from './TagItem';


export class ListResourceInstancesRequestBody {
    public limit?: string;
    public offset?: string;
    public action?: string;
    public tags?: Array<Tag>;
    public matches?: Array<TagItem>;
    public sequence?: string;
    public constructor() { 
    }
    public withLimit(limit: string): ListResourceInstancesRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListResourceInstancesRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withAction(action: string): ListResourceInstancesRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<Tag>): ListResourceInstancesRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withMatches(matches: Array<TagItem>): ListResourceInstancesRequestBody {
        this['matches'] = matches;
        return this;
    }
    public withSequence(sequence: string): ListResourceInstancesRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}