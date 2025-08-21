

export class ShowLogsCountRespData {
    public count?: number;
    public constructor() { 
    }
    public withCount(count: number): ShowLogsCountRespData {
        this['count'] = count;
        return this;
    }
}