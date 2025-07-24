import { CommonResponseErrorOfAPITest } from './CommonResponseErrorOfAPITest';
import { PackageUsage } from './PackageUsage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserPackageUsageResponse extends SdkResponse {
    public status?: string;
    public result?: Array<PackageUsage>;
    public error?: CommonResponseErrorOfAPITest;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListUserPackageUsageResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: Array<PackageUsage>): ListUserPackageUsageResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: CommonResponseErrorOfAPITest): ListUserPackageUsageResponse {
        this['error'] = error;
        return this;
    }
}