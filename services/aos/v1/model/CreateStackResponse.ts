import { StackIdPrimitiveTypeHolder } from './StackIdPrimitiveTypeHolder';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateStackResponse extends SdkResponse {
    private 'stack_id'?: string | undefined;
    private 'deployment_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withStackId(stackId: string): CreateStackResponse {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId() {
        return this['stack_id'];
    }
    public withDeploymentId(deploymentId: string): CreateStackResponse {
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