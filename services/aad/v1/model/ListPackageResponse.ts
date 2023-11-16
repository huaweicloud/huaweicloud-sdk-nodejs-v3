import { PackageResponse } from './PackageResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPackageResponse extends SdkResponse {
    public total?: number;
    public items?: Array<PackageResponse>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListPackageResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<PackageResponse>): ListPackageResponse {
        this['items'] = items;
        return this;
    }
}