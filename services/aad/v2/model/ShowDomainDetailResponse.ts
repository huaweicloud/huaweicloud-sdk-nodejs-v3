
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainDetailResponse extends SdkResponse {
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    public cname?: string;
    private 'domain_status'?: string;
    private 'pp_enable'?: number;
    public constructor() { 
        super();
    }
    public withDomainId(domainId: string): ShowDomainDetailResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): ShowDomainDetailResponse {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withCname(cname: string): ShowDomainDetailResponse {
        this['cname'] = cname;
        return this;
    }
    public withDomainStatus(domainStatus: string): ShowDomainDetailResponse {
        this['domain_status'] = domainStatus;
        return this;
    }
    public set domainStatus(domainStatus: string  | undefined) {
        this['domain_status'] = domainStatus;
    }
    public get domainStatus(): string | undefined {
        return this['domain_status'];
    }
    public withPpEnable(ppEnable: number): ShowDomainDetailResponse {
        this['pp_enable'] = ppEnable;
        return this;
    }
    public set ppEnable(ppEnable: number  | undefined) {
        this['pp_enable'] = ppEnable;
    }
    public get ppEnable(): number | undefined {
        return this['pp_enable'];
    }
}