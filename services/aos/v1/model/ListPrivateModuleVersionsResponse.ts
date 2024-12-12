import { PrivateModuleVersionSummary } from './PrivateModuleVersionSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPrivateModuleVersionsResponse extends SdkResponse {
    public versions?: Array<PrivateModuleVersionSummary>;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<PrivateModuleVersionSummary>): ListPrivateModuleVersionsResponse {
        this['versions'] = versions;
        return this;
    }
}