

export class UnbindDevServerPublicIPRequest {
    public id?: string;
    private 'publicip_id'?: string;
    public constructor(id?: string, publicipId?: string) { 
        this['id'] = id;
        this['publicip_id'] = publicipId;
    }
    public withId(id: string): UnbindDevServerPublicIPRequest {
        this['id'] = id;
        return this;
    }
    public withPublicipId(publicipId: string): UnbindDevServerPublicIPRequest {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
}