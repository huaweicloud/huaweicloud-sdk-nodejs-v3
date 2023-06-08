

export class Nameserver {
    public hostname?: string;
    public priority?: number;
    public constructor() { 
    }
    public withHostname(hostname: string): Nameserver {
        this['hostname'] = hostname;
        return this;
    }
    public withPriority(priority: number): Nameserver {
        this['priority'] = priority;
        return this;
    }
}