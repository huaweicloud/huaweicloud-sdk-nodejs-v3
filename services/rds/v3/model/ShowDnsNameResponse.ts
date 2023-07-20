
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDnsNameResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'dns_name'?: string;
    private 'dns_type'?: string;
    private 'ipv6_address'?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowDnsNameResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDnsName(dnsName: string): ShowDnsNameResponse {
        this['dns_name'] = dnsName;
        return this;
    }
    public set dnsName(dnsName: string  | undefined) {
        this['dns_name'] = dnsName;
    }
    public get dnsName(): string | undefined {
        return this['dns_name'];
    }
    public withDnsType(dnsType: string): ShowDnsNameResponse {
        this['dns_type'] = dnsType;
        return this;
    }
    public set dnsType(dnsType: string  | undefined) {
        this['dns_type'] = dnsType;
    }
    public get dnsType(): string | undefined {
        return this['dns_type'];
    }
    public withIpv6Address(ipv6Address: string): ShowDnsNameResponse {
        this['ipv6_address'] = ipv6Address;
        return this;
    }
    public set ipv6Address(ipv6Address: string  | undefined) {
        this['ipv6_address'] = ipv6Address;
    }
    public get ipv6Address(): string | undefined {
        return this['ipv6_address'];
    }
    public withStatus(status: string): ShowDnsNameResponse {
        this['status'] = status;
        return this;
    }
}