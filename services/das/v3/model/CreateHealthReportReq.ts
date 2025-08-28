

export class CreateHealthReportReq {
    private 'start_at'?: number;
    private 'end_at'?: number;
    public constructor(startAt?: number, endAt?: number) { 
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withStartAt(startAt: number): CreateHealthReportReq {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): CreateHealthReportReq {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
}