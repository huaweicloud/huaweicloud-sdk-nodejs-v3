

export class VulScanTaskStatisticsResponseInfoLastScanTaskRiskyHostNum {
    private 'urgent_vul'?: number;
    public constructor() { 
    }
    public withUrgentVul(urgentVul: number): VulScanTaskStatisticsResponseInfoLastScanTaskRiskyHostNum {
        this['urgent_vul'] = urgentVul;
        return this;
    }
    public set urgentVul(urgentVul: number  | undefined) {
        this['urgent_vul'] = urgentVul;
    }
    public get urgentVul(): number | undefined {
        return this['urgent_vul'];
    }
}