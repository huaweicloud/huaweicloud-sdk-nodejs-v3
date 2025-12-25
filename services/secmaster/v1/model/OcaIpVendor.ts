

export class OcaIpVendor {
    public name?: string;
    private 'is_xc'?: boolean;
    public constructor() { 
    }
    public withName(name: string): OcaIpVendor {
        this['name'] = name;
        return this;
    }
    public withIsXc(isXc: boolean): OcaIpVendor {
        this['is_xc'] = isXc;
        return this;
    }
    public set isXc(isXc: boolean  | undefined) {
        this['is_xc'] = isXc;
    }
    public get isXc(): boolean | undefined {
        return this['is_xc'];
    }
}