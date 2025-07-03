import { CocTicketHistoryBaseInfoV2 } from './CocTicketHistoryBaseInfoV2';


export class CocListHistoryResponseDataV2 {
    public total?: number;
    public info?: Array<CocTicketHistoryBaseInfoV2>;
    public constructor() { 
    }
    public withTotal(total: number): CocListHistoryResponseDataV2 {
        this['total'] = total;
        return this;
    }
    public withInfo(info: Array<CocTicketHistoryBaseInfoV2>): CocListHistoryResponseDataV2 {
        this['info'] = info;
        return this;
    }
}