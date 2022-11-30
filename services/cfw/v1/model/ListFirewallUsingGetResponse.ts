import { Flavor } from './Flavor';
import { ProtectObjectVO } from './ProtectObjectVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFirewallUsingGetResponse extends SdkResponse {
    private 'fw_instance_id'?: string | undefined;
    private 'resource_id'?: string | undefined;
    public name?: string;
    private 'ha_type'?: number | undefined;
    private 'charge_mode'?: number | undefined;
    private 'service_type'?: number | undefined;
    private 'engine_type'?: string | undefined;
    public flavor?: Flavor;
    private 'protect_objects'?: Array<ProtectObjectVO> | undefined;
    public status?: ListFirewallUsingGetResponseStatusEnum;
    public description?: string;
    private 'is_old_firewall_instance'?: boolean | undefined;
    private 'support_ipv6'?: boolean | undefined;
    private 'feature_toggle'?: { [key: string]: boolean; } | undefined;
    public constructor() { 
        super();
    }
    public withFwInstanceId(fwInstanceId: string): ListFirewallUsingGetResponse {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId() {
        return this['fw_instance_id'];
    }
    public withResourceId(resourceId: string): ListFirewallUsingGetResponse {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withName(name: string): ListFirewallUsingGetResponse {
        this['name'] = name;
        return this;
    }
    public withHaType(haType: number): ListFirewallUsingGetResponse {
        this['ha_type'] = haType;
        return this;
    }
    public set haType(haType: number | undefined) {
        this['ha_type'] = haType;
    }
    public get haType() {
        return this['ha_type'];
    }
    public withChargeMode(chargeMode: number): ListFirewallUsingGetResponse {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: number | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode() {
        return this['charge_mode'];
    }
    public withServiceType(serviceType: number): ListFirewallUsingGetResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: number | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType() {
        return this['service_type'];
    }
    public withEngineType(engineType: string): ListFirewallUsingGetResponse {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType() {
        return this['engine_type'];
    }
    public withFlavor(flavor: Flavor): ListFirewallUsingGetResponse {
        this['flavor'] = flavor;
        return this;
    }
    public withProtectObjects(protectObjects: Array<ProtectObjectVO>): ListFirewallUsingGetResponse {
        this['protect_objects'] = protectObjects;
        return this;
    }
    public set protectObjects(protectObjects: Array<ProtectObjectVO> | undefined) {
        this['protect_objects'] = protectObjects;
    }
    public get protectObjects() {
        return this['protect_objects'];
    }
    public withStatus(status: ListFirewallUsingGetResponseStatusEnum): ListFirewallUsingGetResponse {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): ListFirewallUsingGetResponse {
        this['description'] = description;
        return this;
    }
    public withIsOldFirewallInstance(isOldFirewallInstance: boolean): ListFirewallUsingGetResponse {
        this['is_old_firewall_instance'] = isOldFirewallInstance;
        return this;
    }
    public set isOldFirewallInstance(isOldFirewallInstance: boolean | undefined) {
        this['is_old_firewall_instance'] = isOldFirewallInstance;
    }
    public get isOldFirewallInstance() {
        return this['is_old_firewall_instance'];
    }
    public withSupportIpv6(supportIpv6: boolean): ListFirewallUsingGetResponse {
        this['support_ipv6'] = supportIpv6;
        return this;
    }
    public set supportIpv6(supportIpv6: boolean | undefined) {
        this['support_ipv6'] = supportIpv6;
    }
    public get supportIpv6() {
        return this['support_ipv6'];
    }
    public withFeatureToggle(featureToggle: { [key: string]: boolean; }): ListFirewallUsingGetResponse {
        this['feature_toggle'] = featureToggle;
        return this;
    }
    public set featureToggle(featureToggle: { [key: string]: boolean; } | undefined) {
        this['feature_toggle'] = featureToggle;
    }
    public get featureToggle() {
        return this['feature_toggle'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFirewallUsingGetResponseStatusEnum {
    NUMBER_MINUS_1 = -1,
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5,
    NUMBER_6 = 6,
    NUMBER_7 = 7,
    NUMBER_8 = 8,
    NUMBER_9 = 9,
    NUMBER_10 = 10,
    NUMBER_11 = 11
}
