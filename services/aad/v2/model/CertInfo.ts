

export class CertInfo {
    private 'cert_name'?: string;
    public id?: string;
    private 'apply_domain'?: string;
    private 'expire_time'?: number;
    private 'expire_status'?: number;
    public constructor(certName?: string, id?: string, applyDomain?: string, expireTime?: number, expireStatus?: number) { 
        this['cert_name'] = certName;
        this['id'] = id;
        this['apply_domain'] = applyDomain;
        this['expire_time'] = expireTime;
        this['expire_status'] = expireStatus;
    }
    public withCertName(certName: string): CertInfo {
        this['cert_name'] = certName;
        return this;
    }
    public set certName(certName: string  | undefined) {
        this['cert_name'] = certName;
    }
    public get certName(): string | undefined {
        return this['cert_name'];
    }
    public withId(id: string): CertInfo {
        this['id'] = id;
        return this;
    }
    public withApplyDomain(applyDomain: string): CertInfo {
        this['apply_domain'] = applyDomain;
        return this;
    }
    public set applyDomain(applyDomain: string  | undefined) {
        this['apply_domain'] = applyDomain;
    }
    public get applyDomain(): string | undefined {
        return this['apply_domain'];
    }
    public withExpireTime(expireTime: number): CertInfo {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withExpireStatus(expireStatus: number): CertInfo {
        this['expire_status'] = expireStatus;
        return this;
    }
    public set expireStatus(expireStatus: number  | undefined) {
        this['expire_status'] = expireStatus;
    }
    public get expireStatus(): number | undefined {
        return this['expire_status'];
    }
}