
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RestartManagerResponse extends SdkResponse {
    public result?: string;
    private 'instance_id'?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): RestartManagerResponse {
        this['result'] = result;
        return this;
    }
    public withInstanceId(instanceId: string): RestartManagerResponse {
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