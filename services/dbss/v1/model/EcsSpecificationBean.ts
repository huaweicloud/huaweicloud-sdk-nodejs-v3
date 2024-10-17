

export class EcsSpecificationBean {
    public azs?: Array<string>;
    public id?: string;
    public level?: string;
    public name?: string;
    public proxy?: number;
    public ram?: number;
    public vcpus?: number;
    private 'az_type'?: string;
    public constructor(azs?: Array<string>, id?: string, level?: string, name?: string, proxy?: number, ram?: number, vcpus?: number) { 
        this['azs'] = azs;
        this['id'] = id;
        this['level'] = level;
        this['name'] = name;
        this['proxy'] = proxy;
        this['ram'] = ram;
        this['vcpus'] = vcpus;
    }
    public withAzs(azs: Array<string>): EcsSpecificationBean {
        this['azs'] = azs;
        return this;
    }
    public withId(id: string): EcsSpecificationBean {
        this['id'] = id;
        return this;
    }
    public withLevel(level: string): EcsSpecificationBean {
        this['level'] = level;
        return this;
    }
    public withName(name: string): EcsSpecificationBean {
        this['name'] = name;
        return this;
    }
    public withProxy(proxy: number): EcsSpecificationBean {
        this['proxy'] = proxy;
        return this;
    }
    public withRam(ram: number): EcsSpecificationBean {
        this['ram'] = ram;
        return this;
    }
    public withVcpus(vcpus: number): EcsSpecificationBean {
        this['vcpus'] = vcpus;
        return this;
    }
    public withAzType(azType: string): EcsSpecificationBean {
        this['az_type'] = azType;
        return this;
    }
    public set azType(azType: string  | undefined) {
        this['az_type'] = azType;
    }
    public get azType(): string | undefined {
        return this['az_type'];
    }
}