

export class ShowMrsFlavorsRequest {
    private 'version_name'?: string;
    private 'availability_zone'?: string;
    public constructor(versionName?: string) { 
        this['version_name'] = versionName;
    }
    public withVersionName(versionName: string): ShowMrsFlavorsRequest {
        this['version_name'] = versionName;
        return this;
    }
    public set versionName(versionName: string  | undefined) {
        this['version_name'] = versionName;
    }
    public get versionName(): string | undefined {
        return this['version_name'];
    }
    public withAvailabilityZone(availabilityZone: string): ShowMrsFlavorsRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
}