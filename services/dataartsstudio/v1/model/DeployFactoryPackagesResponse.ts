import { DeployPackagesResponseDeployPackageDetails } from './DeployPackagesResponseDeployPackageDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeployFactoryPackagesResponse extends SdkResponse {
    private 'deploy_package_details'?: Array<DeployPackagesResponseDeployPackageDetails>;
    public constructor() { 
        super();
    }
    public withDeployPackageDetails(deployPackageDetails: Array<DeployPackagesResponseDeployPackageDetails>): DeployFactoryPackagesResponse {
        this['deploy_package_details'] = deployPackageDetails;
        return this;
    }
    public set deployPackageDetails(deployPackageDetails: Array<DeployPackagesResponseDeployPackageDetails>  | undefined) {
        this['deploy_package_details'] = deployPackageDetails;
    }
    public get deployPackageDetails(): Array<DeployPackagesResponseDeployPackageDetails> | undefined {
        return this['deploy_package_details'];
    }
}