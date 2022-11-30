

export class ResourceRequirements {
    public limits?: { [key: string]: string; };
    public requests?: { [key: string]: string; };
    public constructor() { 
    }
    public withLimits(limits: { [key: string]: string; }): ResourceRequirements {
        this['limits'] = limits;
        return this;
    }
    public withRequests(requests: { [key: string]: string; }): ResourceRequirements {
        this['requests'] = requests;
        return this;
    }
}