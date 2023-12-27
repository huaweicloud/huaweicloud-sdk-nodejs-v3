
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceSslDetailResponse extends SdkResponse {
    public enabled?: boolean;
    public ip?: string;
    public port?: string;
    private 'domain_name'?: string;
    private 'ssl_expired_at'?: string;
    private 'ssl_validated'?: boolean;
    public constructor() { 
        super();
    }
    public withEnabled(enabled: boolean): ShowInstanceSslDetailResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withIp(ip: string): ShowInstanceSslDetailResponse {
        this['ip'] = ip;
        return this;
    }
    public withPort(port: string): ShowInstanceSslDetailResponse {
        this['port'] = port;
        return this;
    }
    public withDomainName(domainName: string): ShowInstanceSslDetailResponse {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withSslExpiredAt(sslExpiredAt: string): ShowInstanceSslDetailResponse {
        this['ssl_expired_at'] = sslExpiredAt;
        return this;
    }
    public set sslExpiredAt(sslExpiredAt: string  | undefined) {
        this['ssl_expired_at'] = sslExpiredAt;
    }
    public get sslExpiredAt(): string | undefined {
        return this['ssl_expired_at'];
    }
    public withSslValidated(sslValidated: boolean): ShowInstanceSslDetailResponse {
        this['ssl_validated'] = sslValidated;
        return this;
    }
    public set sslValidated(sslValidated: boolean  | undefined) {
        this['ssl_validated'] = sslValidated;
    }
    public get sslValidated(): boolean | undefined {
        return this['ssl_validated'];
    }
}