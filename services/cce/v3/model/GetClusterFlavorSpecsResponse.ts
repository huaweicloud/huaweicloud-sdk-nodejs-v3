import { ClusterFlavorSpecification } from './ClusterFlavorSpecification';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetClusterFlavorSpecsResponse extends SdkResponse {
    public clusterFlavorSpecs?: Array<ClusterFlavorSpecification>;
    public constructor() { 
        super();
    }
    public withClusterFlavorSpecs(clusterFlavorSpecs: Array<ClusterFlavorSpecification>): GetClusterFlavorSpecsResponse {
        this['clusterFlavorSpecs'] = clusterFlavorSpecs;
        return this;
    }
}