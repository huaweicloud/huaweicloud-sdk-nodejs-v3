import { InstanceAbstractReq } from './InstanceAbstractReq';
import { TmsKeyValue } from './TmsKeyValue';


export class InstanceCreateReq {
    public description?: string;
    private 'maintain_begin'?: string;
    private 'maintain_end'?: string;
    private 'instance_name'?: string;
    private 'instance_id'?: string;
    private 'spec_id'?: InstanceCreateReqSpecIdEnum | string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'eip_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'available_zone_ids'?: Array<string>;
    private 'bandwidth_size'?: number;
    private 'bandwidth_charging_mode'?: InstanceCreateReqBandwidthChargingModeEnum | string;
    private 'ipv6_enable'?: boolean;
    private 'loadbalancer_provider'?: InstanceCreateReqLoadbalancerProviderEnum | string;
    public tags?: Array<TmsKeyValue>;
    private 'vpcep_service_name'?: string;
    private 'ingress_bandwidth_size'?: number;
    private 'ingress_bandwidth_charging_mode'?: InstanceCreateReqIngressBandwidthChargingModeEnum | string;
    public constructor() { 
    }
    public withDescription(description: string): InstanceCreateReq {
        this['description'] = description;
        return this;
    }
    public withMaintainBegin(maintainBegin: string): InstanceCreateReq {
        this['maintain_begin'] = maintainBegin;
        return this;
    }
    public set maintainBegin(maintainBegin: string  | undefined) {
        this['maintain_begin'] = maintainBegin;
    }
    public get maintainBegin(): string | undefined {
        return this['maintain_begin'];
    }
    public withMaintainEnd(maintainEnd: string): InstanceCreateReq {
        this['maintain_end'] = maintainEnd;
        return this;
    }
    public set maintainEnd(maintainEnd: string  | undefined) {
        this['maintain_end'] = maintainEnd;
    }
    public get maintainEnd(): string | undefined {
        return this['maintain_end'];
    }
    public withInstanceName(instanceName: string): InstanceCreateReq {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceId(instanceId: string): InstanceCreateReq {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSpecId(specId: InstanceCreateReqSpecIdEnum | string): InstanceCreateReq {
        this['spec_id'] = specId;
        return this;
    }
    public set specId(specId: InstanceCreateReqSpecIdEnum | string  | undefined) {
        this['spec_id'] = specId;
    }
    public get specId(): InstanceCreateReqSpecIdEnum | string | undefined {
        return this['spec_id'];
    }
    public withVpcId(vpcId: string): InstanceCreateReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): InstanceCreateReq {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): InstanceCreateReq {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withEipId(eipId: string): InstanceCreateReq {
        this['eip_id'] = eipId;
        return this;
    }
    public set eipId(eipId: string  | undefined) {
        this['eip_id'] = eipId;
    }
    public get eipId(): string | undefined {
        return this['eip_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): InstanceCreateReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAvailableZoneIds(availableZoneIds: Array<string>): InstanceCreateReq {
        this['available_zone_ids'] = availableZoneIds;
        return this;
    }
    public set availableZoneIds(availableZoneIds: Array<string>  | undefined) {
        this['available_zone_ids'] = availableZoneIds;
    }
    public get availableZoneIds(): Array<string> | undefined {
        return this['available_zone_ids'];
    }
    public withBandwidthSize(bandwidthSize: number): InstanceCreateReq {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
    public withBandwidthChargingMode(bandwidthChargingMode: InstanceCreateReqBandwidthChargingModeEnum | string): InstanceCreateReq {
        this['bandwidth_charging_mode'] = bandwidthChargingMode;
        return this;
    }
    public set bandwidthChargingMode(bandwidthChargingMode: InstanceCreateReqBandwidthChargingModeEnum | string  | undefined) {
        this['bandwidth_charging_mode'] = bandwidthChargingMode;
    }
    public get bandwidthChargingMode(): InstanceCreateReqBandwidthChargingModeEnum | string | undefined {
        return this['bandwidth_charging_mode'];
    }
    public withIpv6Enable(ipv6Enable: boolean): InstanceCreateReq {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
    public withLoadbalancerProvider(loadbalancerProvider: InstanceCreateReqLoadbalancerProviderEnum | string): InstanceCreateReq {
        this['loadbalancer_provider'] = loadbalancerProvider;
        return this;
    }
    public set loadbalancerProvider(loadbalancerProvider: InstanceCreateReqLoadbalancerProviderEnum | string  | undefined) {
        this['loadbalancer_provider'] = loadbalancerProvider;
    }
    public get loadbalancerProvider(): InstanceCreateReqLoadbalancerProviderEnum | string | undefined {
        return this['loadbalancer_provider'];
    }
    public withTags(tags: Array<TmsKeyValue>): InstanceCreateReq {
        this['tags'] = tags;
        return this;
    }
    public withVpcepServiceName(vpcepServiceName: string): InstanceCreateReq {
        this['vpcep_service_name'] = vpcepServiceName;
        return this;
    }
    public set vpcepServiceName(vpcepServiceName: string  | undefined) {
        this['vpcep_service_name'] = vpcepServiceName;
    }
    public get vpcepServiceName(): string | undefined {
        return this['vpcep_service_name'];
    }
    public withIngressBandwidthSize(ingressBandwidthSize: number): InstanceCreateReq {
        this['ingress_bandwidth_size'] = ingressBandwidthSize;
        return this;
    }
    public set ingressBandwidthSize(ingressBandwidthSize: number  | undefined) {
        this['ingress_bandwidth_size'] = ingressBandwidthSize;
    }
    public get ingressBandwidthSize(): number | undefined {
        return this['ingress_bandwidth_size'];
    }
    public withIngressBandwidthChargingMode(ingressBandwidthChargingMode: InstanceCreateReqIngressBandwidthChargingModeEnum | string): InstanceCreateReq {
        this['ingress_bandwidth_charging_mode'] = ingressBandwidthChargingMode;
        return this;
    }
    public set ingressBandwidthChargingMode(ingressBandwidthChargingMode: InstanceCreateReqIngressBandwidthChargingModeEnum | string  | undefined) {
        this['ingress_bandwidth_charging_mode'] = ingressBandwidthChargingMode;
    }
    public get ingressBandwidthChargingMode(): InstanceCreateReqIngressBandwidthChargingModeEnum | string | undefined {
        return this['ingress_bandwidth_charging_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InstanceCreateReqSpecIdEnum {
    BASIC = 'BASIC',
    PROFESSIONAL = 'PROFESSIONAL',
    ENTERPRISE = 'ENTERPRISE',
    PLATINUM = 'PLATINUM',
    BASIC_IPV6 = 'BASIC_IPV6',
    PROFESSIONAL_IPV6 = 'PROFESSIONAL_IPV6',
    ENTERPRISE_IPV6 = 'ENTERPRISE_IPV6',
    PLATINUM_IPV6 = 'PLATINUM_IPV6'
}
/**
    * @export
    * @enum {string}
    */
export enum InstanceCreateReqBandwidthChargingModeEnum {
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic'
}
/**
    * @export
    * @enum {string}
    */
export enum InstanceCreateReqLoadbalancerProviderEnum {
    LVS = 'lvs',
    ELB = 'elb'
}
/**
    * @export
    * @enum {string}
    */
export enum InstanceCreateReqIngressBandwidthChargingModeEnum {
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic'
}
