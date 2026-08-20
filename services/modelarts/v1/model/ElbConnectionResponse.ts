import { ResidualResources } from './ResidualResources';


export class ElbConnectionResponse {
    private 'elb_id'?: string;
    private 'listener_id'?: string;
    private 'm_tls'?: boolean;
    private 'ca_cert_id'?: string;
    private 'server_cert_id'?: string;
    private 'sni_cert_ids'?: Array<string>;
    public status?: string;
    public message?: string;
    private 'residual_resources'?: ResidualResources;
    public constructor(elbId?: string) { 
        this['elb_id'] = elbId;
    }
    public withElbId(elbId: string): ElbConnectionResponse {
        this['elb_id'] = elbId;
        return this;
    }
    public set elbId(elbId: string  | undefined) {
        this['elb_id'] = elbId;
    }
    public get elbId(): string | undefined {
        return this['elb_id'];
    }
    public withListenerId(listenerId: string): ElbConnectionResponse {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
    public withMTls(mTls: boolean): ElbConnectionResponse {
        this['m_tls'] = mTls;
        return this;
    }
    public set mTls(mTls: boolean  | undefined) {
        this['m_tls'] = mTls;
    }
    public get mTls(): boolean | undefined {
        return this['m_tls'];
    }
    public withCaCertId(caCertId: string): ElbConnectionResponse {
        this['ca_cert_id'] = caCertId;
        return this;
    }
    public set caCertId(caCertId: string  | undefined) {
        this['ca_cert_id'] = caCertId;
    }
    public get caCertId(): string | undefined {
        return this['ca_cert_id'];
    }
    public withServerCertId(serverCertId: string): ElbConnectionResponse {
        this['server_cert_id'] = serverCertId;
        return this;
    }
    public set serverCertId(serverCertId: string  | undefined) {
        this['server_cert_id'] = serverCertId;
    }
    public get serverCertId(): string | undefined {
        return this['server_cert_id'];
    }
    public withSniCertIds(sniCertIds: Array<string>): ElbConnectionResponse {
        this['sni_cert_ids'] = sniCertIds;
        return this;
    }
    public set sniCertIds(sniCertIds: Array<string>  | undefined) {
        this['sni_cert_ids'] = sniCertIds;
    }
    public get sniCertIds(): Array<string> | undefined {
        return this['sni_cert_ids'];
    }
    public withStatus(status: string): ElbConnectionResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ElbConnectionResponse {
        this['message'] = message;
        return this;
    }
    public withResidualResources(residualResources: ResidualResources): ElbConnectionResponse {
        this['residual_resources'] = residualResources;
        return this;
    }
    public set residualResources(residualResources: ResidualResources  | undefined) {
        this['residual_resources'] = residualResources;
    }
    public get residualResources(): ResidualResources | undefined {
        return this['residual_resources'];
    }
}