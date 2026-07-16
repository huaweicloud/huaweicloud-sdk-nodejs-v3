import { PluginTemplateV2 } from './PluginTemplateV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPluginTemplatesResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public items?: Array<PluginTemplateV2>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListPluginTemplatesResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ListPluginTemplatesResponse {
        this['kind'] = kind;
        return this;
    }
    public withItems(items: Array<PluginTemplateV2>): ListPluginTemplatesResponse {
        this['items'] = items;
        return this;
    }
}