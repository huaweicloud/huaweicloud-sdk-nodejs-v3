import { AddonTemplate } from './AddonTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAutopilotAddonTemplatesResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public items?: Array<AddonTemplate>;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ListAutopilotAddonTemplatesResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ListAutopilotAddonTemplatesResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withItems(items: Array<AddonTemplate>): ListAutopilotAddonTemplatesResponse {
        this['items'] = items;
        return this;
    }
}