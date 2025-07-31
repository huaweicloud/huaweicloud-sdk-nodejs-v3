
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowContainerNetworkInfoResponse extends SdkResponse {
    public mode?: string;
    public vpc?: string;
    public subnet?: string;
    private 'security_group'?: string;
    private 'ipv4_cidr'?: string;
    public cidrs?: string;
    private 'kube_proxy_mode'?: string;
    private 'is_support_egress'?: boolean;
    public constructor() { 
        super();
    }
    public withMode(mode: string): ShowContainerNetworkInfoResponse {
        this['mode'] = mode;
        return this;
    }
    public withVpc(vpc: string): ShowContainerNetworkInfoResponse {
        this['vpc'] = vpc;
        return this;
    }
    public withSubnet(subnet: string): ShowContainerNetworkInfoResponse {
        this['subnet'] = subnet;
        return this;
    }
    public withSecurityGroup(securityGroup: string): ShowContainerNetworkInfoResponse {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: string  | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup(): string | undefined {
        return this['security_group'];
    }
    public withIpv4Cidr(ipv4Cidr: string): ShowContainerNetworkInfoResponse {
        this['ipv4_cidr'] = ipv4Cidr;
        return this;
    }
    public set ipv4Cidr(ipv4Cidr: string  | undefined) {
        this['ipv4_cidr'] = ipv4Cidr;
    }
    public get ipv4Cidr(): string | undefined {
        return this['ipv4_cidr'];
    }
    public withCidrs(cidrs: string): ShowContainerNetworkInfoResponse {
        this['cidrs'] = cidrs;
        return this;
    }
    public withKubeProxyMode(kubeProxyMode: string): ShowContainerNetworkInfoResponse {
        this['kube_proxy_mode'] = kubeProxyMode;
        return this;
    }
    public set kubeProxyMode(kubeProxyMode: string  | undefined) {
        this['kube_proxy_mode'] = kubeProxyMode;
    }
    public get kubeProxyMode(): string | undefined {
        return this['kube_proxy_mode'];
    }
    public withIsSupportEgress(isSupportEgress: boolean): ShowContainerNetworkInfoResponse {
        this['is_support_egress'] = isSupportEgress;
        return this;
    }
    public set isSupportEgress(isSupportEgress: boolean  | undefined) {
        this['is_support_egress'] = isSupportEgress;
    }
    public get isSupportEgress(): boolean | undefined {
        return this['is_support_egress'];
    }
}