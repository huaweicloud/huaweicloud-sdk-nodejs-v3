

export class CdmClusterFlavor {
    public cpu?: number;
    public ram?: number;
    public name?: string;
    public region?: string;
    public typename?: string;
    public clusterMode?: string;
    public status?: string;
    private 'str_id'?: string;
    public constructor() { 
    }
    public withCpu(cpu: number): CdmClusterFlavor {
        this['cpu'] = cpu;
        return this;
    }
    public withRam(ram: number): CdmClusterFlavor {
        this['ram'] = ram;
        return this;
    }
    public withName(name: string): CdmClusterFlavor {
        this['name'] = name;
        return this;
    }
    public withRegion(region: string): CdmClusterFlavor {
        this['region'] = region;
        return this;
    }
    public withTypename(typename: string): CdmClusterFlavor {
        this['typename'] = typename;
        return this;
    }
    public withClusterMode(clusterMode: string): CdmClusterFlavor {
        this['clusterMode'] = clusterMode;
        return this;
    }
    public withStatus(status: string): CdmClusterFlavor {
        this['status'] = status;
        return this;
    }
    public withStrId(strId: string): CdmClusterFlavor {
        this['str_id'] = strId;
        return this;
    }
    public set strId(strId: string  | undefined) {
        this['str_id'] = strId;
    }
    public get strId(): string | undefined {
        return this['str_id'];
    }
}