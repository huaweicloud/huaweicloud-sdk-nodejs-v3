import { TagItem } from './TagItem';


export class BatchCreateKmsTagsRequestBody {
    public tags?: Array<TagItem>;
    public action?: string;
    public sequence?: string;
    public constructor(tags?: Array<TagItem>, action?: string) { 
        this['tags'] = tags;
        this['action'] = action;
    }
    public withTags(tags: Array<TagItem>): BatchCreateKmsTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withAction(action: string): BatchCreateKmsTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withSequence(sequence: string): BatchCreateKmsTagsRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}