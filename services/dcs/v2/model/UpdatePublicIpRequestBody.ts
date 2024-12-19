

export class UpdatePublicIpRequestBody {
    private 'publicip_id'?: string;
    private 'enable_ssl'?: boolean;
    private 'elb_id'?: string;
    public constructor() { 
    }
    public withPublicipId(publicipId: string): UpdatePublicIpRequestBody {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withEnableSsl(enableSsl: boolean): UpdatePublicIpRequestBody {
        this['enable_ssl'] = enableSsl;
        return this;
    }
    public set enableSsl(enableSsl: boolean  | undefined) {
        this['enable_ssl'] = enableSsl;
    }
    public get enableSsl(): boolean | undefined {
        return this['enable_ssl'];
    }
    public withElbId(elbId: string): UpdatePublicIpRequestBody {
        this['elb_id'] = elbId;
        return this;
    }
    public set elbId(elbId: string  | undefined) {
        this['elb_id'] = elbId;
    }
    public get elbId(): string | undefined {
        return this['elb_id'];
    }
}