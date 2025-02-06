
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetCustomPolicyForPermissionSetResponse extends SdkResponse {
    private 'custom_policy'?: string;
    public constructor() { 
        super();
    }
    public withCustomPolicy(customPolicy: string): GetCustomPolicyForPermissionSetResponse {
        this['custom_policy'] = customPolicy;
        return this;
    }
    public set customPolicy(customPolicy: string  | undefined) {
        this['custom_policy'] = customPolicy;
    }
    public get customPolicy(): string | undefined {
        return this['custom_policy'];
    }
}