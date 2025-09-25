

export class RiskHandleInfoVulInfo {
    private 'vul_scan_task_num'?: number;
    private 'vul_num'?: number;
    private 'handled_vul_num'?: number;
    private 'handled_rate'?: number;
    private 'beat_rate'?: number;
    private 'new_urgent_vul_num'?: number;
    public constructor() { 
    }
    public withVulScanTaskNum(vulScanTaskNum: number): RiskHandleInfoVulInfo {
        this['vul_scan_task_num'] = vulScanTaskNum;
        return this;
    }
    public set vulScanTaskNum(vulScanTaskNum: number  | undefined) {
        this['vul_scan_task_num'] = vulScanTaskNum;
    }
    public get vulScanTaskNum(): number | undefined {
        return this['vul_scan_task_num'];
    }
    public withVulNum(vulNum: number): RiskHandleInfoVulInfo {
        this['vul_num'] = vulNum;
        return this;
    }
    public set vulNum(vulNum: number  | undefined) {
        this['vul_num'] = vulNum;
    }
    public get vulNum(): number | undefined {
        return this['vul_num'];
    }
    public withHandledVulNum(handledVulNum: number): RiskHandleInfoVulInfo {
        this['handled_vul_num'] = handledVulNum;
        return this;
    }
    public set handledVulNum(handledVulNum: number  | undefined) {
        this['handled_vul_num'] = handledVulNum;
    }
    public get handledVulNum(): number | undefined {
        return this['handled_vul_num'];
    }
    public withHandledRate(handledRate: number): RiskHandleInfoVulInfo {
        this['handled_rate'] = handledRate;
        return this;
    }
    public set handledRate(handledRate: number  | undefined) {
        this['handled_rate'] = handledRate;
    }
    public get handledRate(): number | undefined {
        return this['handled_rate'];
    }
    public withBeatRate(beatRate: number): RiskHandleInfoVulInfo {
        this['beat_rate'] = beatRate;
        return this;
    }
    public set beatRate(beatRate: number  | undefined) {
        this['beat_rate'] = beatRate;
    }
    public get beatRate(): number | undefined {
        return this['beat_rate'];
    }
    public withNewUrgentVulNum(newUrgentVulNum: number): RiskHandleInfoVulInfo {
        this['new_urgent_vul_num'] = newUrgentVulNum;
        return this;
    }
    public set newUrgentVulNum(newUrgentVulNum: number  | undefined) {
        this['new_urgent_vul_num'] = newUrgentVulNum;
    }
    public get newUrgentVulNum(): number | undefined {
        return this['new_urgent_vul_num'];
    }
}