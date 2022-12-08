

export class BatchDeletePublicIpRequestBody {
    private 'publicip_ids': Array<string> | undefined;
    public constructor(publicipIds?: any) { 
        this['publicip_ids'] = publicipIds;
    }
    public withPublicipIds(publicipIds: Array<string>): BatchDeletePublicIpRequestBody {
        this['publicip_ids'] = publicipIds;
        return this;
    }
    public set publicipIds(publicipIds: Array<string> | undefined) {
        this['publicip_ids'] = publicipIds;
    }
    public get publicipIds() {
        return this['publicip_ids'];
    }
}