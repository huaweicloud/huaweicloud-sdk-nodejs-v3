

export class CommonPoolsWithBorderGroupDict {
    private 'publicip_pools'?: Array<string> | undefined;
    private 'public_border_group'?: string | undefined;
    public constructor() { 
    }
    public withPublicipPools(publicipPools: Array<string>): CommonPoolsWithBorderGroupDict {
        this['publicip_pools'] = publicipPools;
        return this;
    }
    public set publicipPools(publicipPools: Array<string> | undefined) {
        this['publicip_pools'] = publicipPools;
    }
    public get publicipPools() {
        return this['publicip_pools'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): CommonPoolsWithBorderGroupDict {
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