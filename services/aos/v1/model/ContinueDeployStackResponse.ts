
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ContinueDeployStackResponse extends SdkResponse {
    private 'deployment_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withDeploymentId(deploymentId: string): ContinueDeployStackResponse {
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