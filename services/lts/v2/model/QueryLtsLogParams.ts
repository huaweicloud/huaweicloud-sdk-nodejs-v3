

export class QueryLtsLogParams {
    private 'start_time': string | undefined;
    private 'end_time': string | undefined;
    public labels?: { [key: string]: string; };
    private 'is_count'?: boolean | undefined;
    public keywords?: string;
    private 'line_num'?: string | undefined;
    private 'is_desc'?: boolean | undefined;
    private 'search_type'?: QueryLtsLogParamsSearchTypeEnum | undefined;
    public limit?: number;
    public highlight?: boolean;
    private 'is_iterative'?: boolean | undefined;
    public constructor(startTime?: any, endTime?: any) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withStartTime(startTime: string): QueryLtsLogParams {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): QueryLtsLogParams {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withLabels(labels: { [key: string]: string; }): QueryLtsLogParams {
        this['labels'] = labels;
        return this;
    }
    public withIsCount(isCount: boolean): QueryLtsLogParams {
        this['is_count'] = isCount;
        return this;
    }
    public set isCount(isCount: boolean | undefined) {
        this['is_count'] = isCount;
    }
    public get isCount() {
        return this['is_count'];
    }
    public withKeywords(keywords: string): QueryLtsLogParams {
        this['keywords'] = keywords;
        return this;
    }
    public withLineNum(lineNum: string): QueryLtsLogParams {
        this['line_num'] = lineNum;
        return this;
    }
    public set lineNum(lineNum: string | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum() {
        return this['line_num'];
    }
    public withIsDesc(isDesc: boolean): QueryLtsLogParams {
        this['is_desc'] = isDesc;
        return this;
    }
    public set isDesc(isDesc: boolean | undefined) {
        this['is_desc'] = isDesc;
    }
    public get isDesc() {
        return this['is_desc'];
    }
    public withSearchType(searchType: QueryLtsLogParamsSearchTypeEnum): QueryLtsLogParams {
        this['search_type'] = searchType;
        return this;
    }
    public set searchType(searchType: QueryLtsLogParamsSearchTypeEnum | undefined) {
        this['search_type'] = searchType;
    }
    public get searchType() {
        return this['search_type'];
    }
    public withLimit(limit: number): QueryLtsLogParams {
        this['limit'] = limit;
        return this;
    }
    public withHighlight(highlight: boolean): QueryLtsLogParams {
        this['highlight'] = highlight;
        return this;
    }
    public withIsIterative(isIterative: boolean): QueryLtsLogParams {
        this['is_iterative'] = isIterative;
        return this;
    }
    public set isIterative(isIterative: boolean | undefined) {
        this['is_iterative'] = isIterative;
    }
    public get isIterative() {
        return this['is_iterative'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QueryLtsLogParamsSearchTypeEnum {
    FORWARDS = 'forwards',
    BACKWARDS = 'backwards'
}
