import { UpgradePrepaidOption } from './UpgradePrepaidOption';


export class UpgradeV3RequestBody {
    public action?: UpgradeV3RequestBodyActionEnum | string;
    private 'l4_flavor_id'?: string;
    private 'l7_flavor_id'?: string;
    private 'availability_zone_list'?: Array<string>;
    private 'ipv6_vip_virsubnet_id'?: string;
    private 'ipv6_vip_address'?: string;
    private 'elb_virsubnet_ids'?: Array<string>;
    private 'prepaid_options'?: UpgradePrepaidOption;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: UpgradeV3RequestBodyActionEnum | string): UpgradeV3RequestBody {
        this['action'] = action;
        return this;
    }
    public withL4FlavorId(l4FlavorId: string): UpgradeV3RequestBody {
        this['l4_flavor_id'] = l4FlavorId;
        return this;
    }
    public set l4FlavorId(l4FlavorId: string  | undefined) {
        this['l4_flavor_id'] = l4FlavorId;
    }
    public get l4FlavorId(): string | undefined {
        return this['l4_flavor_id'];
    }
    public withL7FlavorId(l7FlavorId: string): UpgradeV3RequestBody {
        this['l7_flavor_id'] = l7FlavorId;
        return this;
    }
    public set l7FlavorId(l7FlavorId: string  | undefined) {
        this['l7_flavor_id'] = l7FlavorId;
    }
    public get l7FlavorId(): string | undefined {
        return this['l7_flavor_id'];
    }
    public withAvailabilityZoneList(availabilityZoneList: Array<string>): UpgradeV3RequestBody {
        this['availability_zone_list'] = availabilityZoneList;
        return this;
    }
    public set availabilityZoneList(availabilityZoneList: Array<string>  | undefined) {
        this['availability_zone_list'] = availabilityZoneList;
    }
    public get availabilityZoneList(): Array<string> | undefined {
        return this['availability_zone_list'];
    }
    public withIpv6VipVirsubnetId(ipv6VipVirsubnetId: string): UpgradeV3RequestBody {
        this['ipv6_vip_virsubnet_id'] = ipv6VipVirsubnetId;
        return this;
    }
    public set ipv6VipVirsubnetId(ipv6VipVirsubnetId: string  | undefined) {
        this['ipv6_vip_virsubnet_id'] = ipv6VipVirsubnetId;
    }
    public get ipv6VipVirsubnetId(): string | undefined {
        return this['ipv6_vip_virsubnet_id'];
    }
    public withIpv6VipAddress(ipv6VipAddress: string): UpgradeV3RequestBody {
        this['ipv6_vip_address'] = ipv6VipAddress;
        return this;
    }
    public set ipv6VipAddress(ipv6VipAddress: string  | undefined) {
        this['ipv6_vip_address'] = ipv6VipAddress;
    }
    public get ipv6VipAddress(): string | undefined {
        return this['ipv6_vip_address'];
    }
    public withElbVirsubnetIds(elbVirsubnetIds: Array<string>): UpgradeV3RequestBody {
        this['elb_virsubnet_ids'] = elbVirsubnetIds;
        return this;
    }
    public set elbVirsubnetIds(elbVirsubnetIds: Array<string>  | undefined) {
        this['elb_virsubnet_ids'] = elbVirsubnetIds;
    }
    public get elbVirsubnetIds(): Array<string> | undefined {
        return this['elb_virsubnet_ids'];
    }
    public withPrepaidOptions(prepaidOptions: UpgradePrepaidOption): UpgradeV3RequestBody {
        this['prepaid_options'] = prepaidOptions;
        return this;
    }
    public set prepaidOptions(prepaidOptions: UpgradePrepaidOption  | undefined) {
        this['prepaid_options'] = prepaidOptions;
    }
    public get prepaidOptions(): UpgradePrepaidOption | undefined {
        return this['prepaid_options'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpgradeV3RequestBodyActionEnum {
    START = 'start',
    COMPLETE = 'complete',
    ROLLBACK = 'rollback'
}
