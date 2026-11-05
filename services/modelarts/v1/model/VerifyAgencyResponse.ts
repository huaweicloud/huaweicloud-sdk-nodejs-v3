
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class VerifyAgencyResponse extends SdkResponse {
    private 'is_authorized'?: boolean;
    private 'agency_name'?: string;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withIsAuthorized(isAuthorized: boolean): VerifyAgencyResponse {
        this['is_authorized'] = isAuthorized;
        return this;
    }
    public set isAuthorized(isAuthorized: boolean  | undefined) {
        this['is_authorized'] = isAuthorized;
    }
    public get isAuthorized(): boolean | undefined {
        return this['is_authorized'];
    }
    public withAgencyName(agencyName: string): VerifyAgencyResponse {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withXRequestId(xRequestId: string): VerifyAgencyResponse {
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