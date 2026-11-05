

export class SwitchSupabaseApplicationSslRequestBody {
    private 'enable_ssl'?: boolean;
    private 'cert_id'?: string;
    public constructor(enableSsl?: boolean) { 
        this['enable_ssl'] = enableSsl;
    }
    public withEnableSsl(enableSsl: boolean): SwitchSupabaseApplicationSslRequestBody {
        this['enable_ssl'] = enableSsl;
        return this;
    }
    public set enableSsl(enableSsl: boolean  | undefined) {
        this['enable_ssl'] = enableSsl;
    }
    public get enableSsl(): boolean | undefined {
        return this['enable_ssl'];
    }
    public withCertId(certId: string): SwitchSupabaseApplicationSslRequestBody {
        this['cert_id'] = certId;
        return this;
    }
    public set certId(certId: string  | undefined) {
        this['cert_id'] = certId;
    }
    public get certId(): string | undefined {
        return this['cert_id'];
    }
}