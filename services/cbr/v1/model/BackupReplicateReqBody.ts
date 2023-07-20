

export class BackupReplicateReqBody {
    public description?: string;
    private 'destination_project_id'?: string;
    private 'destination_region'?: string;
    private 'destination_vault_id'?: string;
    private 'enable_acceleration'?: boolean;
    public name?: string;
    public constructor(destinationProjectId?: string, destinationRegion?: string, destinationVaultId?: string) { 
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
    public set destinationProjectId(destinationProjectId: string  | undefined) {
        this['destination_project_id'] = destinationProjectId;
    }
    public get destinationProjectId(): string | undefined {
        return this['destination_project_id'];
    }
    public withDestinationRegion(destinationRegion: string): BackupReplicateReqBody {
        this['destination_region'] = destinationRegion;
        return this;
    }
    public set destinationRegion(destinationRegion: string  | undefined) {
        this['destination_region'] = destinationRegion;
    }
    public get destinationRegion(): string | undefined {
        return this['destination_region'];
    }
    public withDestinationVaultId(destinationVaultId: string): BackupReplicateReqBody {
        this['destination_vault_id'] = destinationVaultId;
        return this;
    }
    public set destinationVaultId(destinationVaultId: string  | undefined) {
        this['destination_vault_id'] = destinationVaultId;
    }
    public get destinationVaultId(): string | undefined {
        return this['destination_vault_id'];
    }
    public withEnableAcceleration(enableAcceleration: boolean): BackupReplicateReqBody {
        this['enable_acceleration'] = enableAcceleration;
        return this;
    }
    public set enableAcceleration(enableAcceleration: boolean  | undefined) {
        this['enable_acceleration'] = enableAcceleration;
    }
    public get enableAcceleration(): boolean | undefined {
        return this['enable_acceleration'];
    }
    public withName(name: string): BackupReplicateReqBody {
        this['name'] = name;
        return this;
    }
}