
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTrustServiceStatusResponse extends SdkResponse {
    private 'trusted_services_enabled'?: boolean;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTrustedServicesEnabled(trustedServicesEnabled: boolean): ListTrustServiceStatusResponse {
        this['trusted_services_enabled'] = trustedServicesEnabled;
        return this;
    }
    public set trustedServicesEnabled(trustedServicesEnabled: boolean  | undefined) {
        this['trusted_services_enabled'] = trustedServicesEnabled;
    }
    public get trustedServicesEnabled(): boolean | undefined {
        return this['trusted_services_enabled'];
    }
    public withXRequestId(xRequestId: string): ListTrustServiceStatusResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}