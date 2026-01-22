
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKafkaScalePreCheckInfoResponse extends SdkResponse {
    public name?: string;
    public success?: boolean;
    public reason?: string;
    public risk?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowKafkaScalePreCheckInfoResponse {
        this['name'] = name;
        return this;
    }
    public withSuccess(success: boolean): ShowKafkaScalePreCheckInfoResponse {
        this['success'] = success;
        return this;
    }
    public withReason(reason: string): ShowKafkaScalePreCheckInfoResponse {
        this['reason'] = reason;
        return this;
    }
    public withRisk(risk: string): ShowKafkaScalePreCheckInfoResponse {
        this['risk'] = risk;
        return this;
    }
}