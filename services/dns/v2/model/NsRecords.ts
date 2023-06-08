

export class NsRecords {
    public hostname?: string;
    public address?: string;
    public priority?: number;
    public constructor() { 
    }
    public withHostname(hostname: string): NsRecords {
        this['hostname'] = hostname;
        return this;
    }
    public withAddress(address: string): NsRecords {
        this['address'] = address;
        return this;
    }
    public withPriority(priority: number): NsRecords {
        this['priority'] = priority;
        return this;
    }
}