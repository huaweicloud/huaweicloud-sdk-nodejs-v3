

export class QuotaHostStatistics {
    public version?: string;
    private 'total_num'?: number;
    private 'about_to_expire_num'?: number;
    private 'idle_num'?: number;
    private 'host_num'?: number;
    public constructor() { 
    }
    public withVersion(version: string): QuotaHostStatistics {
        this['version'] = version;
        return this;
    }
    public withTotalNum(totalNum: number): QuotaHostStatistics {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withAboutToExpireNum(aboutToExpireNum: number): QuotaHostStatistics {
        this['about_to_expire_num'] = aboutToExpireNum;
        return this;
    }
    public set aboutToExpireNum(aboutToExpireNum: number  | undefined) {
        this['about_to_expire_num'] = aboutToExpireNum;
    }
    public get aboutToExpireNum(): number | undefined {
        return this['about_to_expire_num'];
    }
    public withIdleNum(idleNum: number): QuotaHostStatistics {
        this['idle_num'] = idleNum;
        return this;
    }
    public set idleNum(idleNum: number  | undefined) {
        this['idle_num'] = idleNum;
    }
    public get idleNum(): number | undefined {
        return this['idle_num'];
    }
    public withHostNum(hostNum: number): QuotaHostStatistics {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
}