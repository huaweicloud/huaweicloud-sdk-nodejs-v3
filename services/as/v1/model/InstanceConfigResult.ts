import { DiskResult } from './DiskResult';
import { PersonalityResult } from './PersonalityResult';
import { PublicipResult } from './PublicipResult';
import { SecurityGroups } from './SecurityGroups';
import { VmMetaData } from './VmMetaData';


export class InstanceConfigResult {
    public flavorRef?: string;
    public imageRef?: string;
    public disk?: Array<DiskResult>;
    private 'key_name'?: string;
    private 'key_fingerprint'?: string;
    private 'instance_name'?: string;
    private 'instance_id'?: string;
    public adminPass?: string;
    public personality?: Array<PersonalityResult>;
    private 'public_ip'?: PublicipResult;
    private 'user_data'?: string;
    public metadata?: VmMetaData;
    private 'security_groups'?: Array<SecurityGroups>;
    private 'server_group_id'?: string;
    public tenancy?: string;
    private 'dedicated_host_id'?: string;
    private 'market_type'?: string;
    private 'multi_flavor_priority_policy'?: string;
    public constructor() { 
    }
    public withFlavorRef(flavorRef: string): InstanceConfigResult {
        this['flavorRef'] = flavorRef;
        return this;
    }
    public withImageRef(imageRef: string): InstanceConfigResult {
        this['imageRef'] = imageRef;
        return this;
    }
    public withDisk(disk: Array<DiskResult>): InstanceConfigResult {
        this['disk'] = disk;
        return this;
    }
    public withKeyName(keyName: string): InstanceConfigResult {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string  | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName(): string | undefined {
        return this['key_name'];
    }
    public withKeyFingerprint(keyFingerprint: string): InstanceConfigResult {
        this['key_fingerprint'] = keyFingerprint;
        return this;
    }
    public set keyFingerprint(keyFingerprint: string  | undefined) {
        this['key_fingerprint'] = keyFingerprint;
    }
    public get keyFingerprint(): string | undefined {
        return this['key_fingerprint'];
    }
    public withInstanceName(instanceName: string): InstanceConfigResult {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceId(instanceId: string): InstanceConfigResult {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAdminPass(adminPass: string): InstanceConfigResult {
        this['adminPass'] = adminPass;
        return this;
    }
    public withPersonality(personality: Array<PersonalityResult>): InstanceConfigResult {
        this['personality'] = personality;
        return this;
    }
    public withPublicIp(publicIp: PublicipResult): InstanceConfigResult {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: PublicipResult  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): PublicipResult | undefined {
        return this['public_ip'];
    }
    public withUserData(userData: string): InstanceConfigResult {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withMetadata(metadata: VmMetaData): InstanceConfigResult {
        this['metadata'] = metadata;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroups>): InstanceConfigResult {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroups>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroups> | undefined {
        return this['security_groups'];
    }
    public withServerGroupId(serverGroupId: string): InstanceConfigResult {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
    public withTenancy(tenancy: string): InstanceConfigResult {
        this['tenancy'] = tenancy;
        return this;
    }
    public withDedicatedHostId(dedicatedHostId: string): InstanceConfigResult {
        this['dedicated_host_id'] = dedicatedHostId;
        return this;
    }
    public set dedicatedHostId(dedicatedHostId: string  | undefined) {
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public get dedicatedHostId(): string | undefined {
        return this['dedicated_host_id'];
    }
    public withMarketType(marketType: string): InstanceConfigResult {
        this['market_type'] = marketType;
        return this;
    }
    public set marketType(marketType: string  | undefined) {
        this['market_type'] = marketType;
    }
    public get marketType(): string | undefined {
        return this['market_type'];
    }
    public withMultiFlavorPriorityPolicy(multiFlavorPriorityPolicy: string): InstanceConfigResult {
        this['multi_flavor_priority_policy'] = multiFlavorPriorityPolicy;
        return this;
    }
    public set multiFlavorPriorityPolicy(multiFlavorPriorityPolicy: string  | undefined) {
        this['multi_flavor_priority_policy'] = multiFlavorPriorityPolicy;
    }
    public get multiFlavorPriorityPolicy(): string | undefined {
        return this['multi_flavor_priority_policy'];
    }
}