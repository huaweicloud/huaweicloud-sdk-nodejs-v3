import { AvailabilityZones } from './AvailabilityZones';
import { PostPaidChargeInfos } from './PostPaidChargeInfos';
import { TunnelInfoResult } from './TunnelInfoResult';


export class Instance {
    public id?: string;
    public name?: string;
    private 'project_id'?: string;
    public region?: string;
    private 'flavor_ref'?: string;
    private 'ha_mode'?: string;
    public status?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public description?: string;
    private 'tunnel_info'?: TunnelInfoResult;
    private 'charge_infos'?: PostPaidChargeInfos;
    private 'availability_zones'?: AvailabilityZones;
    public constructor(id?: string, name?: string, projectId?: string, region?: string, flavorRef?: string, haMode?: string, status?: string, createdAt?: Date, updatedAt?: Date, description?: string, tunnelInfo?: TunnelInfoResult, chargeInfos?: PostPaidChargeInfos, availabilityZones?: AvailabilityZones) { 
        this['id'] = id;
        this['name'] = name;
        this['project_id'] = projectId;
        this['region'] = region;
        this['flavor_ref'] = flavorRef;
        this['ha_mode'] = haMode;
        this['status'] = status;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['description'] = description;
        this['tunnel_info'] = tunnelInfo;
        this['charge_infos'] = chargeInfos;
        this['availability_zones'] = availabilityZones;
    }
    public withId(id: string): Instance {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Instance {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): Instance {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegion(region: string): Instance {
        this['region'] = region;
        return this;
    }
    public withFlavorRef(flavorRef: string): Instance {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withHaMode(haMode: string): Instance {
        this['ha_mode'] = haMode;
        return this;
    }
    public set haMode(haMode: string  | undefined) {
        this['ha_mode'] = haMode;
    }
    public get haMode(): string | undefined {
        return this['ha_mode'];
    }
    public withStatus(status: string): Instance {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: Date): Instance {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): Instance {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withDescription(description: string): Instance {
        this['description'] = description;
        return this;
    }
    public withTunnelInfo(tunnelInfo: TunnelInfoResult): Instance {
        this['tunnel_info'] = tunnelInfo;
        return this;
    }
    public set tunnelInfo(tunnelInfo: TunnelInfoResult  | undefined) {
        this['tunnel_info'] = tunnelInfo;
    }
    public get tunnelInfo(): TunnelInfoResult | undefined {
        return this['tunnel_info'];
    }
    public withChargeInfos(chargeInfos: PostPaidChargeInfos): Instance {
        this['charge_infos'] = chargeInfos;
        return this;
    }
    public set chargeInfos(chargeInfos: PostPaidChargeInfos  | undefined) {
        this['charge_infos'] = chargeInfos;
    }
    public get chargeInfos(): PostPaidChargeInfos | undefined {
        return this['charge_infos'];
    }
    public withAvailabilityZones(availabilityZones: AvailabilityZones): Instance {
        this['availability_zones'] = availabilityZones;
        return this;
    }
    public set availabilityZones(availabilityZones: AvailabilityZones  | undefined) {
        this['availability_zones'] = availabilityZones;
    }
    public get availabilityZones(): AvailabilityZones | undefined {
        return this['availability_zones'];
    }
}