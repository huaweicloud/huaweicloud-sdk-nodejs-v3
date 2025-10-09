

export class PersistentVolumeClaimMetadata {
    public name?: string;
    public labels?: { [key: string]: string; };
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): PersistentVolumeClaimMetadata {
        this['name'] = name;
        return this;
    }
    public withLabels(labels: { [key: string]: string; }): PersistentVolumeClaimMetadata {
        this['labels'] = labels;
        return this;
    }
}