import { DeletingResourceTag } from './DeletingResourceTag';


export class DeleteTagsRequestBody {
    public tags?: Array<DeletingResourceTag>;
    public constructor(tags?: Array<DeletingResourceTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<DeletingResourceTag>): DeleteTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}