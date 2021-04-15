

export class UpdateVolumeOption {
    public description?: string;
    public name?: string;
    public constructor() { 
    }
    public withDescription(description: string): UpdateVolumeOption {
        this['description'] = description;
        return this;
    }
    public withName(name: string): UpdateVolumeOption {
        this['name'] = name;
        return this;
    }
}