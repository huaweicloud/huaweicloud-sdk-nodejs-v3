import { CdmClusterEnterpriseProject } from './CdmClusterEnterpriseProject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEnterpriseProjectsResponse extends SdkResponse {
    public resources?: Array<CdmClusterEnterpriseProject>;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<CdmClusterEnterpriseProject>): ShowEnterpriseProjectsResponse {
        this['resources'] = resources;
        return this;
    }
}