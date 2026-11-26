import { Tag } from './Tag';


export class UpdatePolicyEngineReqBody {
    public description?: string;
    public tags?: Array<Tag>;
    public constructor() { 
    }
    public withDescription(description: string): UpdatePolicyEngineReqBody {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<Tag>): UpdatePolicyEngineReqBody {
        this['tags'] = tags;
        return this;
    }
}