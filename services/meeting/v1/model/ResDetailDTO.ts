

export class ResDetailDTO {
    public sumCount?: number;
    public trialCount?: number;
    public expiredCount?: number;
    public expiringCount?: number;
    public usedCount?: number;
    public constructor() { 
    }
    public withSumCount(sumCount: number): ResDetailDTO {
        this['sumCount'] = sumCount;
        return this;
    }
    public withTrialCount(trialCount: number): ResDetailDTO {
        this['trialCount'] = trialCount;
        return this;
    }
    public withExpiredCount(expiredCount: number): ResDetailDTO {
        this['expiredCount'] = expiredCount;
        return this;
    }
    public withExpiringCount(expiringCount: number): ResDetailDTO {
        this['expiringCount'] = expiringCount;
        return this;
    }
    public withUsedCount(usedCount: number): ResDetailDTO {
        this['usedCount'] = usedCount;
        return this;
    }
}