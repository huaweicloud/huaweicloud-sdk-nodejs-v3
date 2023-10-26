

export class ListDailyLogRequest {
    private 'floating_ip_id'?: string;
    private 'sort_dir'?: string;
    public limit?: string;
    public offset?: string;
    public ip?: string;
    public constructor(floatingIpId?: string) { 
        this['floating_ip_id'] = floatingIpId;
    }
    public withFloatingIpId(floatingIpId: string): ListDailyLogRequest {
        this['floating_ip_id'] = floatingIpId;
        return this;
    }
    public set floatingIpId(floatingIpId: string  | undefined) {
        this['floating_ip_id'] = floatingIpId;
    }
    public get floatingIpId(): string | undefined {
        return this['floating_ip_id'];
    }
    public withSortDir(sortDir: string): ListDailyLogRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withLimit(limit: string): ListDailyLogRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListDailyLogRequest {
        this['offset'] = offset;
        return this;
    }
    public withIp(ip: string): ListDailyLogRequest {
        this['ip'] = ip;
        return this;
    }
}