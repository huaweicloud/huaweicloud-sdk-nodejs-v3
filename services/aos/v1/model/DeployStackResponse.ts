
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeployStackResponse extends SdkResponse {
    private 'deployment_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withDeploymentId(deploymentId: string): DeployStackResponse {
        this['deployment_id'] = deploymentId;
        return this;
    }
    public set deploymentId(deploymentId: string | undefined) {
        this['deployment_id'] = deploymentId;
    }
    public get deploymentId() {
        return this['deployment_id'];
    }
}