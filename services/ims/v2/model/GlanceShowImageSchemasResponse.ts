import { AdditionalProperties } from './AdditionalProperties';
import { Links } from './Links';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GlanceShowImageSchemasResponse extends SdkResponse {
    public additionalProperties?: AdditionalProperties;
    public name?: string;
    public properties?: object;
    public links?: Array<Links>;
    public constructor() { 
        super();
    }
    public withAdditionalProperties(additionalProperties: AdditionalProperties): GlanceShowImageSchemasResponse {
        this['additionalProperties'] = additionalProperties;
        return this;
    }
    public withName(name: string): GlanceShowImageSchemasResponse {
        this['name'] = name;
        return this;
    }
    public withProperties(properties: object): GlanceShowImageSchemasResponse {
        this['properties'] = properties;
        return this;
    }
    public withLinks(links: Array<Links>): GlanceShowImageSchemasResponse {
        this['links'] = links;
        return this;
    }
}