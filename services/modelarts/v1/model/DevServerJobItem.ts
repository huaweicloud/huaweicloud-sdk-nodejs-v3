

export class DevServerJobItem {
    public type?: string;
    public spec?: { [key: string]: string; };
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): DevServerJobItem {
        this['type'] = type;
        return this;
    }
    public withSpec(spec: { [key: string]: string; }): DevServerJobItem {
        this['spec'] = spec;
        return this;
    }
}