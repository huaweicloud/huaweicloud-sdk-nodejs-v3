

export class RemoveExtendCidrOption {
    private 'extend_cidrs': Array<string> | undefined;
    public constructor(extendCidrs?: any) { 
        this['extend_cidrs'] = extendCidrs;
    }
    public withExtendCidrs(extendCidrs: Array<string>): RemoveExtendCidrOption {
        this['extend_cidrs'] = extendCidrs;
        return this;
    }
    public set extendCidrs(extendCidrs: Array<string> | undefined) {
        this['extend_cidrs'] = extendCidrs;
    }
    public get extendCidrs() {
        return this['extend_cidrs'];
    }
}