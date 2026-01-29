

export class Product {
    private 'resource_type'?: string;
    private 'resource_spec_code'?: string;
    private 'resource_size'?: number;
    public constructor(resourceType?: string, resourceSpecCode?: string, resourceSize?: number) { 
        this['resource_type'] = resourceType;
        this['resource_spec_code'] = resourceSpecCode;
        this['resource_size'] = resourceSize;
    }
    public withResourceType(resourceType: string): Product {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceSpecCode(resourceSpecCode: string): Product {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withResourceSize(resourceSize: number): Product {
        this['resource_size'] = resourceSize;
        return this;
    }
    public set resourceSize(resourceSize: number  | undefined) {
        this['resource_size'] = resourceSize;
    }
    public get resourceSize(): number | undefined {
        return this['resource_size'];
    }
}