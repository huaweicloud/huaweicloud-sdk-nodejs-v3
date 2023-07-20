

export class ShowLineGroupRequest {
    private 'linegroup_id'?: string;
    public constructor(linegroupId?: string) { 
        this['linegroup_id'] = linegroupId;
    }
    public withLinegroupId(linegroupId: string): ShowLineGroupRequest {
        this['linegroup_id'] = linegroupId;
        return this;
    }
    public set linegroupId(linegroupId: string  | undefined) {
        this['linegroup_id'] = linegroupId;
    }
    public get linegroupId(): string | undefined {
        return this['linegroup_id'];
    }
}