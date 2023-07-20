

export class ShowPublicipRequest {
    private 'publicip_id'?: string;
    public fields?: Array<string>;
    public constructor(publicipId?: string) { 
        this['publicip_id'] = publicipId;
    }
    public withPublicipId(publicipId: string): ShowPublicipRequest {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withFields(fields: Array<string>): ShowPublicipRequest {
        this['fields'] = fields;
        return this;
    }
}