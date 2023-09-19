

export class EsflavorsVersionsFlavorsResp {
    public cpu?: number;
    public ram?: number;
    public name?: string;
    public region?: string;
    public diskrange?: string;
    public availableAZ?: string;
    private 'flavor_id'?: string;
    public constructor() { 
    }
    public withCpu(cpu: number): EsflavorsVersionsFlavorsResp {
        this['cpu'] = cpu;
        return this;
    }
    public withRam(ram: number): EsflavorsVersionsFlavorsResp {
        this['ram'] = ram;
        return this;
    }
    public withName(name: string): EsflavorsVersionsFlavorsResp {
        this['name'] = name;
        return this;
    }
    public withRegion(region: string): EsflavorsVersionsFlavorsResp {
        this['region'] = region;
        return this;
    }
    public withDiskrange(diskrange: string): EsflavorsVersionsFlavorsResp {
        this['diskrange'] = diskrange;
        return this;
    }
    public withAvailableAZ(availableAZ: string): EsflavorsVersionsFlavorsResp {
        this['availableAZ'] = availableAZ;
        return this;
    }
    public withFlavorId(flavorId: string): EsflavorsVersionsFlavorsResp {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
}