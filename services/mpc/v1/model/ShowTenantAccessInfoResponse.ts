
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTenantAccessInfoResponse extends SdkResponse {
    private 'is_open'?: boolean;
    private 'agreement_version'?: number;
    public constructor() { 
        super();
    }
    public withIsOpen(isOpen: boolean): ShowTenantAccessInfoResponse {
        this['is_open'] = isOpen;
        return this;
    }
    public set isOpen(isOpen: boolean  | undefined) {
        this['is_open'] = isOpen;
    }
    public get isOpen(): boolean | undefined {
        return this['is_open'];
    }
    public withAgreementVersion(agreementVersion: number): ShowTenantAccessInfoResponse {
        this['agreement_version'] = agreementVersion;
        return this;
    }
    public set agreementVersion(agreementVersion: number  | undefined) {
        this['agreement_version'] = agreementVersion;
    }
    public get agreementVersion(): number | undefined {
        return this['agreement_version'];
    }
}