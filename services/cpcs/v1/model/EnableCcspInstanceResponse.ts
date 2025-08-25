
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnableCcspInstanceResponse extends SdkResponse {
    private 'instance_id'?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): EnableCcspInstanceResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}