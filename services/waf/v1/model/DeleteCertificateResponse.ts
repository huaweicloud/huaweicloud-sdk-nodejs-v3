
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteCertificateResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'expire_time'?: number;
    public timestamp?: number;
    private 'cert_type'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): DeleteCertificateResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DeleteCertificateResponse {
        this['name'] = name;
        return this;
    }
    public withExpireTime(expireTime: number): DeleteCertificateResponse {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withTimestamp(timestamp: number): DeleteCertificateResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withCertType(certType: string): DeleteCertificateResponse {
        this['cert_type'] = certType;
        return this;
    }
    public set certType(certType: string  | undefined) {
        this['cert_type'] = certType;
    }
    public get certType(): string | undefined {
        return this['cert_type'];
    }
}