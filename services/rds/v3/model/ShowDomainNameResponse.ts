
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainNameResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'dns_name'?: string;
    private 'dns_type'?: string;
    private 'ipv4_address'?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowDomainNameResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDnsName(dnsName: string): ShowDomainNameResponse {
        this['dns_name'] = dnsName;
        return this;
    }
    public set dnsName(dnsName: string  | undefined) {
        this['dns_name'] = dnsName;
    }
    public get dnsName(): string | undefined {
        return this['dns_name'];
    }
    public withDnsType(dnsType: string): ShowDomainNameResponse {
        this['dns_type'] = dnsType;
        return this;
    }
    public set dnsType(dnsType: string  | undefined) {
        this['dns_type'] = dnsType;
    }
    public get dnsType(): string | undefined {
        return this['dns_type'];
    }
    public withIpv4Address(ipv4Address: string): ShowDomainNameResponse {
        this['ipv4_address'] = ipv4Address;
        return this;
    }
    public set ipv4Address(ipv4Address: string  | undefined) {
        this['ipv4_address'] = ipv4Address;
    }
    public get ipv4Address(): string | undefined {
        return this['ipv4_address'];
    }
    public withStatus(status: string): ShowDomainNameResponse {
        this['status'] = status;
        return this;
    }
}