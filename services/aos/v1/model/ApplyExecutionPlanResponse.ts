import { DeploymentIdPrimitiveTypeHolder } from './DeploymentIdPrimitiveTypeHolder';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ApplyExecutionPlanResponse extends SdkResponse {
    private 'deployment_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withDeploymentId(deploymentId: string): ApplyExecutionPlanResponse {
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