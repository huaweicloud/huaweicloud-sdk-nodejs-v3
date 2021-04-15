import { AddonTemplate } from './AddonTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAddonTemplatesResponse extends SdkResponse {
    public apiVersion?: string;
    public items?: Array<AddonTemplate>;
    public kind?: string;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListAddonTemplatesResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withItems(items: Array<AddonTemplate>): ListAddonTemplatesResponse {
        this['items'] = items;
        return this;
    }
    public withKind(kind: string): ListAddonTemplatesResponse {
        this['kind'] = kind;
        return this;
    }
}