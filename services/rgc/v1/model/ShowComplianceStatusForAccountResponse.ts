
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowComplianceStatusForAccountResponse extends SdkResponse {
    private 'compliance_status'?: string;
    public constructor() { 
        super();
    }
    public withComplianceStatus(complianceStatus: string): ShowComplianceStatusForAccountResponse {
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