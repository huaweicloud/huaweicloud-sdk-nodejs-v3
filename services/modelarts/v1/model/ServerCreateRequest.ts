import { ChargingInfo } from './ChargingInfo';
import { EvsVolume } from './EvsVolume';
import { ServerDataVolume } from './ServerDataVolume';
import { ServerNetwork } from './ServerNetwork';


export class ServerCreateRequest {
    private 'admin_pass'?: string;
    public arch?: ServerCreateRequestArchEnum | string;
    private 'availability_zone'?: string;
    private 'charging_info'?: ChargingInfo;
    public count?: number;
    private 'enterprise_project_id'?: string;
    public flavor?: string;
    private 'resource_flavor'?: string;
    private 'image_id'?: string;
    private 'key_pair_name'?: string;
    public name?: string;
    public network?: ServerNetwork;
    private 'root_volume'?: EvsVolume;
    private 'data_volume'?: ServerDataVolume;
    private 'server_type'?: ServerCreateRequestServerTypeEnum | string;
    private 'user_data'?: string;
    private 'hps_cluster_id'?: string;
    public constructor(imageId?: string, name?: string, network?: ServerNetwork) { 
        this['image_id'] = imageId;
        this['name'] = name;
        this['network'] = network;
    }
    public withAdminPass(adminPass: string): ServerCreateRequest {
        this['admin_pass'] = adminPass;
        return this;
    }
    public set adminPass(adminPass: string  | undefined) {
        this['admin_pass'] = adminPass;
    }
    public get adminPass(): string | undefined {
        return this['admin_pass'];
    }
    public withArch(arch: ServerCreateRequestArchEnum | string): ServerCreateRequest {
        this['arch'] = arch;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): ServerCreateRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withChargingInfo(chargingInfo: ChargingInfo): ServerCreateRequest {
        this['charging_info'] = chargingInfo;
        return this;
    }
    public set chargingInfo(chargingInfo: ChargingInfo  | undefined) {
        this['charging_info'] = chargingInfo;
    }
    public get chargingInfo(): ChargingInfo | undefined {
        return this['charging_info'];
    }
    public withCount(count: number): ServerCreateRequest {
        this['count'] = count;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ServerCreateRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFlavor(flavor: string): ServerCreateRequest {
        this['flavor'] = flavor;
        return this;
    }
    public withResourceFlavor(resourceFlavor: string): ServerCreateRequest {
        this['resource_flavor'] = resourceFlavor;
        return this;
    }
    public set resourceFlavor(resourceFlavor: string  | undefined) {
        this['resource_flavor'] = resourceFlavor;
    }
    public get resourceFlavor(): string | undefined {
        return this['resource_flavor'];
    }
    public withImageId(imageId: string): ServerCreateRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withKeyPairName(keyPairName: string): ServerCreateRequest {
        this['key_pair_name'] = keyPairName;
        return this;
    }
    public set keyPairName(keyPairName: string  | undefined) {
        this['key_pair_name'] = keyPairName;
    }
    public get keyPairName(): string | undefined {
        return this['key_pair_name'];
    }
    public withName(name: string): ServerCreateRequest {
        this['name'] = name;
        return this;
    }
    public withNetwork(network: ServerNetwork): ServerCreateRequest {
        this['network'] = network;
        return this;
    }
    public withRootVolume(rootVolume: EvsVolume): ServerCreateRequest {
        this['root_volume'] = rootVolume;
        return this;
    }
    public set rootVolume(rootVolume: EvsVolume  | undefined) {
        this['root_volume'] = rootVolume;
    }
    public get rootVolume(): EvsVolume | undefined {
        return this['root_volume'];
    }
    public withDataVolume(dataVolume: ServerDataVolume): ServerCreateRequest {
        this['data_volume'] = dataVolume;
        return this;
    }
    public set dataVolume(dataVolume: ServerDataVolume  | undefined) {
        this['data_volume'] = dataVolume;
    }
    public get dataVolume(): ServerDataVolume | undefined {
        return this['data_volume'];
    }
    public withServerType(serverType: ServerCreateRequestServerTypeEnum | string): ServerCreateRequest {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: ServerCreateRequestServerTypeEnum | string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): ServerCreateRequestServerTypeEnum | string | undefined {
        return this['server_type'];
    }
    public withUserData(userData: string): ServerCreateRequest {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withHpsClusterId(hpsClusterId: string): ServerCreateRequest {
        this['hps_cluster_id'] = hpsClusterId;
        return this;
    }
    public set hpsClusterId(hpsClusterId: string  | undefined) {
        this['hps_cluster_id'] = hpsClusterId;
    }
    public get hpsClusterId(): string | undefined {
        return this['hps_cluster_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ServerCreateRequestArchEnum {
    ARM = 'ARM',
    X86 = 'X86'
}
/**
    * @export
    * @enum {string}
    */
export enum ServerCreateRequestServerTypeEnum {
    BMS = 'BMS',
    ECS = 'ECS',
    HPS = 'HPS'
}
