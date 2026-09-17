

export class UserTrendPercent {
    private 'percent_le10_count'?: number;
    private 'percent10_to50_count'?: number;
    private 'percent50_to80_count'?: number;
    private 'percent_gl80_count'?: number;
    public constructor() { 
    }
    public withPercentLe10Count(percentLe10Count: number): UserTrendPercent {
        this['percent_le10_count'] = percentLe10Count;
        return this;
    }
    public set percentLe10Count(percentLe10Count: number  | undefined) {
        this['percent_le10_count'] = percentLe10Count;
    }
    public get percentLe10Count(): number | undefined {
        return this['percent_le10_count'];
    }
    public withPercent10To50Count(percent10To50Count: number): UserTrendPercent {
        this['percent10_to50_count'] = percent10To50Count;
        return this;
    }
    public set percent10To50Count(percent10To50Count: number  | undefined) {
        this['percent10_to50_count'] = percent10To50Count;
    }
    public get percent10To50Count(): number | undefined {
        return this['percent10_to50_count'];
    }
    public withPercent50To80Count(percent50To80Count: number): UserTrendPercent {
        this['percent50_to80_count'] = percent50To80Count;
        return this;
    }
    public set percent50To80Count(percent50To80Count: number  | undefined) {
        this['percent50_to80_count'] = percent50To80Count;
    }
    public get percent50To80Count(): number | undefined {
        return this['percent50_to80_count'];
    }
    public withPercentGl80Count(percentGl80Count: number): UserTrendPercent {
        this['percent_gl80_count'] = percentGl80Count;
        return this;
    }
    public set percentGl80Count(percentGl80Count: number  | undefined) {
        this['percent_gl80_count'] = percentGl80Count;
    }
    public get percentGl80Count(): number | undefined {
        return this['percent_gl80_count'];
    }
}