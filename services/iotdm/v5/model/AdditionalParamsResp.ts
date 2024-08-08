import { ForwardingInfo } from './ForwardingInfo';


export class AdditionalParamsResp {
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'ciphering_algorithm'?: string;
    private 'forwarding_info'?: ForwardingInfo;
    public constructor() { 
    }
    public withVpcId(vpcId: string): AdditionalParamsResp {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): AdditionalParamsResp {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): AdditionalParamsResp {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withCipheringAlgorithm(cipheringAlgorithm: string): AdditionalParamsResp {
        this['ciphering_algorithm'] = cipheringAlgorithm;
        return this;
    }
    public set cipheringAlgorithm(cipheringAlgorithm: string  | undefined) {
        this['ciphering_algorithm'] = cipheringAlgorithm;
    }
    public get cipheringAlgorithm(): string | undefined {
        return this['ciphering_algorithm'];
    }
    public withForwardingInfo(forwardingInfo: ForwardingInfo): AdditionalParamsResp {
        this['forwarding_info'] = forwardingInfo;
        return this;
    }
    public set forwardingInfo(forwardingInfo: ForwardingInfo  | undefined) {
        this['forwarding_info'] = forwardingInfo;
    }
    public get forwardingInfo(): ForwardingInfo | undefined {
        return this['forwarding_info'];
    }
}