

export class BatchCreateBandwidthOption {
    public count?: number;
    public name?: string;
    public size?: number;
    private 'public_border_group'?: string;
    public constructor(count?: number, name?: string, size?: number) { 
        this['count'] = count;
        this['name'] = name;
        this['size'] = size;
    }
    public withCount(count: number): BatchCreateBandwidthOption {
        this['count'] = count;
        return this;
    }
    public withName(name: string): BatchCreateBandwidthOption {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): BatchCreateBandwidthOption {
        this['size'] = size;
        return this;
    }
    public withPublicBorderGroup(publicBorderGroup: string): BatchCreateBandwidthOption {
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