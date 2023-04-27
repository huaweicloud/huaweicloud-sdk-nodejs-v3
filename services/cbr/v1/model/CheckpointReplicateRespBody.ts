import { CheckpointReplicateRespbackups } from './CheckpointReplicateRespbackups';


export class CheckpointReplicateRespBody {
    public backups: Array<CheckpointReplicateRespbackups>;
    private 'destination_project_id': string | undefined;
    private 'destination_region': string | undefined;
    private 'destination_vault_id': string | undefined;
    private 'project_id': string | undefined;
    private 'provider_id': string | undefined;
    private 'source_region': string | undefined;
    private 'vault_id': string | undefined;
    public constructor(backups?: any, destinationProjectId?: any, destinationRegion?: any, destinationVaultId?: any, projectId?: any, providerId?: any, sourceRegion?: any, vaultId?: any) { 
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
    public set destinationProjectId(destinationProjectId: string | undefined) {
        this['destination_project_id'] = destinationProjectId;
    }
    public get destinationProjectId() {
        return this['destination_project_id'];
    }
    public withDestinationRegion(destinationRegion: string): CheckpointReplicateRespBody {
        this['destination_region'] = destinationRegion;
        return this;
    }
    public set destinationRegion(destinationRegion: string | undefined) {
        this['destination_region'] = destinationRegion;
    }
    public get destinationRegion() {
        return this['destination_region'];
    }
    public withDestinationVaultId(destinationVaultId: string): CheckpointReplicateRespBody {
        this['destination_vault_id'] = destinationVaultId;
        return this;
    }
    public set destinationVaultId(destinationVaultId: string | undefined) {
        this['destination_vault_id'] = destinationVaultId;
    }
    public get destinationVaultId() {
        return this['destination_vault_id'];
    }
    public withProjectId(projectId: string): CheckpointReplicateRespBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withProviderId(providerId: string): CheckpointReplicateRespBody {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId() {
        return this['provider_id'];
    }
    public withSourceRegion(sourceRegion: string): CheckpointReplicateRespBody {
        this['source_region'] = sourceRegion;
        return this;
    }
    public set sourceRegion(sourceRegion: string | undefined) {
        this['source_region'] = sourceRegion;
    }
    public get sourceRegion() {
        return this['source_region'];
    }
    public withVaultId(vaultId: string): CheckpointReplicateRespBody {
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