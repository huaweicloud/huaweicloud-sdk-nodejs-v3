

export class ShowPublicipPoolRequest {
    private 'publicip_pool_id': string | undefined;
    public fields?: string;
    public constructor(publicipPoolId?: any) { 
        this['publicip_pool_id'] = publicipPoolId;
    }
    public withPublicipPoolId(publicipPoolId: string): ShowPublicipPoolRequest {
        this['publicip_pool_id'] = publicipPoolId;
        return this;
    }
    public set publicipPoolId(publicipPoolId: string | undefined) {
        this['publicip_pool_id'] = publicipPoolId;
    }
    public get publicipPoolId() {
        return this['publicip_pool_id'];
    }
    public withFields(fields: string): ShowPublicipPoolRequest {
        this['fields'] = fields;
        return this;
    }
}