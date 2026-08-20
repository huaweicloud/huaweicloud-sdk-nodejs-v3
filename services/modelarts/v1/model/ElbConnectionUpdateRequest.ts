

export class ElbConnectionUpdateRequest {
    private 'elb_id'?: string;
    private 'm_tls'?: boolean;
    private 'ca_cert_id'?: string;
    private 'server_cert_id'?: string;
    private 'sni_cert_ids'?: Array<string>;
    public action?: string;
    public constructor(elbId?: string) { 
        this['elb_id'] = elbId;
    }
    public withElbId(elbId: string): ElbConnectionUpdateRequest {
        this['elb_id'] = elbId;
        return this;
    }
    public set elbId(elbId: string  | undefined) {
        this['elb_id'] = elbId;
    }
    public get elbId(): string | undefined {
        return this['elb_id'];
    }
    public withMTls(mTls: boolean): ElbConnectionUpdateRequest {
        this['m_tls'] = mTls;
        return this;
    }
    public set mTls(mTls: boolean  | undefined) {
        this['m_tls'] = mTls;
    }
    public get mTls(): boolean | undefined {
        return this['m_tls'];
    }
    public withCaCertId(caCertId: string): ElbConnectionUpdateRequest {
        this['ca_cert_id'] = caCertId;
        return this;
    }
    public set caCertId(caCertId: string  | undefined) {
        this['ca_cert_id'] = caCertId;
    }
    public get caCertId(): string | undefined {
        return this['ca_cert_id'];
    }
    public withServerCertId(serverCertId: string): ElbConnectionUpdateRequest {
        this['server_cert_id'] = serverCertId;
        return this;
    }
    public set serverCertId(serverCertId: string  | undefined) {
        this['server_cert_id'] = serverCertId;
    }
    public get serverCertId(): string | undefined {
        return this['server_cert_id'];
    }
    public withSniCertIds(sniCertIds: Array<string>): ElbConnectionUpdateRequest {
        this['sni_cert_ids'] = sniCertIds;
        return this;
    }
    public set sniCertIds(sniCertIds: Array<string>  | undefined) {
        this['sni_cert_ids'] = sniCertIds;
    }
    public get sniCertIds(): Array<string> | undefined {
        return this['sni_cert_ids'];
    }
    public withAction(action: string): ElbConnectionUpdateRequest {
        this['action'] = action;
        return this;
    }
}