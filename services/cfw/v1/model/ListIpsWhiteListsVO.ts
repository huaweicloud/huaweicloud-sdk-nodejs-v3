import { IpsWhiteListVO } from './IpsWhiteListVO';


export class ListIpsWhiteListsVO {
    public limit?: number;
    public offset?: number;
    public total?: number;
    public records?: Array<IpsWhiteListVO>;
    public constructor() { 
    }
    public withLimit(limit: number): ListIpsWhiteListsVO {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListIpsWhiteListsVO {
        this['offset'] = offset;
        return this;
    }
    public withTotal(total: number): ListIpsWhiteListsVO {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<IpsWhiteListVO>): ListIpsWhiteListsVO {
        this['records'] = records;
        return this;
    }
}