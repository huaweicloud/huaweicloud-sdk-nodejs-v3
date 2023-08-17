

export class ListPipleineBuildResultRequest {
    private 'start_date'?: string;
    private 'end_date'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(startDate?: string, endDate?: string, offset?: number, limit?: number) { 
        this['start_date'] = startDate;
        this['end_date'] = endDate;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withStartDate(startDate: string): ListPipleineBuildResultRequest {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withEndDate(endDate: string): ListPipleineBuildResultRequest {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): string | undefined {
        return this['end_date'];
    }
    public withOffset(offset: number): ListPipleineBuildResultRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPipleineBuildResultRequest {
        this['limit'] = limit;
        return this;
    }
}