import { Configuration } from './Configuration';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListComponentConfigurationsResponse extends SdkResponse {
    private 'api_version'?: string;
    public kind?: string;
    public items?: Array<Configuration>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListComponentConfigurationsResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): string | undefined {
        return this['api_version'];
    }
    public withKind(kind: string): ListComponentConfigurationsResponse {
        this['kind'] = kind;
        return this;
    }
    public withItems(items: Array<Configuration>): ListComponentConfigurationsResponse {
        this['items'] = items;
        return this;
    }
}