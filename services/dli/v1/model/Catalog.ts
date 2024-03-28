

export class Catalog {
    public name?: string;
    private 'create_time'?: number;
    public parameters?: { [key: string]: string; };
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): Catalog {
        this['name'] = name;
        return this;
    }
    public withCreateTime(createTime: number): Catalog {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withParameters(parameters: { [key: string]: string; }): Catalog {
        this['parameters'] = parameters;
        return this;
    }
    public withDescription(description: string): Catalog {
        this['description'] = description;
        return this;
    }
}