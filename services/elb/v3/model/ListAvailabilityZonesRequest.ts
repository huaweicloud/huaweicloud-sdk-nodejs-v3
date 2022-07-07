

export class ListAvailabilityZonesRequest {
    private 'public_border_group'?: string | undefined;
    public constructor() { 
    }
    public withPublicBorderGroup(publicBorderGroup: string): ListAvailabilityZonesRequest {
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