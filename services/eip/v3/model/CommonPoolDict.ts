

export class CommonPoolDict {
    public name?: string;
    public status?: string;
    public type?: string;
    public used?: number;
    private 'public_border_group'?: string;
    public id?: string;
    private 'allow_share_bandwidth_types'?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): CommonPoolDict {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): CommonPoolDict {
        this['status'] = status;
        return this;
    }
    public withType(type: string): CommonPoolDict {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): CommonPoolDict {
        this['used'] = used;
        return this;
    }
    public withPublicBorderGroup(publicBorderGroup: string): CommonPoolDict {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withId(id: string): CommonPoolDict {
        this['id'] = id;
        return this;
    }
    public withAllowShareBandwidthTypes(allowShareBandwidthTypes: Array<string>): CommonPoolDict {
        this['allow_share_bandwidth_types'] = allowShareBandwidthTypes;
        return this;
    }
    public set allowShareBandwidthTypes(allowShareBandwidthTypes: Array<string>  | undefined) {
        this['allow_share_bandwidth_types'] = allowShareBandwidthTypes;
    }
    public get allowShareBandwidthTypes(): Array<string> | undefined {
        return this['allow_share_bandwidth_types'];
    }
}