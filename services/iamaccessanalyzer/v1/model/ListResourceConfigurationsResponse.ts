import { PageInfo } from './PageInfo';
import { ResourceConfiguration } from './ResourceConfiguration';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceConfigurationsResponse extends SdkResponse {
    private 'resource_configurations'?: Array<ResourceConfiguration>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withResourceConfigurations(resourceConfigurations: Array<ResourceConfiguration>): ListResourceConfigurationsResponse {
        this['resource_configurations'] = resourceConfigurations;
        return this;
    }
    public set resourceConfigurations(resourceConfigurations: Array<ResourceConfiguration>  | undefined) {
        this['resource_configurations'] = resourceConfigurations;
    }
    public get resourceConfigurations(): Array<ResourceConfiguration> | undefined {
        return this['resource_configurations'];
    }
    public withPageInfo(pageInfo: PageInfo): ListResourceConfigurationsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}