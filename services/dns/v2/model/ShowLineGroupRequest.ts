

export class ShowLineGroupRequest {
    private 'linegroup_id': string | undefined;
    public constructor(linegroupId?: any) { 
        this['linegroup_id'] = linegroupId;
    }
    public withLinegroupId(linegroupId: string): ShowLineGroupRequest {
        this['linegroup_id'] = linegroupId;
        return this;
    }
    public set linegroupId(linegroupId: string | undefined) {
        this['linegroup_id'] = linegroupId;
    }
    public get linegroupId() {
        return this['linegroup_id'];
    }
}