
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAadDomainResponse extends SdkResponse {
    public cname?: string;
    public domainId?: string;
    public constructor() { 
        super();
    }
    public withCname(cname: string): CreateAadDomainResponse {
        this['cname'] = cname;
        return this;
    }
    public withDomainId(domainId: string): CreateAadDomainResponse {
        this['domainId'] = domainId;
        return this;
    }
}