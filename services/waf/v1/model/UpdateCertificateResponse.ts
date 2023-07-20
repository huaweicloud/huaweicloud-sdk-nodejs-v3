
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateCertificateResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'expire_time'?: number;
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateCertificateResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateCertificateResponse {
        this['name'] = name;
        return this;
    }
    public withExpireTime(expireTime: number): UpdateCertificateResponse {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withTimestamp(timestamp: number): UpdateCertificateResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}