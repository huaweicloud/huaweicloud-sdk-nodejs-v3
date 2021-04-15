

export class DeletePublicipTagRequest {
    private 'publicip_id': string | undefined;
    public key: string;
    public constructor(publicipId?: any, key?: any) { 
        this['publicip_id'] = publicipId;
        this['key'] = key;
    }
    public withPublicipId(publicipId: string): DeletePublicipTagRequest {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId() {
        return this['publicip_id'];
    }
    public withKey(key: string): DeletePublicipTagRequest {
        this['key'] = key;
        return this;
    }
}