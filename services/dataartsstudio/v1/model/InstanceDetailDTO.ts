import { FlavorDTO } from './FlavorDTO';
import { InstanceNodeDTO } from './InstanceNodeDTO';


export class InstanceDetailDTO {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'external_address'?: string;
    private 'intranet_address'?: string;
    private 'intranet_address_ipv6'?: string;
    private 'public_zone_id'?: string;
    private 'public_zone_name'?: string;
    private 'private_zone_id'?: string;
    private 'private_zone_name'?: string;
    private 'enterprise_project_id'?: string;
    private 'create_time'?: number;
    private 'create_user'?: string;
    private 'current_namespace_publish_api_num'?: number;
    private 'all_namespace_publish_api_num'?: number;
    private 'api_publishable_num'?: number;
    public deletable?: boolean;
    private 'charge_status'?: string;
    private 'order_id'?: string;
    private 'order_type'?: string;
    private 'period_type'?: string;
    private 'instance_status'?: string;
    private 'node_num'?: number;
    public flavor?: FlavorDTO;
    private 'gateway_version'?: string;
    private 'availability_zone'?: string;
    private 'availability_zone_name'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    public nodes?: Array<InstanceNodeDTO>;
    public constructor() { 
    }
    public withId(id: string): InstanceDetailDTO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): InstanceDetailDTO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): InstanceDetailDTO {
        this['description'] = description;
        return this;
    }
    public withExternalAddress(externalAddress: string): InstanceDetailDTO {
        this['external_address'] = externalAddress;
        return this;
    }
    public set externalAddress(externalAddress: string  | undefined) {
        this['external_address'] = externalAddress;
    }
    public get externalAddress(): string | undefined {
        return this['external_address'];
    }
    public withIntranetAddress(intranetAddress: string): InstanceDetailDTO {
        this['intranet_address'] = intranetAddress;
        return this;
    }
    public set intranetAddress(intranetAddress: string  | undefined) {
        this['intranet_address'] = intranetAddress;
    }
    public get intranetAddress(): string | undefined {
        return this['intranet_address'];
    }
    public withIntranetAddressIpv6(intranetAddressIpv6: string): InstanceDetailDTO {
        this['intranet_address_ipv6'] = intranetAddressIpv6;
        return this;
    }
    public set intranetAddressIpv6(intranetAddressIpv6: string  | undefined) {
        this['intranet_address_ipv6'] = intranetAddressIpv6;
    }
    public get intranetAddressIpv6(): string | undefined {
        return this['intranet_address_ipv6'];
    }
    public withPublicZoneId(publicZoneId: string): InstanceDetailDTO {
        this['public_zone_id'] = publicZoneId;
        return this;
    }
    public set publicZoneId(publicZoneId: string  | undefined) {
        this['public_zone_id'] = publicZoneId;
    }
    public get publicZoneId(): string | undefined {
        return this['public_zone_id'];
    }
    public withPublicZoneName(publicZoneName: string): InstanceDetailDTO {
        this['public_zone_name'] = publicZoneName;
        return this;
    }
    public set publicZoneName(publicZoneName: string  | undefined) {
        this['public_zone_name'] = publicZoneName;
    }
    public get publicZoneName(): string | undefined {
        return this['public_zone_name'];
    }
    public withPrivateZoneId(privateZoneId: string): InstanceDetailDTO {
        this['private_zone_id'] = privateZoneId;
        return this;
    }
    public set privateZoneId(privateZoneId: string  | undefined) {
        this['private_zone_id'] = privateZoneId;
    }
    public get privateZoneId(): string | undefined {
        return this['private_zone_id'];
    }
    public withPrivateZoneName(privateZoneName: string): InstanceDetailDTO {
        this['private_zone_name'] = privateZoneName;
        return this;
    }
    public set privateZoneName(privateZoneName: string  | undefined) {
        this['private_zone_name'] = privateZoneName;
    }
    public get privateZoneName(): string | undefined {
        return this['private_zone_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): InstanceDetailDTO {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCreateTime(createTime: number): InstanceDetailDTO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): InstanceDetailDTO {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withCurrentNamespacePublishApiNum(currentNamespacePublishApiNum: number): InstanceDetailDTO {
        this['current_namespace_publish_api_num'] = currentNamespacePublishApiNum;
        return this;
    }
    public set currentNamespacePublishApiNum(currentNamespacePublishApiNum: number  | undefined) {
        this['current_namespace_publish_api_num'] = currentNamespacePublishApiNum;
    }
    public get currentNamespacePublishApiNum(): number | undefined {
        return this['current_namespace_publish_api_num'];
    }
    public withAllNamespacePublishApiNum(allNamespacePublishApiNum: number): InstanceDetailDTO {
        this['all_namespace_publish_api_num'] = allNamespacePublishApiNum;
        return this;
    }
    public set allNamespacePublishApiNum(allNamespacePublishApiNum: number  | undefined) {
        this['all_namespace_publish_api_num'] = allNamespacePublishApiNum;
    }
    public get allNamespacePublishApiNum(): number | undefined {
        return this['all_namespace_publish_api_num'];
    }
    public withApiPublishableNum(apiPublishableNum: number): InstanceDetailDTO {
        this['api_publishable_num'] = apiPublishableNum;
        return this;
    }
    public set apiPublishableNum(apiPublishableNum: number  | undefined) {
        this['api_publishable_num'] = apiPublishableNum;
    }
    public get apiPublishableNum(): number | undefined {
        return this['api_publishable_num'];
    }
    public withDeletable(deletable: boolean): InstanceDetailDTO {
        this['deletable'] = deletable;
        return this;
    }
    public withChargeStatus(chargeStatus: string): InstanceDetailDTO {
        this['charge_status'] = chargeStatus;
        return this;
    }
    public set chargeStatus(chargeStatus: string  | undefined) {
        this['charge_status'] = chargeStatus;
    }
    public get chargeStatus(): string | undefined {
        return this['charge_status'];
    }
    public withOrderId(orderId: string): InstanceDetailDTO {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withOrderType(orderType: string): InstanceDetailDTO {
        this['order_type'] = orderType;
        return this;
    }
    public set orderType(orderType: string  | undefined) {
        this['order_type'] = orderType;
    }
    public get orderType(): string | undefined {
        return this['order_type'];
    }
    public withPeriodType(periodType: string): InstanceDetailDTO {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): string | undefined {
        return this['period_type'];
    }
    public withInstanceStatus(instanceStatus: string): InstanceDetailDTO {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withNodeNum(nodeNum: number): InstanceDetailDTO {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withFlavor(flavor: FlavorDTO): InstanceDetailDTO {
        this['flavor'] = flavor;
        return this;
    }
    public withGatewayVersion(gatewayVersion: string): InstanceDetailDTO {
        this['gateway_version'] = gatewayVersion;
        return this;
    }
    public set gatewayVersion(gatewayVersion: string  | undefined) {
        this['gateway_version'] = gatewayVersion;
    }
    public get gatewayVersion(): string | undefined {
        return this['gateway_version'];
    }
    public withAvailabilityZone(availabilityZone: string): InstanceDetailDTO {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withAvailabilityZoneName(availabilityZoneName: string): InstanceDetailDTO {
        this['availability_zone_name'] = availabilityZoneName;
        return this;
    }
    public set availabilityZoneName(availabilityZoneName: string  | undefined) {
        this['availability_zone_name'] = availabilityZoneName;
    }
    public get availabilityZoneName(): string | undefined {
        return this['availability_zone_name'];
    }
    public withVpcId(vpcId: string): InstanceDetailDTO {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): InstanceDetailDTO {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): InstanceDetailDTO {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withNodes(nodes: Array<InstanceNodeDTO>): InstanceDetailDTO {
        this['nodes'] = nodes;
        return this;
    }
}