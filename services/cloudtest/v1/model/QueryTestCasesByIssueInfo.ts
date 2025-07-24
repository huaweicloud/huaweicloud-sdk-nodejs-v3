

export class QueryTestCasesByIssueInfo {
    private 'page_no'?: number;
    private 'page_size'?: number;
    private 'sort_field'?: string;
    private 'sort_type'?: string;
    private 'version_uri'?: string;
    private 'relate_type'?: string;
    private 'key_word'?: string;
    private 'rank_ids'?: Array<string>;
    private 'result_codes'?: Array<string>;
    public constructor() { 
    }
    public withPageNo(pageNo: number): QueryTestCasesByIssueInfo {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): QueryTestCasesByIssueInfo {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withSortField(sortField: string): QueryTestCasesByIssueInfo {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: string): QueryTestCasesByIssueInfo {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): string | undefined {
        return this['sort_type'];
    }
    public withVersionUri(versionUri: string): QueryTestCasesByIssueInfo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withRelateType(relateType: string): QueryTestCasesByIssueInfo {
        this['relate_type'] = relateType;
        return this;
    }
    public set relateType(relateType: string  | undefined) {
        this['relate_type'] = relateType;
    }
    public get relateType(): string | undefined {
        return this['relate_type'];
    }
    public withKeyWord(keyWord: string): QueryTestCasesByIssueInfo {
        this['key_word'] = keyWord;
        return this;
    }
    public set keyWord(keyWord: string  | undefined) {
        this['key_word'] = keyWord;
    }
    public get keyWord(): string | undefined {
        return this['key_word'];
    }
    public withRankIds(rankIds: Array<string>): QueryTestCasesByIssueInfo {
        this['rank_ids'] = rankIds;
        return this;
    }
    public set rankIds(rankIds: Array<string>  | undefined) {
        this['rank_ids'] = rankIds;
    }
    public get rankIds(): Array<string> | undefined {
        return this['rank_ids'];
    }
    public withResultCodes(resultCodes: Array<string>): QueryTestCasesByIssueInfo {
        this['result_codes'] = resultCodes;
        return this;
    }
    public set resultCodes(resultCodes: Array<string>  | undefined) {
        this['result_codes'] = resultCodes;
    }
    public get resultCodes(): Array<string> | undefined {
        return this['result_codes'];
    }
}