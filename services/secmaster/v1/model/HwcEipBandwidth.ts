

export class HwcEipBandwidth {
    public id?: string;
    public size?: number;
    private 'share_type'?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): HwcEipBandwidth {
        this['id'] = id;
        return this;
    }
    public withSize(size: number): HwcEipBandwidth {
        this['size'] = size;
        return this;
    }
    public withShareType(shareType: string): HwcEipBandwidth {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: string  | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType(): string | undefined {
        return this['share_type'];
    }
    public withName(name: string): HwcEipBandwidth {
        this['name'] = name;
        return this;
    }
}