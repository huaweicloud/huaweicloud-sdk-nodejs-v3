
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTdeStatusResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'tde_status'?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowTdeStatusResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTdeStatus(tdeStatus: string): ShowTdeStatusResponse {
        this['tde_status'] = tdeStatus;
        return this;
    }
    public set tdeStatus(tdeStatus: string  | undefined) {
        this['tde_status'] = tdeStatus;
    }
    public get tdeStatus(): string | undefined {
        return this['tde_status'];
    }
}