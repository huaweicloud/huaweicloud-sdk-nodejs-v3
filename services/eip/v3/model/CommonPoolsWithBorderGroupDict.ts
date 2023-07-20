

export class CommonPoolsWithBorderGroupDict {
    private 'publicip_pools'?: Array<string>;
    private 'public_border_group'?: string;
    public constructor() { 
    }
    public withPublicipPools(publicipPools: Array<string>): CommonPoolsWithBorderGroupDict {
        this['publicip_pools'] = publicipPools;
        return this;
    }
    public set publicipPools(publicipPools: Array<string>  | undefined) {
        this['publicip_pools'] = publicipPools;
    }
    public get publicipPools(): Array<string> | undefined {
        return this['publicip_pools'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): CommonPoolsWithBorderGroupDict {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
}