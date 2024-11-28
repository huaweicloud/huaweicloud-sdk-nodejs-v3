

export class CbcProductInfoOrderChange {
    private 'product_id'?: string;
    private 'resource_size'?: number;
    private 'resource_size_measure_id'?: number;
    private 'resource_spec_code'?: CbcProductInfoOrderChangeResourceSpecCodeEnum | string;
    public constructor(productId?: string, resourceSize?: number, resourceSpecCode?: string) { 
        this['product_id'] = productId;
        this['resource_size'] = resourceSize;
        this['resource_spec_code'] = resourceSpecCode;
    }
    public withProductId(productId: string): CbcProductInfoOrderChange {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withResourceSize(resourceSize: number): CbcProductInfoOrderChange {
        this['resource_size'] = resourceSize;
        return this;
    }
    public set resourceSize(resourceSize: number  | undefined) {
        this['resource_size'] = resourceSize;
    }
    public get resourceSize(): number | undefined {
        return this['resource_size'];
    }
    public withResourceSizeMeasureId(resourceSizeMeasureId: number): CbcProductInfoOrderChange {
        this['resource_size_measure_id'] = resourceSizeMeasureId;
        return this;
    }
    public set resourceSizeMeasureId(resourceSizeMeasureId: number  | undefined) {
        this['resource_size_measure_id'] = resourceSizeMeasureId;
    }
    public get resourceSizeMeasureId(): number | undefined {
        return this['resource_size_measure_id'];
    }
    public withResourceSpecCode(resourceSpecCode: CbcProductInfoOrderChangeResourceSpecCodeEnum | string): CbcProductInfoOrderChange {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: CbcProductInfoOrderChangeResourceSpecCodeEnum | string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): CbcProductInfoOrderChangeResourceSpecCodeEnum | string | undefined {
        return this['resource_spec_code'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CbcProductInfoOrderChangeResourceSpecCodeEnum {
    VAULT_BACKUP_SERVER_NORMAL = 'vault.backup.server.normal',
    VAULT_BACKUP_TURBO_NORMAL = 'vault.backup.turbo.normal',
    VAULT_BACKUP_DATABASE_NORMAL = 'vault.backup.database.normal',
    VAULT_BACKUP_VOLUME_NORMAL = 'vault.backup.volume.normal',
    VAULT_BACKUP_RDS_NORMAL = 'vault.backup.rds.normal',
    VAULT_REPLICATION_SERVER_NORMAL = 'vault.replication.server.normal',
    VAULT_HYBRID_SERVER_NORMAL = 'vault.hybrid.server.normal'
}
