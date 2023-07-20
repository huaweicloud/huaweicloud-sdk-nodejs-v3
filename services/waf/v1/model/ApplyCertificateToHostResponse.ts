import { CertificateBundingHostBody } from './CertificateBundingHostBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ApplyCertificateToHostResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public timestamp?: number;
    private 'expire_time'?: number;
    private 'bind_host'?: Array<CertificateBundingHostBody>;
    public constructor() { 
        super();
    }
    public withId(id: string): ApplyCertificateToHostResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ApplyCertificateToHostResponse {
        this['name'] = name;
        return this;
    }
    public withTimestamp(timestamp: number): ApplyCertificateToHostResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withExpireTime(expireTime: number): ApplyCertificateToHostResponse {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withBindHost(bindHost: Array<CertificateBundingHostBody>): ApplyCertificateToHostResponse {
        this['bind_host'] = bindHost;
        return this;
    }
    public set bindHost(bindHost: Array<CertificateBundingHostBody>  | undefined) {
        this['bind_host'] = bindHost;
    }
    public get bindHost(): Array<CertificateBundingHostBody> | undefined {
        return this['bind_host'];
    }
}