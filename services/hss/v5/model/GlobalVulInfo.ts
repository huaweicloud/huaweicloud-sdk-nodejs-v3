import { CveInfo } from './CveInfo';


export class GlobalVulInfo {
    private 'vul_name'?: string;
    private 'vul_id'?: string;
    private 'repair_necessity'?: string;
    public decription?: string;
    public solution?: string;
    public url?: string;
    private 'history_number'?: number;
    private 'undeal_number'?: number;
    private 'data_list'?: Array<CveInfo>;
    public constructor() { 
    }
    public withVulName(vulName: string): GlobalVulInfo {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withVulId(vulId: string): GlobalVulInfo {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withRepairNecessity(repairNecessity: string): GlobalVulInfo {
        this['repair_necessity'] = repairNecessity;
        return this;
    }
    public set repairNecessity(repairNecessity: string  | undefined) {
        this['repair_necessity'] = repairNecessity;
    }
    public get repairNecessity(): string | undefined {
        return this['repair_necessity'];
    }
    public withDecription(decription: string): GlobalVulInfo {
        this['decription'] = decription;
        return this;
    }
    public withSolution(solution: string): GlobalVulInfo {
        this['solution'] = solution;
        return this;
    }
    public withUrl(url: string): GlobalVulInfo {
        this['url'] = url;
        return this;
    }
    public withHistoryNumber(historyNumber: number): GlobalVulInfo {
        this['history_number'] = historyNumber;
        return this;
    }
    public set historyNumber(historyNumber: number  | undefined) {
        this['history_number'] = historyNumber;
    }
    public get historyNumber(): number | undefined {
        return this['history_number'];
    }
    public withUndealNumber(undealNumber: number): GlobalVulInfo {
        this['undeal_number'] = undealNumber;
        return this;
    }
    public set undealNumber(undealNumber: number  | undefined) {
        this['undeal_number'] = undealNumber;
    }
    public get undealNumber(): number | undefined {
        return this['undeal_number'];
    }
    public withDataList(dataList: Array<CveInfo>): GlobalVulInfo {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<CveInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<CveInfo> | undefined {
        return this['data_list'];
    }
}