

export class OverviewReconcileStatus {
    public configSetTotalNum?: number;
    public healthStatusNum?: number;
    public failedStatusNum?: number;
    public unknownStatusNum?: number;
    public progressingStatusNum?: number;
    public constructor() { 
    }
    public withConfigSetTotalNum(configSetTotalNum: number): OverviewReconcileStatus {
        this['configSetTotalNum'] = configSetTotalNum;
        return this;
    }
    public withHealthStatusNum(healthStatusNum: number): OverviewReconcileStatus {
        this['healthStatusNum'] = healthStatusNum;
        return this;
    }
    public withFailedStatusNum(failedStatusNum: number): OverviewReconcileStatus {
        this['failedStatusNum'] = failedStatusNum;
        return this;
    }
    public withUnknownStatusNum(unknownStatusNum: number): OverviewReconcileStatus {
        this['unknownStatusNum'] = unknownStatusNum;
        return this;
    }
    public withProgressingStatusNum(progressingStatusNum: number): OverviewReconcileStatus {
        this['progressingStatusNum'] = progressingStatusNum;
        return this;
    }
}