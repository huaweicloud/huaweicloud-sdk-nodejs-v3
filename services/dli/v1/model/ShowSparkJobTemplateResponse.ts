import { SparkJobTemplateDetail } from './SparkJobTemplateDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSparkJobTemplateResponse extends SdkResponse {
    public type?: string;
    public id?: string;
    public name?: string;
    public body?: SparkJobTemplateDetail;
    public group?: string;
    public description?: string;
    public language?: string;
    public owner?: string;
    public constructor() { 
        super();
    }
    public withType(type: string): ShowSparkJobTemplateResponse {
        this['type'] = type;
        return this;
    }
    public withId(id: string): ShowSparkJobTemplateResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowSparkJobTemplateResponse {
        this['name'] = name;
        return this;
    }
    public withBody(body: SparkJobTemplateDetail): ShowSparkJobTemplateResponse {
        this['body'] = body;
        return this;
    }
    public withGroup(group: string): ShowSparkJobTemplateResponse {
        this['group'] = group;
        return this;
    }
    public withDescription(description: string): ShowSparkJobTemplateResponse {
        this['description'] = description;
        return this;
    }
    public withLanguage(language: string): ShowSparkJobTemplateResponse {
        this['language'] = language;
        return this;
    }
    public withOwner(owner: string): ShowSparkJobTemplateResponse {
        this['owner'] = owner;
        return this;
    }
}