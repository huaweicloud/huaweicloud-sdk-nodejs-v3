

export class ShowJobBuildSuccessRatioResultEveryDayReport {
    public date?: string;
    private 'success_ratio'?: number;
    public constructor() { 
    }
    public withDate(date: string): ShowJobBuildSuccessRatioResultEveryDayReport {
        this['date'] = date;
        return this;
    }
    public withSuccessRatio(successRatio: number): ShowJobBuildSuccessRatioResultEveryDayReport {
        this['success_ratio'] = successRatio;
        return this;
    }
    public set successRatio(successRatio: number  | undefined) {
        this['success_ratio'] = successRatio;
    }
    public get successRatio(): number | undefined {
        return this['success_ratio'];
    }
}