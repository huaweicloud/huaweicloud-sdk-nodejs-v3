import { Tag } from './Tag';


export class DirectConnect {
    public id?: string;
    private 'tenant_id'?: string;
    public name?: string;
    public description?: string;
    private 'port_type'?: DirectConnectPortTypeEnum | string;
    public bandwidth?: number;
    public location?: string;
    private 'peer_location'?: string;
    private 'device_id'?: string;
    public type?: DirectConnectTypeEnum | string;
    private 'hosting_id'?: string;
    private 'charge_mode'?: DirectConnectChargeModeEnum | string;
    public provider?: string;
    private 'admin_state_up'?: boolean;
    public vlan?: number;
    public status?: DirectConnectStatusEnum | string;
    private 'apply_time'?: Date;
    private 'create_time'?: Date;
    private 'provider_status'?: DirectConnectProviderStatusEnum | string;
    private 'peer_port_type'?: string;
    private 'peer_provider'?: string;
    private 'order_id'?: string;
    private 'product_id'?: string;
    private 'spec_code'?: string;
    private 'period_type'?: number;
    private 'period_num'?: number;
    private 'vgw_type'?: DirectConnectVgwTypeEnum | string;
    private 'lag_id'?: string;
    private 'signed_agreement_status'?: DirectConnectSignedAgreementStatusEnum | string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<Tag>;
    public constructor() { 
    }
    public withId(id: string): DirectConnect {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): DirectConnect {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): DirectConnect {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): DirectConnect {
        this['description'] = description;
        return this;
    }
    public withPortType(portType: DirectConnectPortTypeEnum | string): DirectConnect {
        this['port_type'] = portType;
        return this;
    }
    public set portType(portType: DirectConnectPortTypeEnum | string  | undefined) {
        this['port_type'] = portType;
    }
    public get portType(): DirectConnectPortTypeEnum | string | undefined {
        return this['port_type'];
    }
    public withBandwidth(bandwidth: number): DirectConnect {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withLocation(location: string): DirectConnect {
        this['location'] = location;
        return this;
    }
    public withPeerLocation(peerLocation: string): DirectConnect {
        this['peer_location'] = peerLocation;
        return this;
    }
    public set peerLocation(peerLocation: string  | undefined) {
        this['peer_location'] = peerLocation;
    }
    public get peerLocation(): string | undefined {
        return this['peer_location'];
    }
    public withDeviceId(deviceId: string): DirectConnect {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withType(type: DirectConnectTypeEnum | string): DirectConnect {
        this['type'] = type;
        return this;
    }
    public withHostingId(hostingId: string): DirectConnect {
        this['hosting_id'] = hostingId;
        return this;
    }
    public set hostingId(hostingId: string  | undefined) {
        this['hosting_id'] = hostingId;
    }
    public get hostingId(): string | undefined {
        return this['hosting_id'];
    }
    public withChargeMode(chargeMode: DirectConnectChargeModeEnum | string): DirectConnect {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: DirectConnectChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): DirectConnectChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withProvider(provider: string): DirectConnect {
        this['provider'] = provider;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): DirectConnect {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withVlan(vlan: number): DirectConnect {
        this['vlan'] = vlan;
        return this;
    }
    public withStatus(status: DirectConnectStatusEnum | string): DirectConnect {
        this['status'] = status;
        return this;
    }
    public withApplyTime(applyTime: Date): DirectConnect {
        this['apply_time'] = applyTime;
        return this;
    }
    public set applyTime(applyTime: Date  | undefined) {
        this['apply_time'] = applyTime;
    }
    public get applyTime(): Date | undefined {
        return this['apply_time'];
    }
    public withCreateTime(createTime: Date): DirectConnect {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withProviderStatus(providerStatus: DirectConnectProviderStatusEnum | string): DirectConnect {
        this['provider_status'] = providerStatus;
        return this;
    }
    public set providerStatus(providerStatus: DirectConnectProviderStatusEnum | string  | undefined) {
        this['provider_status'] = providerStatus;
    }
    public get providerStatus(): DirectConnectProviderStatusEnum | string | undefined {
        return this['provider_status'];
    }
    public withPeerPortType(peerPortType: string): DirectConnect {
        this['peer_port_type'] = peerPortType;
        return this;
    }
    public set peerPortType(peerPortType: string  | undefined) {
        this['peer_port_type'] = peerPortType;
    }
    public get peerPortType(): string | undefined {
        return this['peer_port_type'];
    }
    public withPeerProvider(peerProvider: string): DirectConnect {
        this['peer_provider'] = peerProvider;
        return this;
    }
    public set peerProvider(peerProvider: string  | undefined) {
        this['peer_provider'] = peerProvider;
    }
    public get peerProvider(): string | undefined {
        return this['peer_provider'];
    }
    public withOrderId(orderId: string): DirectConnect {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withProductId(productId: string): DirectConnect {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withSpecCode(specCode: string): DirectConnect {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withPeriodType(periodType: number): DirectConnect {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): number | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): DirectConnect {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withVgwType(vgwType: DirectConnectVgwTypeEnum | string): DirectConnect {
        this['vgw_type'] = vgwType;
        return this;
    }
    public set vgwType(vgwType: DirectConnectVgwTypeEnum | string  | undefined) {
        this['vgw_type'] = vgwType;
    }
    public get vgwType(): DirectConnectVgwTypeEnum | string | undefined {
        return this['vgw_type'];
    }
    public withLagId(lagId: string): DirectConnect {
        this['lag_id'] = lagId;
        return this;
    }
    public set lagId(lagId: string  | undefined) {
        this['lag_id'] = lagId;
    }
    public get lagId(): string | undefined {
        return this['lag_id'];
    }
    public withSignedAgreementStatus(signedAgreementStatus: DirectConnectSignedAgreementStatusEnum | string): DirectConnect {
        this['signed_agreement_status'] = signedAgreementStatus;
        return this;
    }
    public set signedAgreementStatus(signedAgreementStatus: DirectConnectSignedAgreementStatusEnum | string  | undefined) {
        this['signed_agreement_status'] = signedAgreementStatus;
    }
    public get signedAgreementStatus(): DirectConnectSignedAgreementStatusEnum | string | undefined {
        return this['signed_agreement_status'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DirectConnect {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): DirectConnect {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DirectConnectPortTypeEnum {
    E_1G = '1G',
    E_10G = '10G',
    E_40G = '40G',
    E_100G = '100G'
}
/**
    * @export
    * @enum {string}
    */
export enum DirectConnectTypeEnum {
    STANDARD = 'standard',
    HOSTING = 'hosting',
    HOSTED = 'hosted',
    ONESTOP_STANDARD = 'onestop_standard',
    ONESTOP_HOSTED = 'onestop_hosted'
}
/**
    * @export
    * @enum {string}
    */
export enum DirectConnectChargeModeEnum {
    PREPAYMENT = 'prepayment',
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic',
    PORT = 'port'
}
/**
    * @export
    * @enum {string}
    */
export enum DirectConnectStatusEnum {
    BUILD = 'BUILD',
    PAID = 'PAID',
    APPLY = 'APPLY',
    PENDING_SURVEY = 'PENDING_SURVEY',
    ACTIVE = 'ACTIVE',
    DOWN = 'DOWN',
    ERROR = 'ERROR',
    PENDING_DELETE = 'PENDING_DELETE',
    DELETED = 'DELETED',
    DENY = 'DENY',
    PENDING_PAY = 'PENDING_PAY',
    ORDERING = 'ORDERING',
    ACCEPT = 'ACCEPT',
    REJECTED = 'REJECTED'
}
/**
    * @export
    * @enum {string}
    */
export enum DirectConnectProviderStatusEnum {
    ACTIVE = 'ACTIVE',
    DOWN = 'DOWN'
}
/**
    * @export
    * @enum {string}
    */
export enum DirectConnectVgwTypeEnum {
    DEFAULT = 'default'
}
/**
    * @export
    * @enum {string}
    */
export enum DirectConnectSignedAgreementStatusEnum {
    SIGNED = 'signed'
}
