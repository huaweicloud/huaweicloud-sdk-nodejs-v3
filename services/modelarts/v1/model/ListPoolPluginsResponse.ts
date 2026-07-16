import { Plugin } from './Plugin';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPoolPluginsResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public items?: Array<Plugin>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListPoolPluginsResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ListPoolPluginsResponse {
        this['kind'] = kind;
        return this;
    }
    public withItems(items: Array<Plugin>): ListPoolPluginsResponse {
        this['items'] = items;
        return this;
    }
}