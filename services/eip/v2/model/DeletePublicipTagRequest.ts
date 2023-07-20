

export class DeletePublicipTagRequest {
    private 'publicip_id'?: string;
    public key?: string;
    public constructor(publicipId?: string, key?: string) { 
        this['publicip_id'] = publicipId;
        this['key'] = key;
    }
    public withPublicipId(publicipId: string): DeletePublicipTagRequest {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withKey(key: string): DeletePublicipTagRequest {
        this['key'] = key;
        return this;
    }
}