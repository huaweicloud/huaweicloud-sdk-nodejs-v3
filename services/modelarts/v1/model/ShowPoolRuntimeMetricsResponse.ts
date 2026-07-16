import { MetricsItem } from './MetricsItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPoolRuntimeMetricsResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public items?: Array<MetricsItem>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ShowPoolRuntimeMetricsResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ShowPoolRuntimeMetricsResponse {
        this['kind'] = kind;
        return this;
    }
    public withItems(items: Array<MetricsItem>): ShowPoolRuntimeMetricsResponse {
        this['items'] = items;
        return this;
    }
}