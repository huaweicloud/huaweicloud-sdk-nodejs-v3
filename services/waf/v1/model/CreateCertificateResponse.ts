import { BindHost } from './BindHost';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCertificateResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public content?: string;
    public key?: string;
    private 'expire_time'?: number;
    private 'exp_status'?: number;
    public timestamp?: number;
    private 'bind_host'?: Array<BindHost>;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateCertificateResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateCertificateResponse {
        this['name'] = name;
        return this;
    }
    public withContent(content: string): CreateCertificateResponse {
        this['content'] = content;
        return this;
    }
    public withKey(key: string): CreateCertificateResponse {
        this['key'] = key;
        return this;
    }
    public withExpireTime(expireTime: number): CreateCertificateResponse {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withExpStatus(expStatus: number): CreateCertificateResponse {
        this['exp_status'] = expStatus;
        return this;
    }
    public set expStatus(expStatus: number  | undefined) {
        this['exp_status'] = expStatus;
    }
    public get expStatus(): number | undefined {
        return this['exp_status'];
    }
    public withTimestamp(timestamp: number): CreateCertificateResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withBindHost(bindHost: Array<BindHost>): CreateCertificateResponse {
        this['bind_host'] = bindHost;
        return this;
    }
    public set bindHost(bindHost: Array<BindHost>  | undefined) {
        this['bind_host'] = bindHost;
    }
    public get bindHost(): Array<BindHost> | undefined {
        return this['bind_host'];
    }
}