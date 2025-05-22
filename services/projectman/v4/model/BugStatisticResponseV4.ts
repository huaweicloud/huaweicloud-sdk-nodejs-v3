

export class BugStatisticResponseV4 {
    private 'critical_num'?: number;
    private 'defect_index'?: number;
    public module?: string;
    private 'normal_num'?: number;
    private 'serious_num'?: number;
    private 'tip_num'?: number;
    public total?: number;
    public constructor() { 
    }
    public withCriticalNum(criticalNum: number): BugStatisticResponseV4 {
        this['critical_num'] = criticalNum;
        return this;
    }
    public set criticalNum(criticalNum: number  | undefined) {
        this['critical_num'] = criticalNum;
    }
    public get criticalNum(): number | undefined {
        return this['critical_num'];
    }
    public withDefectIndex(defectIndex: number): BugStatisticResponseV4 {
        this['defect_index'] = defectIndex;
        return this;
    }
    public set defectIndex(defectIndex: number  | undefined) {
        this['defect_index'] = defectIndex;
    }
    public get defectIndex(): number | undefined {
        return this['defect_index'];
    }
    public withModule(module: string): BugStatisticResponseV4 {
        this['module'] = module;
        return this;
    }
    public withNormalNum(normalNum: number): BugStatisticResponseV4 {
        this['normal_num'] = normalNum;
        return this;
    }
    public set normalNum(normalNum: number  | undefined) {
        this['normal_num'] = normalNum;
    }
    public get normalNum(): number | undefined {
        return this['normal_num'];
    }
    public withSeriousNum(seriousNum: number): BugStatisticResponseV4 {
        this['serious_num'] = seriousNum;
        return this;
    }
    public set seriousNum(seriousNum: number  | undefined) {
        this['serious_num'] = seriousNum;
    }
    public get seriousNum(): number | undefined {
        return this['serious_num'];
    }
    public withTipNum(tipNum: number): BugStatisticResponseV4 {
        this['tip_num'] = tipNum;
        return this;
    }
    public set tipNum(tipNum: number  | undefined) {
        this['tip_num'] = tipNum;
    }
    public get tipNum(): number | undefined {
        return this['tip_num'];
    }
    public withTotal(total: number): BugStatisticResponseV4 {
        this['total'] = total;
        return this;
    }
}