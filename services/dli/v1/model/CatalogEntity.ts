

export class CatalogEntity {
    public name?: string;
    private 'create_time'?: number;
    public parameters?: { [key: string]: string; };
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): CatalogEntity {
        this['name'] = name;
        return this;
    }
    public withCreateTime(createTime: number): CatalogEntity {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withParameters(parameters: { [key: string]: string; }): CatalogEntity {
        this['parameters'] = parameters;
        return this;
    }
    public withDescription(description: string): CatalogEntity {
        this['description'] = description;
        return this;
    }
}