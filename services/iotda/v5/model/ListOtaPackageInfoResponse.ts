import { OtaPackageInfo } from './OtaPackageInfo';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOtaPackageInfoResponse extends SdkResponse {
    public packages?: Array<OtaPackageInfo>;
    public page?: PageInfo;
    public constructor() { 
        super();
    }
    public withPackages(packages: Array<OtaPackageInfo>): ListOtaPackageInfoResponse {
        this['packages'] = packages;
        return this;
    }
    public withPage(page: PageInfo): ListOtaPackageInfoResponse {
        this['page'] = page;
        return this;
    }
}