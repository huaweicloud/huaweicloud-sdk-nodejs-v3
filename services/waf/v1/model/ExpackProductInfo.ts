

export class ExpackProductInfo {
    private 'resource_size'?: number;
    public constructor() { 
    }
    public withResourceSize(resourceSize: number): ExpackProductInfo {
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