
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDomainResponse extends SdkResponse {
    public cname?: string;
    public domainId?: string;
    public constructor() { 
        super();
    }
    public withCname(cname: string): CreateDomainResponse {
        this['cname'] = cname;
        return this;
    }
    public withDomainId(domainId: string): CreateDomainResponse {
        this['domainId'] = domainId;
        return this;
    }
}