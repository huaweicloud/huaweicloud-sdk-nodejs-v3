import { TagItem } from './TagItem';


export class BatchCreateOrDeleteTagsRequestBody {
    public tags?: Array<TagItem>;
    public action?: string;
    public sequence?: string;
    public constructor() { 
    }
    public withTags(tags: Array<TagItem>): BatchCreateOrDeleteTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withAction(action: string): BatchCreateOrDeleteTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withSequence(sequence: string): BatchCreateOrDeleteTagsRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}