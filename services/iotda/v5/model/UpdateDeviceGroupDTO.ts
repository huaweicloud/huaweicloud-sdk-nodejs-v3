

export class UpdateDeviceGroupDTO {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateDeviceGroupDTO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateDeviceGroupDTO {
        this['description'] = description;
        return this;
    }
}