
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHttpsConfigResponse extends SdkResponse {
    public source?: string;
    private 'cert_name'?: string;
    private 'cert_id'?: string;
    private 'https_status'?: number;
    public certificate?: string;
    private 'force_redirect_https'?: number;
    public http2?: number;
    public constructor() { 
        super();
    }
    public withSource(source: string): ShowHttpsConfigResponse {
        this['source'] = source;
        return this;
    }
    public withCertName(certName: string): ShowHttpsConfigResponse {
        this['cert_name'] = certName;
        return this;
    }
    public set certName(certName: string  | undefined) {
        this['cert_name'] = certName;
    }
    public get certName(): string | undefined {
        return this['cert_name'];
    }
    public withCertId(certId: string): ShowHttpsConfigResponse {
        this['cert_id'] = certId;
        return this;
    }
    public set certId(certId: string  | undefined) {
        this['cert_id'] = certId;
    }
    public get certId(): string | undefined {
        return this['cert_id'];
    }
    public withHttpsStatus(httpsStatus: number): ShowHttpsConfigResponse {
        this['https_status'] = httpsStatus;
        return this;
    }
    public set httpsStatus(httpsStatus: number  | undefined) {
        this['https_status'] = httpsStatus;
    }
    public get httpsStatus(): number | undefined {
        return this['https_status'];
    }
    public withCertificate(certificate: string): ShowHttpsConfigResponse {
        this['certificate'] = certificate;
        return this;
    }
    public withForceRedirectHttps(forceRedirectHttps: number): ShowHttpsConfigResponse {
        this['force_redirect_https'] = forceRedirectHttps;
        return this;
    }
    public set forceRedirectHttps(forceRedirectHttps: number  | undefined) {
        this['force_redirect_https'] = forceRedirectHttps;
    }
    public get forceRedirectHttps(): number | undefined {
        return this['force_redirect_https'];
    }
    public withHttp2(http2: number): ShowHttpsConfigResponse {
        this['http2'] = http2;
        return this;
    }
}