

export class FlavorInfos {
    public id?: string;
    public name?: string;
    public disk?: string;
    public vcpus?: string;
    public ram?: string;
    public constructor() { 
    }
    public withId(id: string): FlavorInfos {
        this['id'] = id;
        return this;
    }
    public withName(name: string): FlavorInfos {
        this['name'] = name;
        return this;
    }
    public withDisk(disk: string): FlavorInfos {
        this['disk'] = disk;
        return this;
    }
    public withVcpus(vcpus: string): FlavorInfos {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): FlavorInfos {
        this['ram'] = ram;
        return this;
    }
}