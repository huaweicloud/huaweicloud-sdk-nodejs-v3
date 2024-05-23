
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAgencyWithRoleTypeResponse extends SdkResponse {
    private 'agency_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withAgencyId(agencyId: string): CreateAgencyWithRoleTypeResponse {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string  | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId(): string | undefined {
        return this['agency_id'];
    }
    public withXRequestId(xRequestId: string): CreateAgencyWithRoleTypeResponse {
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