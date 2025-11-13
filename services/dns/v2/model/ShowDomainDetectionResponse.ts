
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainDetectionResponse extends SdkResponse {
    private 'domain_name'?: string;
    public type?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withDomainName(domainName: string): ShowDomainDetectionResponse {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withType(type: string): ShowDomainDetectionResponse {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): ShowDomainDetectionResponse {
        this['status'] = status;
        return this;
    }
}