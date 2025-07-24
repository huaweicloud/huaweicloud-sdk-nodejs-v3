

export class CoverRateVo {
    public testing?: number;
    public finished?: number;
    private 'not_tested'?: number;
    private 'total_number'?: number;
    private 'cover_rate'?: string;
    public constructor() { 
    }
    public withTesting(testing: number): CoverRateVo {
        this['testing'] = testing;
        return this;
    }
    public withFinished(finished: number): CoverRateVo {
        this['finished'] = finished;
        return this;
    }
    public withNotTested(notTested: number): CoverRateVo {
        this['not_tested'] = notTested;
        return this;
    }
    public set notTested(notTested: number  | undefined) {
        this['not_tested'] = notTested;
    }
    public get notTested(): number | undefined {
        return this['not_tested'];
    }
    public withTotalNumber(totalNumber: number): CoverRateVo {
        this['total_number'] = totalNumber;
        return this;
    }
    public set totalNumber(totalNumber: number  | undefined) {
        this['total_number'] = totalNumber;
    }
    public get totalNumber(): number | undefined {
        return this['total_number'];
    }
    public withCoverRate(coverRate: string): CoverRateVo {
        this['cover_rate'] = coverRate;
        return this;
    }
    public set coverRate(coverRate: string  | undefined) {
        this['cover_rate'] = coverRate;
    }
    public get coverRate(): string | undefined {
        return this['cover_rate'];
    }
}