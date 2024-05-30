

export class FlavorDTO {
    public id?: string;
    public name?: string;
    public disk?: number;
    public cpu?: number;
    public mem?: number;
    public constructor() { 
    }
    public withId(id: string): FlavorDTO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): FlavorDTO {
        this['name'] = name;
        return this;
    }
    public withDisk(disk: number): FlavorDTO {
        this['disk'] = disk;
        return this;
    }
    public withCpu(cpu: number): FlavorDTO {
        this['cpu'] = cpu;
        return this;
    }
    public withMem(mem: number): FlavorDTO {
        this['mem'] = mem;
        return this;
    }
}