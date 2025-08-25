

export class ResourceDistribution {
    public kms?: number;
    public constructor(kms?: number) { 
        this['kms'] = kms;
    }
    public withKms(kms: number): ResourceDistribution {
        this['kms'] = kms;
        return this;
    }
}