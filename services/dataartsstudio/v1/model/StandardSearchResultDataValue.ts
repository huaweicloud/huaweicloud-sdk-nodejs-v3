import { StandElementValueVOList } from './StandElementValueVOList';


export class StandardSearchResultDataValue {
    public records?: Array<StandElementValueVOList>;
    public total?: number;
    public constructor() { 
    }
    public withRecords(records: Array<StandElementValueVOList>): StandardSearchResultDataValue {
        this['records'] = records;
        return this;
    }
    public withTotal(total: number): StandardSearchResultDataValue {
        this['total'] = total;
        return this;
    }
}