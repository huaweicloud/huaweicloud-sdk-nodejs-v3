import { Tag } from './Tag';
import { TagItem } from './TagItem';


export class ListKmsByTagsRequestBody {
    public limit?: string;
    public offset?: string;
    public action?: string;
    public tags?: Array<Tag>;
    public matches?: Array<TagItem>;
    public sequence?: string;
    public constructor() { 
    }
    public withLimit(limit: string): ListKmsByTagsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListKmsByTagsRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withAction(action: string): ListKmsByTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<Tag>): ListKmsByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withMatches(matches: Array<TagItem>): ListKmsByTagsRequestBody {
        this['matches'] = matches;
        return this;
    }
    public withSequence(sequence: string): ListKmsByTagsRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}