

export class JobScheduleDurationInfo {
    private 'active_start_date'?: string;
    private 'active_end_date'?: string;
    public constructor() { 
    }
    public withActiveStartDate(activeStartDate: string): JobScheduleDurationInfo {
        this['active_start_date'] = activeStartDate;
        return this;
    }
    public set activeStartDate(activeStartDate: string  | undefined) {
        this['active_start_date'] = activeStartDate;
    }
    public get activeStartDate(): string | undefined {
        return this['active_start_date'];
    }
    public withActiveEndDate(activeEndDate: string): JobScheduleDurationInfo {
        this['active_end_date'] = activeEndDate;
        return this;
    }
    public set activeEndDate(activeEndDate: string  | undefined) {
        this['active_end_date'] = activeEndDate;
    }
    public get activeEndDate(): string | undefined {
        return this['active_end_date'];
    }
}