import { ApiVersionObj } from './ApiVersionObj';
import { ComponentConfigurationKindObj } from './ComponentConfigurationKindObj';
import { Instance } from './Instance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListComponentInstancesResponse extends SdkResponse {
    private 'api_version'?: ApiVersionObj;
    public kind?: ComponentConfigurationKindObj;
    public items?: Array<Instance>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: ApiVersionObj): ListComponentInstancesResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: ComponentConfigurationKindObj): ListComponentInstancesResponse {
        this['kind'] = kind;
        return this;
    }
    public withItems(items: Array<Instance>): ListComponentInstancesResponse {
        this['items'] = items;
        return this;
    }
}