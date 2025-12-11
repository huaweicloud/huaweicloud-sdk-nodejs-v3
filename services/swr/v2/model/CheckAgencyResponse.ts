
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckAgencyResponse extends SdkResponse {
    private 'domain_id'?: string;
    private 'is_agency'?: boolean;
    public constructor() { 
        super();
    }
    public withDomainId(domainId: string): CheckAgencyResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withIsAgency(isAgency: boolean): CheckAgencyResponse {
        this['is_agency'] = isAgency;
        return this;
    }
    public set isAgency(isAgency: boolean  | undefined) {
        this['is_agency'] = isAgency;
    }
    public get isAgency(): boolean | undefined {
        return this['is_agency'];
    }
}