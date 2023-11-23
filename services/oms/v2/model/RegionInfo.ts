

export class RegionInfo {
    private 'cloud_type'?: string;
    public value?: string;
    public description?: string;
    public constructor() { 
    }
    public withCloudType(cloudType: string): RegionInfo {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: string  | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType(): string | undefined {
        return this['cloud_type'];
    }
    public withValue(value: string): RegionInfo {
        this['value'] = value;
        return this;
    }
    public withDescription(description: string): RegionInfo {
        this['description'] = description;
        return this;
    }
}