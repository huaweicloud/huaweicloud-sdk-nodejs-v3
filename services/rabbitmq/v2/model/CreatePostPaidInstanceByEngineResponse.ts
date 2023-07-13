
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePostPaidInstanceByEngineResponse extends SdkResponse {
    private 'instance_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): CreatePostPaidInstanceByEngineResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
}