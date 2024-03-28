import { PackageResource } from './PackageResource';
import { PackageResourceMoudle } from './PackageResourceMoudle';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobResourcesResponse extends SdkResponse {
    public resources?: Array<PackageResource>;
    public modules?: Array<PackageResourceMoudle>;
    public groups?: Array<object>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<PackageResource>): ListJobResourcesResponse {
        this['resources'] = resources;
        return this;
    }
    public withModules(modules: Array<PackageResourceMoudle>): ListJobResourcesResponse {
        this['modules'] = modules;
        return this;
    }
    public withGroups(groups: Array<object>): ListJobResourcesResponse {
        this['groups'] = groups;
        return this;
    }
    public withTotal(total: number): ListJobResourcesResponse {
        this['total'] = total;
        return this;
    }
}