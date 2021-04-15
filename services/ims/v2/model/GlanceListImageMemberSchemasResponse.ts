import { Links } from './Links';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GlanceListImageMemberSchemasResponse extends SdkResponse {
    public links?: Array<Links>;
    public name?: string;
    public properties?: object;
    public constructor() { 
        super();
    }
    public withLinks(links: Array<Links>): GlanceListImageMemberSchemasResponse {
        this['links'] = links;
        return this;
    }
    public withName(name: string): GlanceListImageMemberSchemasResponse {
        this['name'] = name;
        return this;
    }
    public withProperties(properties: object): GlanceListImageMemberSchemasResponse {
        this['properties'] = properties;
        return this;
    }
}