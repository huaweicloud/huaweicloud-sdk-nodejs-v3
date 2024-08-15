

export class QueryLtsLogParams {
    private 'start_time'?: string;
    private 'end_time'?: string;
    public labels?: { [key: string]: string; };
    private 'is_count'?: boolean;
    public keywords?: string;
    private 'line_num'?: string;
    private '__time__'?: string;
    private 'is_desc'?: boolean;
    private 'search_type'?: QueryLtsLogParamsSearchTypeEnum | string;
    public limit?: number;
    public highlight?: boolean;
    private 'is_iterative'?: boolean;
    public query?: string;
    private 'is_analysis_query'?: boolean;
    public constructor(startTime?: string, endTime?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withStartTime(startTime: string): QueryLtsLogParams {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): QueryLtsLogParams {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
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
    public set isCount(isCount: boolean  | undefined) {
        this['is_count'] = isCount;
    }
    public get isCount(): boolean | undefined {
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
    public set lineNum(lineNum: string  | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum(): string | undefined {
        return this['line_num'];
    }
    public withTime(time: string): QueryLtsLogParams {
        this['__time__'] = time;
        return this;
    }
    public set time(time: string  | undefined) {
        this['__time__'] = time;
    }
    public get time(): string | undefined {
        return this['__time__'];
    }
    public withIsDesc(isDesc: boolean): QueryLtsLogParams {
        this['is_desc'] = isDesc;
        return this;
    }
    public set isDesc(isDesc: boolean  | undefined) {
        this['is_desc'] = isDesc;
    }
    public get isDesc(): boolean | undefined {
        return this['is_desc'];
    }
    public withSearchType(searchType: QueryLtsLogParamsSearchTypeEnum | string): QueryLtsLogParams {
        this['search_type'] = searchType;
        return this;
    }
    public set searchType(searchType: QueryLtsLogParamsSearchTypeEnum | string  | undefined) {
        this['search_type'] = searchType;
    }
    public get searchType(): QueryLtsLogParamsSearchTypeEnum | string | undefined {
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
    public set isIterative(isIterative: boolean  | undefined) {
        this['is_iterative'] = isIterative;
    }
    public get isIterative(): boolean | undefined {
        return this['is_iterative'];
    }
    public withQuery(query: string): QueryLtsLogParams {
        this['query'] = query;
        return this;
    }
    public withIsAnalysisQuery(isAnalysisQuery: boolean): QueryLtsLogParams {
        this['is_analysis_query'] = isAnalysisQuery;
        return this;
    }
    public set isAnalysisQuery(isAnalysisQuery: boolean  | undefined) {
        this['is_analysis_query'] = isAnalysisQuery;
    }
    public get isAnalysisQuery(): boolean | undefined {
        return this['is_analysis_query'];
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
