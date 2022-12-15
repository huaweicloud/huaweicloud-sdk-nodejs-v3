

export class ChangeToPeriodReq {
    private 'publicip_ids': Array<string> | undefined;
    public extendParam: object;
    public constructor(publicipIds?: any, extendParam?: any) { 
        this['publicip_ids'] = publicipIds;
        this['extendParam'] = extendParam;
    }
    public withPublicipIds(publicipIds: Array<string>): ChangeToPeriodReq {
        this['publicip_ids'] = publicipIds;
        return this;
    }
    public set publicipIds(publicipIds: Array<string> | undefined) {
        this['publicip_ids'] = publicipIds;
    }
    public get publicipIds() {
        return this['publicip_ids'];
    }
    public withExtendParam(extendParam: object): ChangeToPeriodReq {
        this['extendParam'] = extendParam;
        return this;
    }
}