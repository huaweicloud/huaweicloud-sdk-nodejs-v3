
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRocketMqScalePreCheckInfoResponse extends SdkResponse {
    public name?: string;
    public success?: boolean;
    public reason?: string;
    public risk?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowRocketMqScalePreCheckInfoResponse {
        this['name'] = name;
        return this;
    }
    public withSuccess(success: boolean): ShowRocketMqScalePreCheckInfoResponse {
        this['success'] = success;
        return this;
    }
    public withReason(reason: string): ShowRocketMqScalePreCheckInfoResponse {
        this['reason'] = reason;
        return this;
    }
    public withRisk(risk: string): ShowRocketMqScalePreCheckInfoResponse {
        this['risk'] = risk;
        return this;
    }
}