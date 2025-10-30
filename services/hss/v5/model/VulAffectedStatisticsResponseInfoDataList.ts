

export class VulAffectedStatisticsResponseInfoDataList {
    public type?: string;
    private 'vul_num'?: number;
    public constructor() { 
    }
    public withType(type: string): VulAffectedStatisticsResponseInfoDataList {
        this['type'] = type;
        return this;
    }
    public withVulNum(vulNum: number): VulAffectedStatisticsResponseInfoDataList {
        this['vul_num'] = vulNum;
        return this;
    }
    public set vulNum(vulNum: number  | undefined) {
        this['vul_num'] = vulNum;
    }
    public get vulNum(): number | undefined {
        return this['vul_num'];
    }
}