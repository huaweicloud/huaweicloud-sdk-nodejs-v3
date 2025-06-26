

export class DiagnosisSummaryItem {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public progress?: number;
    public status?: string;
    private 'normal_item_num'?: number;
    private 'abnormal_item_num'?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): DiagnosisSummaryItem {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): DiagnosisSummaryItem {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withProgress(progress: number): DiagnosisSummaryItem {
        this['progress'] = progress;
        return this;
    }
    public withStatus(status: string): DiagnosisSummaryItem {
        this['status'] = status;
        return this;
    }
    public withNormalItemNum(normalItemNum: number): DiagnosisSummaryItem {
        this['normal_item_num'] = normalItemNum;
        return this;
    }
    public set normalItemNum(normalItemNum: number  | undefined) {
        this['normal_item_num'] = normalItemNum;
    }
    public get normalItemNum(): number | undefined {
        return this['normal_item_num'];
    }
    public withAbnormalItemNum(abnormalItemNum: number): DiagnosisSummaryItem {
        this['abnormal_item_num'] = abnormalItemNum;
        return this;
    }
    public set abnormalItemNum(abnormalItemNum: number  | undefined) {
        this['abnormal_item_num'] = abnormalItemNum;
    }
    public get abnormalItemNum(): number | undefined {
        return this['abnormal_item_num'];
    }
}