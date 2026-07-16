import { DeleteTagItem } from './DeleteTagItem';


export class DeleteTagRequest {
    public tags?: Array<DeleteTagItem>;
    public constructor(tags?: Array<DeleteTagItem>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<DeleteTagItem>): DeleteTagRequest {
        this['tags'] = tags;
        return this;
    }
}