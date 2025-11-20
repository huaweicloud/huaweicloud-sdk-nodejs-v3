import { AvailabilityZones } from './AvailabilityZones';
import { PostPaidChargeInfos } from './PostPaidChargeInfos';
import { TunnelInfoOption } from './TunnelInfoOption';


export class CreatePostpaidInstanceOption {
    private 'availability_zones'?: AvailabilityZones;
    private 'charge_infos'?: PostPaidChargeInfos;
    private 'flavor_ref'?: string;
    private 'ha_mode'?: string;
    public name?: string;
    private 'tunnel_info'?: TunnelInfoOption;
    public description?: string;
    public constructor(availabilityZones?: AvailabilityZones, chargeInfos?: PostPaidChargeInfos, flavorRef?: string, haMode?: string, name?: string, tunnelInfo?: TunnelInfoOption) { 
        this['availability_zones'] = availabilityZones;
        this['charge_infos'] = chargeInfos;
        this['flavor_ref'] = flavorRef;
        this['ha_mode'] = haMode;
        this['name'] = name;
        this['tunnel_info'] = tunnelInfo;
    }
    public withAvailabilityZones(availabilityZones: AvailabilityZones): CreatePostpaidInstanceOption {
        this['availability_zones'] = availabilityZones;
        return this;
    }
    public set availabilityZones(availabilityZones: AvailabilityZones  | undefined) {
        this['availability_zones'] = availabilityZones;
    }
    public get availabilityZones(): AvailabilityZones | undefined {
        return this['availability_zones'];
    }
    public withChargeInfos(chargeInfos: PostPaidChargeInfos): CreatePostpaidInstanceOption {
        this['charge_infos'] = chargeInfos;
        return this;
    }
    public set chargeInfos(chargeInfos: PostPaidChargeInfos  | undefined) {
        this['charge_infos'] = chargeInfos;
    }
    public get chargeInfos(): PostPaidChargeInfos | undefined {
        return this['charge_infos'];
    }
    public withFlavorRef(flavorRef: string): CreatePostpaidInstanceOption {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withHaMode(haMode: string): CreatePostpaidInstanceOption {
        this['ha_mode'] = haMode;
        return this;
    }
    public set haMode(haMode: string  | undefined) {
        this['ha_mode'] = haMode;
    }
    public get haMode(): string | undefined {
        return this['ha_mode'];
    }
    public withName(name: string): CreatePostpaidInstanceOption {
        this['name'] = name;
        return this;
    }
    public withTunnelInfo(tunnelInfo: TunnelInfoOption): CreatePostpaidInstanceOption {
        this['tunnel_info'] = tunnelInfo;
        return this;
    }
    public set tunnelInfo(tunnelInfo: TunnelInfoOption  | undefined) {
        this['tunnel_info'] = tunnelInfo;
    }
    public get tunnelInfo(): TunnelInfoOption | undefined {
        return this['tunnel_info'];
    }
    public withDescription(description: string): CreatePostpaidInstanceOption {
        this['description'] = description;
        return this;
    }
}