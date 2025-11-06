

export class MetaDataForAlarmHistoryResp {
    public total?: number;
    public constructor() { 
    }
    public withTotal(total: number): MetaDataForAlarmHistoryResp {
        this['total'] = total;
        return this;
    }
}