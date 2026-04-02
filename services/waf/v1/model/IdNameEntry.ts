

export class IdNameEntry {
    public id?: string;
    public name?: string;
    private 'service_ip'?: string;
    public constructor() { 
    }
    public withId(id: string): IdNameEntry {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IdNameEntry {
        this['name'] = name;
        return this;
    }
    public withServiceIp(serviceIp: string): IdNameEntry {
        this['service_ip'] = serviceIp;
        return this;
    }
    public set serviceIp(serviceIp: string  | undefined) {
        this['service_ip'] = serviceIp;
    }
    public get serviceIp(): string | undefined {
        return this['service_ip'];
    }
}