

export class MetaDataForAlarmHistory {
    public total?: number;
    public constructor(total?: number) { 
        this['total'] = total;
    }
    public withTotal(total: number): MetaDataForAlarmHistory {
        this['total'] = total;
        return this;
    }
}