import { ChargeInfo } from './ChargeInfo';
import { SupabaseDatastore } from './SupabaseDatastore';
import { SupabaseVolumeConfig } from './SupabaseVolumeConfig';
import { TagWithKeyValue } from './TagWithKeyValue';


export class SupabaseInstanceCreateRequest {
    public datastore?: SupabaseDatastore;
    private 'charge_info'?: ChargeInfo;
    private 'flavor_ref'?: string;
    public volume?: SupabaseVolumeConfig;
    private 'availability_zone'?: string;
    private 'configuration_id'?: string;
    public port?: number;
    private 'security_group_id'?: string;
    public password?: string;
    private 'data_vip'?: string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<TagWithKeyValue>;
    public constructor(datastore?: SupabaseDatastore, chargeInfo?: ChargeInfo, flavorRef?: string, volume?: SupabaseVolumeConfig, availabilityZone?: string, securityGroupId?: string, password?: string, enterpriseProjectId?: string) { 
        this['datastore'] = datastore;
        this['charge_info'] = chargeInfo;
        this['flavor_ref'] = flavorRef;
        this['volume'] = volume;
        this['availability_zone'] = availabilityZone;
        this['security_group_id'] = securityGroupId;
        this['password'] = password;
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withDatastore(datastore: SupabaseDatastore): SupabaseInstanceCreateRequest {
        this['datastore'] = datastore;
        return this;
    }
    public withChargeInfo(chargeInfo: ChargeInfo): SupabaseInstanceCreateRequest {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: ChargeInfo  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): ChargeInfo | undefined {
        return this['charge_info'];
    }
    public withFlavorRef(flavorRef: string): SupabaseInstanceCreateRequest {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withVolume(volume: SupabaseVolumeConfig): SupabaseInstanceCreateRequest {
        this['volume'] = volume;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): SupabaseInstanceCreateRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withConfigurationId(configurationId: string): SupabaseInstanceCreateRequest {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withPort(port: number): SupabaseInstanceCreateRequest {
        this['port'] = port;
        return this;
    }
    public withSecurityGroupId(securityGroupId: string): SupabaseInstanceCreateRequest {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withPassword(password: string): SupabaseInstanceCreateRequest {
        this['password'] = password;
        return this;
    }
    public withDataVip(dataVip: string): SupabaseInstanceCreateRequest {
        this['data_vip'] = dataVip;
        return this;
    }
    public set dataVip(dataVip: string  | undefined) {
        this['data_vip'] = dataVip;
    }
    public get dataVip(): string | undefined {
        return this['data_vip'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SupabaseInstanceCreateRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<TagWithKeyValue>): SupabaseInstanceCreateRequest {
        this['tags'] = tags;
        return this;
    }
}