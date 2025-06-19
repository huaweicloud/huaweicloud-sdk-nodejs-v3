import { IpBlacklistVO } from './IpBlacklistVO';


export class PageDataIpBlacklistsVo {
    public limit?: number;
    public offset?: number;
    public records?: Array<IpBlacklistVO>;
    public total?: number;
    public constructor() { 
    }
    public withLimit(limit: number): PageDataIpBlacklistsVo {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): PageDataIpBlacklistsVo {
        this['offset'] = offset;
        return this;
    }
    public withRecords(records: Array<IpBlacklistVO>): PageDataIpBlacklistsVo {
        this['records'] = records;
        return this;
    }
    public withTotal(total: number): PageDataIpBlacklistsVo {
        this['total'] = total;
        return this;
    }
}