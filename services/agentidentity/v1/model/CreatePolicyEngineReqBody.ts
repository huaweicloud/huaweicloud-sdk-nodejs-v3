import { PolicyEngineType } from './PolicyEngineType';
import { Tag } from './Tag';


export class CreatePolicyEngineReqBody {
    public name?: string;
    public type?: PolicyEngineType;
    public description?: string;
    public tags?: Array<Tag>;
    public constructor(name?: string, type?: PolicyEngineType) { 
        this['name'] = name;
        this['type'] = type;
    }
    public withName(name: string): CreatePolicyEngineReqBody {
        this['name'] = name;
        return this;
    }
    public withType(type: PolicyEngineType): CreatePolicyEngineReqBody {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): CreatePolicyEngineReqBody {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<Tag>): CreatePolicyEngineReqBody {
        this['tags'] = tags;
        return this;
    }
}