import { ResourceTag } from './ResourceTag';


export class CreateOrDeleteInstanceTags {
    public action?: string;
    public tags?: Array<ResourceTag>;
    public constructor(action?: string, tags?: Array<ResourceTag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: string): CreateOrDeleteInstanceTags {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): CreateOrDeleteInstanceTags {
        this['tags'] = tags;
        return this;
    }
}