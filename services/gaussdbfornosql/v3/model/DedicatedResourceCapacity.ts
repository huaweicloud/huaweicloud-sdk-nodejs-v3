

export class DedicatedResourceCapacity {
    public vcpus?: number;
    public ram?: number;
    public volume?: number;
    public constructor(vcpus?: number, ram?: number, volume?: number) { 
        this['vcpus'] = vcpus;
        this['ram'] = ram;
        this['volume'] = volume;
    }
    public withVcpus(vcpus: number): DedicatedResourceCapacity {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: number): DedicatedResourceCapacity {
        this['ram'] = ram;
        return this;
    }
    public withVolume(volume: number): DedicatedResourceCapacity {
        this['volume'] = volume;
        return this;
    }
}