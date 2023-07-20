import { CheckpointReplicateRespbackups } from './CheckpointReplicateRespbackups';


export class CheckpointReplicateRespBody {
    public backups?: Array<CheckpointReplicateRespbackups>;
    private 'destination_project_id'?: string;
    private 'destination_region'?: string;
    private 'destination_vault_id'?: string;
    private 'project_id'?: string;
    private 'provider_id'?: string;
    private 'source_region'?: string;
    private 'vault_id'?: string;
    public constructor(backups?: Array<CheckpointReplicateRespbackups>, destinationProjectId?: string, destinationRegion?: string, destinationVaultId?: string, projectId?: string, providerId?: string, sourceRegion?: string, vaultId?: string) { 
        this['backups'] = backups;
        this['destination_project_id'] = destinationProjectId;
        this['destination_region'] = destinationRegion;
        this['destination_vault_id'] = destinationVaultId;
        this['project_id'] = projectId;
        this['provider_id'] = providerId;
        this['source_region'] = sourceRegion;
        this['vault_id'] = vaultId;
    }
    public withBackups(backups: Array<CheckpointReplicateRespbackups>): CheckpointReplicateRespBody {
        this['backups'] = backups;
        return this;
    }
    public withDestinationProjectId(destinationProjectId: string): CheckpointReplicateRespBody {
        this['destination_project_id'] = destinationProjectId;
        return this;
    }
    public set destinationProjectId(destinationProjectId: string  | undefined) {
        this['destination_project_id'] = destinationProjectId;
    }
    public get destinationProjectId(): string | undefined {
        return this['destination_project_id'];
    }
    public withDestinationRegion(destinationRegion: string): CheckpointReplicateRespBody {
        this['destination_region'] = destinationRegion;
        return this;
    }
    public set destinationRegion(destinationRegion: string  | undefined) {
        this['destination_region'] = destinationRegion;
    }
    public get destinationRegion(): string | undefined {
        return this['destination_region'];
    }
    public withDestinationVaultId(destinationVaultId: string): CheckpointReplicateRespBody {
        this['destination_vault_id'] = destinationVaultId;
        return this;
    }
    public set destinationVaultId(destinationVaultId: string  | undefined) {
        this['destination_vault_id'] = destinationVaultId;
    }
    public get destinationVaultId(): string | undefined {
        return this['destination_vault_id'];
    }
    public withProjectId(projectId: string): CheckpointReplicateRespBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProviderId(providerId: string): CheckpointReplicateRespBody {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withSourceRegion(sourceRegion: string): CheckpointReplicateRespBody {
        this['source_region'] = sourceRegion;
        return this;
    }
    public set sourceRegion(sourceRegion: string  | undefined) {
        this['source_region'] = sourceRegion;
    }
    public get sourceRegion(): string | undefined {
        return this['source_region'];
    }
    public withVaultId(vaultId: string): CheckpointReplicateRespBody {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
}