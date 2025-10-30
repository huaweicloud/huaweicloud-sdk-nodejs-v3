

export class BackupResp {
    public id?: string;
    public name?: string;
    private 'image_type'?: string;
    private 'vault_id'?: string;
    public status?: string;
    private 'resource_size'?: number;
    private 'resource_id'?: string;
    private 'resource_type'?: string;
    private 'resource_name'?: string;
    public constructor() { 
    }
    public withId(id: string): BackupResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BackupResp {
        this['name'] = name;
        return this;
    }
    public withImageType(imageType: string): BackupResp {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withVaultId(vaultId: string): BackupResp {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
    public withStatus(status: string): BackupResp {
        this['status'] = status;
        return this;
    }
    public withResourceSize(resourceSize: number): BackupResp {
        this['resource_size'] = resourceSize;
        return this;
    }
    public set resourceSize(resourceSize: number  | undefined) {
        this['resource_size'] = resourceSize;
    }
    public get resourceSize(): number | undefined {
        return this['resource_size'];
    }
    public withResourceId(resourceId: string): BackupResp {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: string): BackupResp {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceName(resourceName: string): BackupResp {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
}