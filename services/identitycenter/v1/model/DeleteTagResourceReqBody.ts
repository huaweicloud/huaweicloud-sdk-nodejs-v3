import { DeleteTagDto } from './DeleteTagDto';


export class DeleteTagResourceReqBody {
    public tags?: Array<DeleteTagDto>;
    public constructor(tags?: Array<DeleteTagDto>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<DeleteTagDto>): DeleteTagResourceReqBody {
        this['tags'] = tags;
        return this;
    }
}