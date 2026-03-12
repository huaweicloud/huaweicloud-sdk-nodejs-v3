

export class UpdateClusterSshRequest {
    private 'cluster_id'?: string;
    public enable?: boolean;
    private 'expire_time'?: number;
    public constructor(clusterId?: string, enable?: boolean) { 
        this['cluster_id'] = clusterId;
        this['enable'] = enable;
    }
    public withClusterId(clusterId: string): UpdateClusterSshRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withEnable(enable: boolean): UpdateClusterSshRequest {
        this['enable'] = enable;
        return this;
    }
    public withExpireTime(expireTime: number): UpdateClusterSshRequest {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
}