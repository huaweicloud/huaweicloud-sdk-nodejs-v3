

export class CheckpointReplicateParam {
    private 'auto_trigger'?: boolean;
    private 'destination_project_id'?: string;
    private 'destination_region'?: string;
    private 'destination_vault_id'?: string;
    private 'enable_acceleration'?: boolean;
    private 'vault_id'?: string;
    private 'cross_account_urn'?: string;
    public constructor(destinationProjectId?: string, destinationRegion?: string, destinationVaultId?: string, vaultId?: string) { 
        this['destination_project_id'] = destinationProjectId;
        this['destination_region'] = destinationRegion;
        this['destination_vault_id'] = destinationVaultId;
        this['vault_id'] = vaultId;
    }
    public withAutoTrigger(autoTrigger: boolean): CheckpointReplicateParam {
        this['auto_trigger'] = autoTrigger;
        return this;
    }
    public set autoTrigger(autoTrigger: boolean  | undefined) {
        this['auto_trigger'] = autoTrigger;
    }
    public get autoTrigger(): boolean | undefined {
        return this['auto_trigger'];
    }
    public withDestinationProjectId(destinationProjectId: string): CheckpointReplicateParam {
        this['destination_project_id'] = destinationProjectId;
        return this;
    }
    public set destinationProjectId(destinationProjectId: string  | undefined) {
        this['destination_project_id'] = destinationProjectId;
    }
    public get destinationProjectId(): string | undefined {
        return this['destination_project_id'];
    }
    public withDestinationRegion(destinationRegion: string): CheckpointReplicateParam {
        this['destination_region'] = destinationRegion;
        return this;
    }
    public set destinationRegion(destinationRegion: string  | undefined) {
        this['destination_region'] = destinationRegion;
    }
    public get destinationRegion(): string | undefined {
        return this['destination_region'];
    }
    public withDestinationVaultId(destinationVaultId: string): CheckpointReplicateParam {
        this['destination_vault_id'] = destinationVaultId;
        return this;
    }
    public set destinationVaultId(destinationVaultId: string  | undefined) {
        this['destination_vault_id'] = destinationVaultId;
    }
    public get destinationVaultId(): string | undefined {
        return this['destination_vault_id'];
    }
    public withEnableAcceleration(enableAcceleration: boolean): CheckpointReplicateParam {
        this['enable_acceleration'] = enableAcceleration;
        return this;
    }
    public set enableAcceleration(enableAcceleration: boolean  | undefined) {
        this['enable_acceleration'] = enableAcceleration;
    }
    public get enableAcceleration(): boolean | undefined {
        return this['enable_acceleration'];
    }
    public withVaultId(vaultId: string): CheckpointReplicateParam {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
    public withCrossAccountUrn(crossAccountUrn: string): CheckpointReplicateParam {
        this['cross_account_urn'] = crossAccountUrn;
        return this;
    }
    public set crossAccountUrn(crossAccountUrn: string  | undefined) {
        this['cross_account_urn'] = crossAccountUrn;
    }
    public get crossAccountUrn(): string | undefined {
        return this['cross_account_urn'];
    }
}