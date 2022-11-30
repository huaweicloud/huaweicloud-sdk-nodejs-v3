

export class ServerFlavor {
    public id: string;
    public name: string;
    public disk: string;
    public vcpus: string;
    public ram: string;
    public constructor(id?: any, name?: any, disk?: any, vcpus?: any, ram?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['disk'] = disk;
        this['vcpus'] = vcpus;
        this['ram'] = ram;
    }
    public withId(id: string): ServerFlavor {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ServerFlavor {
        this['name'] = name;
        return this;
    }
    public withDisk(disk: string): ServerFlavor {
        this['disk'] = disk;
        return this;
    }
    public withVcpus(vcpus: string): ServerFlavor {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): ServerFlavor {
        this['ram'] = ram;
        return this;
    }
}