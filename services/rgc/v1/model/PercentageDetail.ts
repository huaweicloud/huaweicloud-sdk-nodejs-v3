

export class PercentageDetail {
    private 'percentage_name'?: string;
    private 'percentage_status'?: string;
    public constructor() { 
    }
    public withPercentageName(percentageName: string): PercentageDetail {
        this['percentage_name'] = percentageName;
        return this;
    }
    public set percentageName(percentageName: string  | undefined) {
        this['percentage_name'] = percentageName;
    }
    public get percentageName(): string | undefined {
        return this['percentage_name'];
    }
    public withPercentageStatus(percentageStatus: string): PercentageDetail {
        this['percentage_status'] = percentageStatus;
        return this;
    }
    public set percentageStatus(percentageStatus: string  | undefined) {
        this['percentage_status'] = percentageStatus;
    }
    public get percentageStatus(): string | undefined {
        return this['percentage_status'];
    }
}