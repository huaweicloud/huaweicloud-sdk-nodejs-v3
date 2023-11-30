

export class ConfigurationMetadata {
    public name?: string;
    public labels?: { [key: string]: string; };
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ConfigurationMetadata {
        this['name'] = name;
        return this;
    }
    public withLabels(labels: { [key: string]: string; }): ConfigurationMetadata {
        this['labels'] = labels;
        return this;
    }
}