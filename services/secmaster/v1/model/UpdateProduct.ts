

export class UpdateProduct {
    private 'resource_type'?: string;
    private 'resource_spec_code'?: string;
    private 'resource_size'?: number;
    private 'resource_id'?: string;
    public constructor(resourceType?: string, resourceSpecCode?: string, resourceSize?: number, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_spec_code'] = resourceSpecCode;
        this['resource_size'] = resourceSize;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: string): UpdateProduct {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceSpecCode(resourceSpecCode: string): UpdateProduct {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withResourceSize(resourceSize: number): UpdateProduct {
        this['resource_size'] = resourceSize;
        return this;
    }
    public set resourceSize(resourceSize: number  | undefined) {
        this['resource_size'] = resourceSize;
    }
    public get resourceSize(): number | undefined {
        return this['resource_size'];
    }
    public withResourceId(resourceId: string): UpdateProduct {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
}