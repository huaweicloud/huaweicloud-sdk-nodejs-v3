

export class BackupReplicateReqBody {
    public description?: string;
    private 'destination_project_id': string | undefined;
    private 'destination_region': string | undefined;
    private 'destination_vault_id': string | undefined;
    private 'enable_acceleration'?: boolean | undefined;
    public name?: string;
    public constructor(destinationProjectId?: any, destinationRegion?: any, destinationVaultId?: any) { 
        this['destination_project_id'] = destinationProjectId;
        this['destination_region'] = destinationRegion;
        this['destination_vault_id'] = destinationVaultId;
    }
    public withDescription(description: string): BackupReplicateReqBody {
        this['description'] = description;
        return this;
    }
    public withDestinationProjectId(destinationProjectId: string): BackupReplicateReqBody {
        this['destination_project_id'] = destinationProjectId;
        return this;
    }
    public set destinationProjectId(destinationProjectId: string | undefined) {
        this['destination_project_id'] = destinationProjectId;
    }
    public get destinationProjectId() {
        return this['destination_project_id'];
    }
    public withDestinationRegion(destinationRegion: string): BackupReplicateReqBody {
        this['destination_region'] = destinationRegion;
        return this;
    }
    public set destinationRegion(destinationRegion: string | undefined) {
        this['destination_region'] = destinationRegion;
    }
    public get destinationRegion() {
        return this['destination_region'];
    }
    public withDestinationVaultId(destinationVaultId: string): BackupReplicateReqBody {
        this['destination_vault_id'] = destinationVaultId;
        return this;
    }
    public set destinationVaultId(destinationVaultId: string | undefined) {
        this['destination_vault_id'] = destinationVaultId;
    }
    public get destinationVaultId() {
        return this['destination_vault_id'];
    }
    public withEnableAcceleration(enableAcceleration: boolean): BackupReplicateReqBody {
        this['enable_acceleration'] = enableAcceleration;
        return this;
    }
    public set enableAcceleration(enableAcceleration: boolean | undefined) {
        this['enable_acceleration'] = enableAcceleration;
    }
    public get enableAcceleration() {
        return this['enable_acceleration'];
    }
    public withName(name: string): BackupReplicateReqBody {
        this['name'] = name;
        return this;
    }
}