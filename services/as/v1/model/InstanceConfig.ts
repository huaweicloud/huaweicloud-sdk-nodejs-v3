import { CpuOptions } from './CpuOptions';
import { DiskInfo } from './DiskInfo';
import { PersonalityInfo } from './PersonalityInfo';
import { PublicIp } from './PublicIp';
import { SecurityGroups } from './SecurityGroups';
import { VmMetaData } from './VmMetaData';


export class InstanceConfig {
    private 'instance_id'?: string;
    public flavorRef?: string;
    public imageRef?: string;
    public disk?: Array<DiskInfo>;
    private 'key_name'?: string;
    public personality?: Array<PersonalityInfo>;
    private 'public_ip'?: PublicIp;
    private 'user_data'?: string;
    public metadata?: VmMetaData;
    private 'security_groups'?: Array<SecurityGroups>;
    private 'server_group_id'?: string;
    public tenancy?: InstanceConfigTenancyEnum | string;
    private 'dedicated_host_id'?: string;
    private 'multi_flavor_priority_policy'?: InstanceConfigMultiFlavorPriorityPolicyEnum | string;
    private 'market_type'?: InstanceConfigMarketTypeEnum | string;
    private 'cpu_options'?: CpuOptions;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): InstanceConfig {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withFlavorRef(flavorRef: string): InstanceConfig {
        this['flavorRef'] = flavorRef;
        return this;
    }
    public withImageRef(imageRef: string): InstanceConfig {
        this['imageRef'] = imageRef;
        return this;
    }
    public withDisk(disk: Array<DiskInfo>): InstanceConfig {
        this['disk'] = disk;
        return this;
    }
    public withKeyName(keyName: string): InstanceConfig {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string  | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName(): string | undefined {
        return this['key_name'];
    }
    public withPersonality(personality: Array<PersonalityInfo>): InstanceConfig {
        this['personality'] = personality;
        return this;
    }
    public withPublicIp(publicIp: PublicIp): InstanceConfig {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: PublicIp  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): PublicIp | undefined {
        return this['public_ip'];
    }
    public withUserData(userData: string): InstanceConfig {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withMetadata(metadata: VmMetaData): InstanceConfig {
        this['metadata'] = metadata;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroups>): InstanceConfig {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroups>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroups> | undefined {
        return this['security_groups'];
    }
    public withServerGroupId(serverGroupId: string): InstanceConfig {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
    public withTenancy(tenancy: InstanceConfigTenancyEnum | string): InstanceConfig {
        this['tenancy'] = tenancy;
        return this;
    }
    public withDedicatedHostId(dedicatedHostId: string): InstanceConfig {
        this['dedicated_host_id'] = dedicatedHostId;
        return this;
    }
    public set dedicatedHostId(dedicatedHostId: string  | undefined) {
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public get dedicatedHostId(): string | undefined {
        return this['dedicated_host_id'];
    }
    public withMultiFlavorPriorityPolicy(multiFlavorPriorityPolicy: InstanceConfigMultiFlavorPriorityPolicyEnum | string): InstanceConfig {
        this['multi_flavor_priority_policy'] = multiFlavorPriorityPolicy;
        return this;
    }
    public set multiFlavorPriorityPolicy(multiFlavorPriorityPolicy: InstanceConfigMultiFlavorPriorityPolicyEnum | string  | undefined) {
        this['multi_flavor_priority_policy'] = multiFlavorPriorityPolicy;
    }
    public get multiFlavorPriorityPolicy(): InstanceConfigMultiFlavorPriorityPolicyEnum | string | undefined {
        return this['multi_flavor_priority_policy'];
    }
    public withMarketType(marketType: InstanceConfigMarketTypeEnum | string): InstanceConfig {
        this['market_type'] = marketType;
        return this;
    }
    public set marketType(marketType: InstanceConfigMarketTypeEnum | string  | undefined) {
        this['market_type'] = marketType;
    }
    public get marketType(): InstanceConfigMarketTypeEnum | string | undefined {
        return this['market_type'];
    }
    public withCpuOptions(cpuOptions: CpuOptions): InstanceConfig {
        this['cpu_options'] = cpuOptions;
        return this;
    }
    public set cpuOptions(cpuOptions: CpuOptions  | undefined) {
        this['cpu_options'] = cpuOptions;
    }
    public get cpuOptions(): CpuOptions | undefined {
        return this['cpu_options'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InstanceConfigTenancyEnum {
    DEDICATED = 'dedicated'
}
/**
    * @export
    * @enum {string}
    */
export enum InstanceConfigMultiFlavorPriorityPolicyEnum {
    PICK_FIRST = 'PICK_FIRST',
    COST_FIRST = 'COST_FIRST'
}
/**
    * @export
    * @enum {string}
    */
export enum InstanceConfigMarketTypeEnum {
    SPOT = 'spot'
}
