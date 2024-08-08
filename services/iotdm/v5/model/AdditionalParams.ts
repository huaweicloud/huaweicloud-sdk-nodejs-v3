import { Port } from './Port';


export class AdditionalParams {
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'smn_topic_urn'?: string;
    private 'ciphering_algorithm'?: string;
    private 'port_info'?: Port;
    public constructor(vpcId?: string, subnetId?: string, securityGroupId?: string, portInfo?: Port) { 
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group_id'] = securityGroupId;
        this['port_info'] = portInfo;
    }
    public withVpcId(vpcId: string): AdditionalParams {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): AdditionalParams {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): AdditionalParams {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withSmnTopicUrn(smnTopicUrn: string): AdditionalParams {
        this['smn_topic_urn'] = smnTopicUrn;
        return this;
    }
    public set smnTopicUrn(smnTopicUrn: string  | undefined) {
        this['smn_topic_urn'] = smnTopicUrn;
    }
    public get smnTopicUrn(): string | undefined {
        return this['smn_topic_urn'];
    }
    public withCipheringAlgorithm(cipheringAlgorithm: string): AdditionalParams {
        this['ciphering_algorithm'] = cipheringAlgorithm;
        return this;
    }
    public set cipheringAlgorithm(cipheringAlgorithm: string  | undefined) {
        this['ciphering_algorithm'] = cipheringAlgorithm;
    }
    public get cipheringAlgorithm(): string | undefined {
        return this['ciphering_algorithm'];
    }
    public withPortInfo(portInfo: Port): AdditionalParams {
        this['port_info'] = portInfo;
        return this;
    }
    public set portInfo(portInfo: Port  | undefined) {
        this['port_info'] = portInfo;
    }
    public get portInfo(): Port | undefined {
        return this['port_info'];
    }
}