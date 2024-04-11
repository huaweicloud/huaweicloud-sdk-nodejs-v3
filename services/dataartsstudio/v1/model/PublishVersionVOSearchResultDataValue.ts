import { PublishVersionVO } from './PublishVersionVO';


export class PublishVersionVOSearchResultDataValue {
    public records?: Array<PublishVersionVO>;
    public total?: number;
    public constructor() { 
    }
    public withRecords(records: Array<PublishVersionVO>): PublishVersionVOSearchResultDataValue {
        this['records'] = records;
        return this;
    }
    public withTotal(total: number): PublishVersionVOSearchResultDataValue {
        this['total'] = total;
        return this;
    }
}