import { ListGroupPackagesResource } from './ListGroupPackagesResource';
import { ListResourcePackagesRespMoudle } from './ListResourcePackagesRespMoudle';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourcesResponse extends SdkResponse {
    public resources?: Array<ListGroupPackagesResource>;
    public modules?: Array<ListResourcePackagesRespMoudle>;
    public groups?: Array<object>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<ListGroupPackagesResource>): ListResourcesResponse {
        this['resources'] = resources;
        return this;
    }
    public withModules(modules: Array<ListResourcePackagesRespMoudle>): ListResourcesResponse {
        this['modules'] = modules;
        return this;
    }
    public withGroups(groups: Array<object>): ListResourcesResponse {
        this['groups'] = groups;
        return this;
    }
    public withTotal(total: number): ListResourcesResponse {
        this['total'] = total;
        return this;
    }
}