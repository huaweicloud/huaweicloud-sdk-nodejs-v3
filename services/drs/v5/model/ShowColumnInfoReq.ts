

export class ShowColumnInfoReq {
    public refresh?: boolean;
    private 'object_ids'?: Array<string>;
    public constructor(refresh?: boolean) { 
        this['refresh'] = refresh;
    }
    public withRefresh(refresh: boolean): ShowColumnInfoReq {
        this['refresh'] = refresh;
        return this;
    }
    public withObjectIds(objectIds: Array<string>): ShowColumnInfoReq {
        this['object_ids'] = objectIds;
        return this;
    }
    public set objectIds(objectIds: Array<string>  | undefined) {
        this['object_ids'] = objectIds;
    }
    public get objectIds(): Array<string> | undefined {
        return this['object_ids'];
    }
}