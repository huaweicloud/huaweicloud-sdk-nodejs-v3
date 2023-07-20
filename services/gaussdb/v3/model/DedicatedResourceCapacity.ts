

export class DedicatedResourceCapacity {
    public ram?: number;
    public volume?: number;
    public vcpus?: number;
    public constructor() { 
    }
    public withRam(ram: number): DedicatedResourceCapacity {
        this['ram'] = ram;
        return this;
    }
    public withVolume(volume: number): DedicatedResourceCapacity {
        this['volume'] = volume;
        return this;
    }
    public withVcpus(vcpus: number): DedicatedResourceCapacity {
        this['vcpus'] = vcpus;
        return this;
    }
}