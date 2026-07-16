
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteInferDeploymentPodResponse extends SdkResponse {
    private 'pod_name'?: string;
    public constructor() { 
        super();
    }
    public withPodName(podName: string): DeleteInferDeploymentPodResponse {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
}