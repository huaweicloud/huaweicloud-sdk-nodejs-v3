
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSecurityPolicyControlResponse extends SdkResponse {
    private 'enabled_count'?: number;
    private 'disabled_count'?: number;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withEnabledCount(enabledCount: number): UpdateSecurityPolicyControlResponse {
        this['enabled_count'] = enabledCount;
        return this;
    }
    public set enabledCount(enabledCount: number  | undefined) {
        this['enabled_count'] = enabledCount;
    }
    public get enabledCount(): number | undefined {
        return this['enabled_count'];
    }
    public withDisabledCount(disabledCount: number): UpdateSecurityPolicyControlResponse {
        this['disabled_count'] = disabledCount;
        return this;
    }
    public set disabledCount(disabledCount: number  | undefined) {
        this['disabled_count'] = disabledCount;
    }
    public get disabledCount(): number | undefined {
        return this['disabled_count'];
    }
    public withXRequestId(xRequestId: string): UpdateSecurityPolicyControlResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}