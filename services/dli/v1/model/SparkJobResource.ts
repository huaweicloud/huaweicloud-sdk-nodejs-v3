

export class SparkJobResource {
    public name?: string;
    public type?: string;
    public constructor() { 
    }
    public withName(name: string): SparkJobResource {
        this['name'] = name;
        return this;
    }
    public withType(type: string): SparkJobResource {
        this['type'] = type;
        return this;
    }
}