

export class UpdateClusterNameReq {
    public displayName?: string;
    public constructor(displayName?: string) { 
        this['displayName'] = displayName;
    }
    public withDisplayName(displayName: string): UpdateClusterNameReq {
        this['displayName'] = displayName;
        return this;
    }
}