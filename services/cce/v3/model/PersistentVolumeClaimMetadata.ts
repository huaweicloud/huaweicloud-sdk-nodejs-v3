

export class PersistentVolumeClaimMetadata {
    public labels?: string;
    public name: string;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withLabels(labels: string): PersistentVolumeClaimMetadata {
        this['labels'] = labels;
        return this;
    }
    public withName(name: string): PersistentVolumeClaimMetadata {
        this['name'] = name;
        return this;
    }
}