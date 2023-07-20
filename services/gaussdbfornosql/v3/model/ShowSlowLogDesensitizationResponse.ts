
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSlowLogDesensitizationResponse extends SdkResponse {
    private 'desensitization_status'?: string;
    public constructor() { 
        super();
    }
    public withDesensitizationStatus(desensitizationStatus: string): ShowSlowLogDesensitizationResponse {
        this['desensitization_status'] = desensitizationStatus;
        return this;
    }
    public set desensitizationStatus(desensitizationStatus: string  | undefined) {
        this['desensitization_status'] = desensitizationStatus;
    }
    public get desensitizationStatus(): string | undefined {
        return this['desensitization_status'];
    }
}