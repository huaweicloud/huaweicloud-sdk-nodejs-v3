

export class PersistentVolumeClaimMetadata {
    public name: string;
    public labels?: string;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): PersistentVolumeClaimMetadata {
        this['name'] = name;
        return this;
    }
    public withLabels(labels: string): PersistentVolumeClaimMetadata {
        this['labels'] = labels;
        return this;
    }
}