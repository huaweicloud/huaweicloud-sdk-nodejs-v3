import { GetFirewallInstanceResponseRecord } from './GetFirewallInstanceResponseRecord';


export class GetFirewallInstanceData {
    public limit?: number;
    public offset?: number;
    public total?: number;
    public records?: Array<GetFirewallInstanceResponseRecord>;
    public constructor() { 
    }
    public withLimit(limit: number): GetFirewallInstanceData {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): GetFirewallInstanceData {
        this['offset'] = offset;
        return this;
    }
    public withTotal(total: number): GetFirewallInstanceData {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<GetFirewallInstanceResponseRecord>): GetFirewallInstanceData {
        this['records'] = records;
        return this;
    }
}