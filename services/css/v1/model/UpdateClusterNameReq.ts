

export class UpdateClusterNameReq {
    private 'display_name'?: string;
    public desc?: string;
    public constructor(displayName?: string) { 
        this['display_name'] = displayName;
    }
    public withDisplayName(displayName: string): UpdateClusterNameReq {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withDesc(desc: string): UpdateClusterNameReq {
        this['desc'] = desc;
        return this;
    }
}