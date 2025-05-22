
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateProjectDomainResponse extends SdkResponse {
    private 'domain_name'?: string;
    private 'domain_id'?: string;
    public constructor() { 
        super();
    }
    public withDomainName(domainName: string): CreateProjectDomainResponse {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withDomainId(domainId: string): CreateProjectDomainResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
}