import { BindHost } from './BindHost';


export class CertificateBody {
    public id?: string;
    public name?: string;
    private 'expire_time'?: number;
    private 'exp_status'?: number;
    public timestamp?: number;
    private 'bind_host'?: Array<BindHost>;
    public constructor(id?: string, name?: string, timestamp?: number) { 
        this['id'] = id;
        this['name'] = name;
        this['timestamp'] = timestamp;
    }
    public withId(id: string): CertificateBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CertificateBody {
        this['name'] = name;
        return this;
    }
    public withExpireTime(expireTime: number): CertificateBody {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withExpStatus(expStatus: number): CertificateBody {
        this['exp_status'] = expStatus;
        return this;
    }
    public set expStatus(expStatus: number  | undefined) {
        this['exp_status'] = expStatus;
    }
    public get expStatus(): number | undefined {
        return this['exp_status'];
    }
    public withTimestamp(timestamp: number): CertificateBody {
        this['timestamp'] = timestamp;
        return this;
    }
    public withBindHost(bindHost: Array<BindHost>): CertificateBody {
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