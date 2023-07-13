

export class AvailabilityZone {
    public code: string;
    public state: string;
    public protocol: Array<string>;
    private 'public_border_group': string | undefined;
    public category: number;
    public constructor(code?: any, state?: any, protocol?: any, publicBorderGroup?: any, category?: any) { 
        this['code'] = code;
        this['state'] = state;
        this['protocol'] = protocol;
        this['public_border_group'] = publicBorderGroup;
        this['category'] = category;
    }
    public withCode(code: string): AvailabilityZone {
        this['code'] = code;
        return this;
    }
    public withState(state: string): AvailabilityZone {
        this['state'] = state;
        return this;
    }
    public withProtocol(protocol: Array<string>): AvailabilityZone {
        this['protocol'] = protocol;
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
    public withCategory(category: number): AvailabilityZone {
        this['category'] = category;
        return this;
    }
}