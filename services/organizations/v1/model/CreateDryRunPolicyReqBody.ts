import { TagDto } from './TagDto';


export class CreateDryRunPolicyReqBody {
    public content?: string;
    public description?: string;
    public name?: string;
    public type?: CreateDryRunPolicyReqBodyTypeEnum | string;
    public tags?: Array<TagDto>;
    public constructor(content?: string, description?: string, name?: string, type?: string) { 
        this['content'] = content;
        this['description'] = description;
        this['name'] = name;
        this['type'] = type;
    }
    public withContent(content: string): CreateDryRunPolicyReqBody {
        this['content'] = content;
        return this;
    }
    public withDescription(description: string): CreateDryRunPolicyReqBody {
        this['description'] = description;
        return this;
    }
    public withName(name: string): CreateDryRunPolicyReqBody {
        this['name'] = name;
        return this;
    }
    public withType(type: CreateDryRunPolicyReqBodyTypeEnum | string): CreateDryRunPolicyReqBody {
        this['type'] = type;
        return this;
    }
    public withTags(tags: Array<TagDto>): CreateDryRunPolicyReqBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDryRunPolicyReqBodyTypeEnum {
    SERVICE_CONTROL_POLICY = 'service_control_policy'
}
