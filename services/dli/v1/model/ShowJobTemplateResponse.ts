import { BatchJobInfo } from './BatchJobInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobTemplateResponse extends SdkResponse {
    public type?: string;
    public id?: string;
    public name?: string;
    public body?: BatchJobInfo;
    public group?: string;
    public description?: string;
    public language?: string;
    public owner?: string;
    public constructor() { 
        super();
    }
    public withType(type: string): ShowJobTemplateResponse {
        this['type'] = type;
        return this;
    }
    public withId(id: string): ShowJobTemplateResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowJobTemplateResponse {
        this['name'] = name;
        return this;
    }
    public withBody(body: BatchJobInfo): ShowJobTemplateResponse {
        this['body'] = body;
        return this;
    }
    public withGroup(group: string): ShowJobTemplateResponse {
        this['group'] = group;
        return this;
    }
    public withDescription(description: string): ShowJobTemplateResponse {
        this['description'] = description;
        return this;
    }
    public withLanguage(language: string): ShowJobTemplateResponse {
        this['language'] = language;
        return this;
    }
    public withOwner(owner: string): ShowJobTemplateResponse {
        this['owner'] = owner;
        return this;
    }
}