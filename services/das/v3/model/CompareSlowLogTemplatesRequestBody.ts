

export class CompareSlowLogTemplatesRequestBody {
    private 'cur_page'?: number;
    private 'per_page'?: number;
    private 'comparative_start_time'?: number;
    private 'comparative_end_time'?: number;
    private 'base_line_start_time'?: number;
    private 'base_line_end_time'?: number;
    public constructor() { 
    }
    public withCurPage(curPage: number): CompareSlowLogTemplatesRequestBody {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: number  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): number | undefined {
        return this['cur_page'];
    }
    public withPerPage(perPage: number): CompareSlowLogTemplatesRequestBody {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
    public withComparativeStartTime(comparativeStartTime: number): CompareSlowLogTemplatesRequestBody {
        this['comparative_start_time'] = comparativeStartTime;
        return this;
    }
    public set comparativeStartTime(comparativeStartTime: number  | undefined) {
        this['comparative_start_time'] = comparativeStartTime;
    }
    public get comparativeStartTime(): number | undefined {
        return this['comparative_start_time'];
    }
    public withComparativeEndTime(comparativeEndTime: number): CompareSlowLogTemplatesRequestBody {
        this['comparative_end_time'] = comparativeEndTime;
        return this;
    }
    public set comparativeEndTime(comparativeEndTime: number  | undefined) {
        this['comparative_end_time'] = comparativeEndTime;
    }
    public get comparativeEndTime(): number | undefined {
        return this['comparative_end_time'];
    }
    public withBaseLineStartTime(baseLineStartTime: number): CompareSlowLogTemplatesRequestBody {
        this['base_line_start_time'] = baseLineStartTime;
        return this;
    }
    public set baseLineStartTime(baseLineStartTime: number  | undefined) {
        this['base_line_start_time'] = baseLineStartTime;
    }
    public get baseLineStartTime(): number | undefined {
        return this['base_line_start_time'];
    }
    public withBaseLineEndTime(baseLineEndTime: number): CompareSlowLogTemplatesRequestBody {
        this['base_line_end_time'] = baseLineEndTime;
        return this;
    }
    public set baseLineEndTime(baseLineEndTime: number  | undefined) {
        this['base_line_end_time'] = baseLineEndTime;
    }
    public get baseLineEndTime(): number | undefined {
        return this['base_line_end_time'];
    }
}