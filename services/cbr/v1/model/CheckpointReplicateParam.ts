

export class CheckpointReplicateParam {
    private 'auto_trigger'?: boolean | undefined;
    private 'destination_project_id': string | undefined;
    private 'destination_region': string | undefined;
    private 'destination_vault_id': string | undefined;
    private 'enable_acceleration'?: boolean | undefined;
    private 'vault_id': string | undefined;
    public constructor(destinationProjectId?: any, destinationRegion?: any, destinationVaultId?: any, vaultId?: any) { 
        this['destination_project_id'] = destinationProjectId;
        this['destination_region'] = destinationRegion;
        this['destination_vault_id'] = destinationVaultId;
        this['vault_id'] = vaultId;
    }
    public withAutoTrigger(autoTrigger: boolean): CheckpointReplicateParam {
        this['auto_trigger'] = autoTrigger;
        return this;
    }
    public set autoTrigger(autoTrigger: boolean | undefined) {
        this['auto_trigger'] = autoTrigger;
    }
    public get autoTrigger() {
        return this['auto_trigger'];
    }
    public withDestinationProjectId(destinationProjectId: string): CheckpointReplicateParam {
        this['destination_project_id'] = destinationProjectId;
        return this;
    }
    public set destinationProjectId(destinationProjectId: string | undefined) {
        this['destination_project_id'] = destinationProjectId;
    }
    public get destinationProjectId() {
        return this['destination_project_id'];
    }
    public withDestinationRegion(destinationRegion: string): CheckpointReplicateParam {
        this['destination_region'] = destinationRegion;
        return this;
    }
    public set destinationRegion(destinationRegion: string | undefined) {
        this['destination_region'] = destinationRegion;
    }
    public get destinationRegion() {
        return this['destination_region'];
    }
    public withDestinationVaultId(destinationVaultId: string): CheckpointReplicateParam {
        this['destination_vault_id'] = destinationVaultId;
        return this;
    }
    public set destinationVaultId(destinationVaultId: string | undefined) {
        this['destination_vault_id'] = destinationVaultId;
    }
    public get destinationVaultId() {
        return this['destination_vault_id'];
    }
    public withEnableAcceleration(enableAcceleration: boolean): CheckpointReplicateParam {
        this['enable_acceleration'] = enableAcceleration;
        return this;
    }
    public set enableAcceleration(enableAcceleration: boolean | undefined) {
        this['enable_acceleration'] = enableAcceleration;
    }
    public get enableAcceleration() {
        return this['enable_acceleration'];
    }
    public withVaultId(vaultId: string): CheckpointReplicateParam {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId() {
        return this['vault_id'];
    }
}