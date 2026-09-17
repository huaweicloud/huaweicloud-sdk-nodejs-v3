

export class ShowTopSlowLogRequest {
    public num?: number;
    private 'start_at'?: number;
    private 'end_at'?: number;
    public constructor(num?: number, startAt?: number, endAt?: number) { 
        this['num'] = num;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withNum(num: number): ShowTopSlowLogRequest {
        this['num'] = num;
        return this;
    }
    public withStartAt(startAt: number): ShowTopSlowLogRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ShowTopSlowLogRequest {
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