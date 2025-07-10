
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowComplianceStatusForOrganizationalUnitResponse extends SdkResponse {
    private 'compliance_status'?: string;
    public constructor() { 
        super();
    }
    public withComplianceStatus(complianceStatus: string): ShowComplianceStatusForOrganizationalUnitResponse {
        this['compliance_status'] = complianceStatus;
        return this;
    }
    public set complianceStatus(complianceStatus: string  | undefined) {
        this['compliance_status'] = complianceStatus;
    }
    public get complianceStatus(): string | undefined {
        return this['compliance_status'];
    }
}