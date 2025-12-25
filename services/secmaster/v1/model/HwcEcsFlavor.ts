

export class HwcEcsFlavor {
    public id?: string;
    public name?: string;
    public disk?: string;
    public vcpus?: string;
    public ram?: string;
    public constructor(id?: string, name?: string) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): HwcEcsFlavor {
        this['id'] = id;
        return this;
    }
    public withName(name: string): HwcEcsFlavor {
        this['name'] = name;
        return this;
    }
    public withDisk(disk: string): HwcEcsFlavor {
        this['disk'] = disk;
        return this;
    }
    public withVcpus(vcpus: string): HwcEcsFlavor {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): HwcEcsFlavor {
        this['ram'] = ram;
        return this;
    }
}