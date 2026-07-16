
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteInferDeploymentInstanceResponse extends SdkResponse {
    private 'instance_name'?: string;
    public constructor() { 
        super();
    }
    public withInstanceName(instanceName: string): DeleteInferDeploymentInstanceResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
}