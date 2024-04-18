

export class DetailsBody {
    private 'old_capacity'?: string;
    private 'new_capacity'?: string;
    private 'enable_public_ip'?: boolean;
    private 'public_ip_id'?: string;
    private 'public_ip_address'?: string;
    private 'enable_ssl'?: boolean;
    private 'old_cache_mode'?: string;
    private 'new_cache_mode'?: string;
    private 'old_resource_spec_code'?: string;
    private 'new_resource_spec_code'?: string;
    private 'old_replica_num'?: number;
    private 'new_replica_num'?: number;
    private 'old_cache_type'?: string;
    private 'new_cache_type'?: string;
    private 'replica_ip'?: string;
    private 'replica_az'?: string;
    private 'group_name'?: string;
    private 'old_port'?: number;
    private 'new_port'?: number;
    private 'is_only_adjust_charging'?: boolean;
    private 'account_name'?: string;
    private 'source_ip'?: string;
    private 'target_ip'?: string;
    private 'node_name'?: string;
    private 'rename_commands'?: Array<string>;
    private 'updated_config_length'?: number;
    public constructor() { 
    }
    public withOldCapacity(oldCapacity: string): DetailsBody {
        this['old_capacity'] = oldCapacity;
        return this;
    }
    public set oldCapacity(oldCapacity: string  | undefined) {
        this['old_capacity'] = oldCapacity;
    }
    public get oldCapacity(): string | undefined {
        return this['old_capacity'];
    }
    public withNewCapacity(newCapacity: string): DetailsBody {
        this['new_capacity'] = newCapacity;
        return this;
    }
    public set newCapacity(newCapacity: string  | undefined) {
        this['new_capacity'] = newCapacity;
    }
    public get newCapacity(): string | undefined {
        return this['new_capacity'];
    }
    public withEnablePublicIp(enablePublicIp: boolean): DetailsBody {
        this['enable_public_ip'] = enablePublicIp;
        return this;
    }
    public set enablePublicIp(enablePublicIp: boolean  | undefined) {
        this['enable_public_ip'] = enablePublicIp;
    }
    public get enablePublicIp(): boolean | undefined {
        return this['enable_public_ip'];
    }
    public withPublicIpId(publicIpId: string): DetailsBody {
        this['public_ip_id'] = publicIpId;
        return this;
    }
    public set publicIpId(publicIpId: string  | undefined) {
        this['public_ip_id'] = publicIpId;
    }
    public get publicIpId(): string | undefined {
        return this['public_ip_id'];
    }
    public withPublicIpAddress(publicIpAddress: string): DetailsBody {
        this['public_ip_address'] = publicIpAddress;
        return this;
    }
    public set publicIpAddress(publicIpAddress: string  | undefined) {
        this['public_ip_address'] = publicIpAddress;
    }
    public get publicIpAddress(): string | undefined {
        return this['public_ip_address'];
    }
    public withEnableSsl(enableSsl: boolean): DetailsBody {
        this['enable_ssl'] = enableSsl;
        return this;
    }
    public set enableSsl(enableSsl: boolean  | undefined) {
        this['enable_ssl'] = enableSsl;
    }
    public get enableSsl(): boolean | undefined {
        return this['enable_ssl'];
    }
    public withOldCacheMode(oldCacheMode: string): DetailsBody {
        this['old_cache_mode'] = oldCacheMode;
        return this;
    }
    public set oldCacheMode(oldCacheMode: string  | undefined) {
        this['old_cache_mode'] = oldCacheMode;
    }
    public get oldCacheMode(): string | undefined {
        return this['old_cache_mode'];
    }
    public withNewCacheMode(newCacheMode: string): DetailsBody {
        this['new_cache_mode'] = newCacheMode;
        return this;
    }
    public set newCacheMode(newCacheMode: string  | undefined) {
        this['new_cache_mode'] = newCacheMode;
    }
    public get newCacheMode(): string | undefined {
        return this['new_cache_mode'];
    }
    public withOldResourceSpecCode(oldResourceSpecCode: string): DetailsBody {
        this['old_resource_spec_code'] = oldResourceSpecCode;
        return this;
    }
    public set oldResourceSpecCode(oldResourceSpecCode: string  | undefined) {
        this['old_resource_spec_code'] = oldResourceSpecCode;
    }
    public get oldResourceSpecCode(): string | undefined {
        return this['old_resource_spec_code'];
    }
    public withNewResourceSpecCode(newResourceSpecCode: string): DetailsBody {
        this['new_resource_spec_code'] = newResourceSpecCode;
        return this;
    }
    public set newResourceSpecCode(newResourceSpecCode: string  | undefined) {
        this['new_resource_spec_code'] = newResourceSpecCode;
    }
    public get newResourceSpecCode(): string | undefined {
        return this['new_resource_spec_code'];
    }
    public withOldReplicaNum(oldReplicaNum: number): DetailsBody {
        this['old_replica_num'] = oldReplicaNum;
        return this;
    }
    public set oldReplicaNum(oldReplicaNum: number  | undefined) {
        this['old_replica_num'] = oldReplicaNum;
    }
    public get oldReplicaNum(): number | undefined {
        return this['old_replica_num'];
    }
    public withNewReplicaNum(newReplicaNum: number): DetailsBody {
        this['new_replica_num'] = newReplicaNum;
        return this;
    }
    public set newReplicaNum(newReplicaNum: number  | undefined) {
        this['new_replica_num'] = newReplicaNum;
    }
    public get newReplicaNum(): number | undefined {
        return this['new_replica_num'];
    }
    public withOldCacheType(oldCacheType: string): DetailsBody {
        this['old_cache_type'] = oldCacheType;
        return this;
    }
    public set oldCacheType(oldCacheType: string  | undefined) {
        this['old_cache_type'] = oldCacheType;
    }
    public get oldCacheType(): string | undefined {
        return this['old_cache_type'];
    }
    public withNewCacheType(newCacheType: string): DetailsBody {
        this['new_cache_type'] = newCacheType;
        return this;
    }
    public set newCacheType(newCacheType: string  | undefined) {
        this['new_cache_type'] = newCacheType;
    }
    public get newCacheType(): string | undefined {
        return this['new_cache_type'];
    }
    public withReplicaIp(replicaIp: string): DetailsBody {
        this['replica_ip'] = replicaIp;
        return this;
    }
    public set replicaIp(replicaIp: string  | undefined) {
        this['replica_ip'] = replicaIp;
    }
    public get replicaIp(): string | undefined {
        return this['replica_ip'];
    }
    public withReplicaAz(replicaAz: string): DetailsBody {
        this['replica_az'] = replicaAz;
        return this;
    }
    public set replicaAz(replicaAz: string  | undefined) {
        this['replica_az'] = replicaAz;
    }
    public get replicaAz(): string | undefined {
        return this['replica_az'];
    }
    public withGroupName(groupName: string): DetailsBody {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withOldPort(oldPort: number): DetailsBody {
        this['old_port'] = oldPort;
        return this;
    }
    public set oldPort(oldPort: number  | undefined) {
        this['old_port'] = oldPort;
    }
    public get oldPort(): number | undefined {
        return this['old_port'];
    }
    public withNewPort(newPort: number): DetailsBody {
        this['new_port'] = newPort;
        return this;
    }
    public set newPort(newPort: number  | undefined) {
        this['new_port'] = newPort;
    }
    public get newPort(): number | undefined {
        return this['new_port'];
    }
    public withIsOnlyAdjustCharging(isOnlyAdjustCharging: boolean): DetailsBody {
        this['is_only_adjust_charging'] = isOnlyAdjustCharging;
        return this;
    }
    public set isOnlyAdjustCharging(isOnlyAdjustCharging: boolean  | undefined) {
        this['is_only_adjust_charging'] = isOnlyAdjustCharging;
    }
    public get isOnlyAdjustCharging(): boolean | undefined {
        return this['is_only_adjust_charging'];
    }
    public withAccountName(accountName: string): DetailsBody {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
    public withSourceIp(sourceIp: string): DetailsBody {
        this['source_ip'] = sourceIp;
        return this;
    }
    public set sourceIp(sourceIp: string  | undefined) {
        this['source_ip'] = sourceIp;
    }
    public get sourceIp(): string | undefined {
        return this['source_ip'];
    }
    public withTargetIp(targetIp: string): DetailsBody {
        this['target_ip'] = targetIp;
        return this;
    }
    public set targetIp(targetIp: string  | undefined) {
        this['target_ip'] = targetIp;
    }
    public get targetIp(): string | undefined {
        return this['target_ip'];
    }
    public withNodeName(nodeName: string): DetailsBody {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withRenameCommands(renameCommands: Array<string>): DetailsBody {
        this['rename_commands'] = renameCommands;
        return this;
    }
    public set renameCommands(renameCommands: Array<string>  | undefined) {
        this['rename_commands'] = renameCommands;
    }
    public get renameCommands(): Array<string> | undefined {
        return this['rename_commands'];
    }
    public withUpdatedConfigLength(updatedConfigLength: number): DetailsBody {
        this['updated_config_length'] = updatedConfigLength;
        return this;
    }
    public set updatedConfigLength(updatedConfigLength: number  | undefined) {
        this['updated_config_length'] = updatedConfigLength;
    }
    public get updatedConfigLength(): number | undefined {
        return this['updated_config_length'];
    }
}