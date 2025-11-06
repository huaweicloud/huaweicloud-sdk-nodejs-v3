

export class Flavor {
    public cpu?: number;
    public ram?: number;
    public name?: string;
    public region?: string;
    public typename?: string;
    public diskrange?: string;
    public condOperationStatus?: string;
    public condOperationAz?: string;
    public localdisk?: string;
    public flavorTypeCn?: string;
    public flavorTypeEn?: string;
    public edge?: boolean;
    private 'str_id'?: string;
    public isAllowHttps?: boolean;
    public constructor() { 
    }
    public withCpu(cpu: number): Flavor {
        this['cpu'] = cpu;
        return this;
    }
    public withRam(ram: number): Flavor {
        this['ram'] = ram;
        return this;
    }
    public withName(name: string): Flavor {
        this['name'] = name;
        return this;
    }
    public withRegion(region: string): Flavor {
        this['region'] = region;
        return this;
    }
    public withTypename(typename: string): Flavor {
        this['typename'] = typename;
        return this;
    }
    public withDiskrange(diskrange: string): Flavor {
        this['diskrange'] = diskrange;
        return this;
    }
    public withCondOperationStatus(condOperationStatus: string): Flavor {
        this['condOperationStatus'] = condOperationStatus;
        return this;
    }
    public withCondOperationAz(condOperationAz: string): Flavor {
        this['condOperationAz'] = condOperationAz;
        return this;
    }
    public withLocaldisk(localdisk: string): Flavor {
        this['localdisk'] = localdisk;
        return this;
    }
    public withFlavorTypeCn(flavorTypeCn: string): Flavor {
        this['flavorTypeCn'] = flavorTypeCn;
        return this;
    }
    public withFlavorTypeEn(flavorTypeEn: string): Flavor {
        this['flavorTypeEn'] = flavorTypeEn;
        return this;
    }
    public withEdge(edge: boolean): Flavor {
        this['edge'] = edge;
        return this;
    }
    public withStrId(strId: string): Flavor {
        this['str_id'] = strId;
        return this;
    }
    public set strId(strId: string  | undefined) {
        this['str_id'] = strId;
    }
    public get strId(): string | undefined {
        return this['str_id'];
    }
    public withIsAllowHttps(isAllowHttps: boolean): Flavor {
        this['isAllowHttps'] = isAllowHttps;
        return this;
    }
}