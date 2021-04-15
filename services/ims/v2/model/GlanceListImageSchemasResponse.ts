import { Links } from './Links';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GlanceListImageSchemasResponse extends SdkResponse {
    public name?: string;
    public properties?: object;
    public links?: Array<Links>;
    public constructor() { 
        super();
    }
    public withName(name: string): GlanceListImageSchemasResponse {
        this['name'] = name;
        return this;
    }
    public withProperties(properties: object): GlanceListImageSchemasResponse {
        this['properties'] = properties;
        return this;
    }
    public withLinks(links: Array<Links>): GlanceListImageSchemasResponse {
        this['links'] = links;
        return this;
    }
}