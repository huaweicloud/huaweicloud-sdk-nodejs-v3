import { PackageResource } from './PackageResource';
import { PackageResourceGroup } from './PackageResourceGroup';
import { PackageResourceMoudle } from './PackageResourceMoudle';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobResourcesResponse extends SdkResponse {
    public total?: number;
    public resources?: Array<PackageResource>;
    public modules?: Array<PackageResourceMoudle>;
    public groups?: Array<PackageResourceGroup>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListJobResourcesResponse {
        this['total'] = total;
        return this;
    }
    public withResources(resources: Array<PackageResource>): ListJobResourcesResponse {
        this['resources'] = resources;
        return this;
    }
    public withModules(modules: Array<PackageResourceMoudle>): ListJobResourcesResponse {
        this['modules'] = modules;
        return this;
    }
    public withGroups(groups: Array<PackageResourceGroup>): ListJobResourcesResponse {
        this['groups'] = groups;
        return this;
    }
}