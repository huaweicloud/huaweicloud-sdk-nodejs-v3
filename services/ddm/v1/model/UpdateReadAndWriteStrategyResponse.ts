
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateReadAndWriteStrategyResponse extends SdkResponse {
    public success?: boolean;
    private 'instance_id'?: string;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): UpdateReadAndWriteStrategyResponse {
        this['success'] = success;
        return this;
    }
    public withInstanceId(instanceId: string): UpdateReadAndWriteStrategyResponse {
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