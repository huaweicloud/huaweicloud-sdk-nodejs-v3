
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDomainResponse extends SdkResponse {
    public cname?: string;
    private 'domain_id'?: string;
    public constructor() { 
        super();
    }
    public withCname(cname: string): CreateDomainResponse {
        this['cname'] = cname;
        return this;
    }
    public withDomainId(domainId: string): CreateDomainResponse {
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