

export class UpdateClusterNameReq {
    private 'display_name'?: string;
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
}