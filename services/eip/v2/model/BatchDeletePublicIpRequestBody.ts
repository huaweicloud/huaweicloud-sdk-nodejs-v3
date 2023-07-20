

export class BatchDeletePublicIpRequestBody {
    private 'publicip_ids'?: Array<string>;
    public constructor(publicipIds?: Array<string>) { 
        this['publicip_ids'] = publicipIds;
    }
    public withPublicipIds(publicipIds: Array<string>): BatchDeletePublicIpRequestBody {
        this['publicip_ids'] = publicipIds;
        return this;
    }
    public set publicipIds(publicipIds: Array<string>  | undefined) {
        this['publicip_ids'] = publicipIds;
    }
    public get publicipIds(): Array<string> | undefined {
        return this['publicip_ids'];
    }
}