

export class RiskHandleInfoFreeReportInfo {
    private 'free_check_host_num'?: number;
    public constructor() { 
    }
    public withFreeCheckHostNum(freeCheckHostNum: number): RiskHandleInfoFreeReportInfo {
        this['free_check_host_num'] = freeCheckHostNum;
        return this;
    }
    public set freeCheckHostNum(freeCheckHostNum: number  | undefined) {
        this['free_check_host_num'] = freeCheckHostNum;
    }
    public get freeCheckHostNum(): number | undefined {
        return this['free_check_host_num'];
    }
}