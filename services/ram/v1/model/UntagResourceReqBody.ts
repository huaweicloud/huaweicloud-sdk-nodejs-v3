import { Untag } from './Untag';


export class UntagResourceReqBody {
    public tags?: Array<Untag>;
    public constructor(tags?: Array<Untag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<Untag>): UntagResourceReqBody {
        this['tags'] = tags;
        return this;
    }
}