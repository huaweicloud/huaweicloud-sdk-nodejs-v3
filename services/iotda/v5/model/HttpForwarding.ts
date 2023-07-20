

export class HttpForwarding {
    public url?: string;
    private 'cert_id'?: string;
    private 'cn_name'?: string;
    private 'sni_enable'?: boolean;
    private 'signature_enable'?: boolean;
    public token?: string;
    public constructor(url?: string) { 
        this['url'] = url;
    }
    public withUrl(url: string): HttpForwarding {
        this['url'] = url;
        return this;
    }
    public withCertId(certId: string): HttpForwarding {
        this['cert_id'] = certId;
        return this;
    }
    public set certId(certId: string  | undefined) {
        this['cert_id'] = certId;
    }
    public get certId(): string | undefined {
        return this['cert_id'];
    }
    public withCnName(cnName: string): HttpForwarding {
        this['cn_name'] = cnName;
        return this;
    }
    public set cnName(cnName: string  | undefined) {
        this['cn_name'] = cnName;
    }
    public get cnName(): string | undefined {
        return this['cn_name'];
    }
    public withSniEnable(sniEnable: boolean): HttpForwarding {
        this['sni_enable'] = sniEnable;
        return this;
    }
    public set sniEnable(sniEnable: boolean  | undefined) {
        this['sni_enable'] = sniEnable;
    }
    public get sniEnable(): boolean | undefined {
        return this['sni_enable'];
    }
    public withSignatureEnable(signatureEnable: boolean): HttpForwarding {
        this['signature_enable'] = signatureEnable;
        return this;
    }
    public set signatureEnable(signatureEnable: boolean  | undefined) {
        this['signature_enable'] = signatureEnable;
    }
    public get signatureEnable(): boolean | undefined {
        return this['signature_enable'];
    }
    public withToken(token: string): HttpForwarding {
        this['token'] = token;
        return this;
    }
}