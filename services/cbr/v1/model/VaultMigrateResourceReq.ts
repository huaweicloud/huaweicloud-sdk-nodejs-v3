

export class VaultMigrateResourceReq {
    private 'destination_vault_id': string | undefined;
    private 'resource_ids': Array<string> | undefined;
    public constructor(destinationVaultId?: any, resourceIds?: any) { 
        this['destination_vault_id'] = destinationVaultId;
        this['resource_ids'] = resourceIds;
    }
    public withDestinationVaultId(destinationVaultId: string): VaultMigrateResourceReq {
        this['destination_vault_id'] = destinationVaultId;
        return this;
    }
    public set destinationVaultId(destinationVaultId: string | undefined) {
        this['destination_vault_id'] = destinationVaultId;
    }
    public get destinationVaultId() {
        return this['destination_vault_id'];
    }
    public withResourceIds(resourceIds: Array<string>): VaultMigrateResourceReq {
        this['resource_ids'] = resourceIds;
        return this;
    }
    public set resourceIds(resourceIds: Array<string> | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds() {
        return this['resource_ids'];
    }
}