

export class InsertPublicipInfo {
    private 'publicip_type'?: string;
    private 'publicip_id'?: string;
    public constructor(publicipId?: string) { 
        this['publicip_id'] = publicipId;
    }
    public withPublicipType(publicipType: string): InsertPublicipInfo {
        this['publicip_type'] = publicipType;
        return this;
    }
    public set publicipType(publicipType: string  | undefined) {
        this['publicip_type'] = publicipType;
    }
    public get publicipType(): string | undefined {
        return this['publicip_type'];
    }
    public withPublicipId(publicipId: string): InsertPublicipInfo {
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