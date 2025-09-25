

export class RealTimeLogCollect {
    public id?: string;
    public clusterId?: string;
    public indexPrefix?: string;
    public keepDays?: number;
    public targetClusterId?: string;
    public status?: string;
    public createAt?: number;
    public updateAt?: number;
    public constructor(indexPrefix?: string, keepDays?: number, targetClusterId?: string, status?: string, createAt?: number, updateAt?: number) { 
        this['indexPrefix'] = indexPrefix;
        this['keepDays'] = keepDays;
        this['targetClusterId'] = targetClusterId;
        this['status'] = status;
        this['createAt'] = createAt;
        this['updateAt'] = updateAt;
    }
    public withId(id: string): RealTimeLogCollect {
        this['id'] = id;
        return this;
    }
    public withClusterId(clusterId: string): RealTimeLogCollect {
        this['clusterId'] = clusterId;
        return this;
    }
    public withIndexPrefix(indexPrefix: string): RealTimeLogCollect {
        this['indexPrefix'] = indexPrefix;
        return this;
    }
    public withKeepDays(keepDays: number): RealTimeLogCollect {
        this['keepDays'] = keepDays;
        return this;
    }
    public withTargetClusterId(targetClusterId: string): RealTimeLogCollect {
        this['targetClusterId'] = targetClusterId;
        return this;
    }
    public withStatus(status: string): RealTimeLogCollect {
        this['status'] = status;
        return this;
    }
    public withCreateAt(createAt: number): RealTimeLogCollect {
        this['createAt'] = createAt;
        return this;
    }
    public withUpdateAt(updateAt: number): RealTimeLogCollect {
        this['updateAt'] = updateAt;
        return this;
    }
}