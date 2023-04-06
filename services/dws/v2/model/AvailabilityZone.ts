

export class AvailabilityZone {
    public code: string;
    public name: string;
    public status: string;
    private 'public_border_group': string | undefined;
    public constructor(code?: any, name?: any, status?: any, publicBorderGroup?: any) { 
        this['code'] = code;
        this['name'] = name;
        this['status'] = status;
        this['public_border_group'] = publicBorderGroup;
    }
    public withCode(code: string): AvailabilityZone {
        this['code'] = code;
        return this;
    }
    public withName(name: string): AvailabilityZone {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): AvailabilityZone {
        this['status'] = status;
        return this;
    }
    public withPublicBorderGroup(publicBorderGroup: string): AvailabilityZone {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup() {
        return this['public_border_group'];
    }
}