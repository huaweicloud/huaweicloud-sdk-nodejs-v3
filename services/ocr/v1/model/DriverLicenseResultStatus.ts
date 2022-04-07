

export class DriverLicenseResultStatus {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): DriverLicenseResultStatus {
        this['name'] = name;
        return this;
    }
}