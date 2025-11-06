

export class ResizeFlavor {
    private 'str_id'?: string;
    public cpu?: number;
    public ram?: number;
    public name?: string;
    public region?: string;
    public diskrange?: string;
    public typename?: string;
    public condOperationStatus?: string;
    public localdisk?: string;
    public edge?: boolean;
    public constructor() { 
    }
    public withStrId(strId: string): ResizeFlavor {
        this['str_id'] = strId;
        return this;
    }
    public set strId(strId: string  | undefined) {
        this['str_id'] = strId;
    }
    public get strId(): string | undefined {
        return this['str_id'];
    }
    public withCpu(cpu: number): ResizeFlavor {
        this['cpu'] = cpu;
        return this;
    }
    public withRam(ram: number): ResizeFlavor {
        this['ram'] = ram;
        return this;
    }
    public withName(name: string): ResizeFlavor {
        this['name'] = name;
        return this;
    }
    public withRegion(region: string): ResizeFlavor {
        this['region'] = region;
        return this;
    }
    public withDiskrange(diskrange: string): ResizeFlavor {
        this['diskrange'] = diskrange;
        return this;
    }
    public withTypename(typename: string): ResizeFlavor {
        this['typename'] = typename;
        return this;
    }
    public withCondOperationStatus(condOperationStatus: string): ResizeFlavor {
        this['condOperationStatus'] = condOperationStatus;
        return this;
    }
    public withLocaldisk(localdisk: string): ResizeFlavor {
        this['localdisk'] = localdisk;
        return this;
    }
    public withEdge(edge: boolean): ResizeFlavor {
        this['edge'] = edge;
        return this;
    }
}