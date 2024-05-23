import { TagDto } from './TagDto';


export class CreatePolicyReqBody {
    public content?: string;
    public description?: string;
    public name?: string;
    public type?: CreatePolicyReqBodyTypeEnum | string;
    public tags?: Array<TagDto>;
    public constructor(content?: string, description?: string, name?: string, type?: string) { 
        this['content'] = content;
        this['description'] = description;
        this['name'] = name;
        this['type'] = type;
    }
    public withContent(content: string): CreatePolicyReqBody {
        this['content'] = content;
        return this;
    }
    public withDescription(description: string): CreatePolicyReqBody {
        this['description'] = description;
        return this;
    }
    public withName(name: string): CreatePolicyReqBody {
        this['name'] = name;
        return this;
    }
    public withType(type: CreatePolicyReqBodyTypeEnum | string): CreatePolicyReqBody {
        this['type'] = type;
        return this;
    }
    public withTags(tags: Array<TagDto>): CreatePolicyReqBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePolicyReqBodyTypeEnum {
    SERVICE_CONTROL_POLICY = 'service_control_policy',
    TAG_POLICY = 'tag_policy'
}
