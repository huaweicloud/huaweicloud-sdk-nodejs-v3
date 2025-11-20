

export class ClusterCertDuration {
    public duration?: number;
    private 'expire_at'?: string;
    public constructor() { 
    }
    public withDuration(duration: number): ClusterCertDuration {
        this['duration'] = duration;
        return this;
    }
    public withExpireAt(expireAt: string): ClusterCertDuration {
        this['expire_at'] = expireAt;
        return this;
    }
    public set expireAt(expireAt: string  | undefined) {
        this['expire_at'] = expireAt;
    }
    public get expireAt(): string | undefined {
        return this['expire_at'];
    }
}