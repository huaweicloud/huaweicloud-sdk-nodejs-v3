import { ResourcePackageInfo } from './ResourcePackageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListComputeResourceResponse extends SdkResponse {
    private 'resource_package_infos'?: Array<ResourcePackageInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withResourcePackageInfos(resourcePackageInfos: Array<ResourcePackageInfo>): ListComputeResourceResponse {
        this['resource_package_infos'] = resourcePackageInfos;
        return this;
    }
    public set resourcePackageInfos(resourcePackageInfos: Array<ResourcePackageInfo>  | undefined) {
        this['resource_package_infos'] = resourcePackageInfos;
    }
    public get resourcePackageInfos(): Array<ResourcePackageInfo> | undefined {
        return this['resource_package_infos'];
    }
    public withTotal(total: number): ListComputeResourceResponse {
        this['total'] = total;
        return this;
    }
}