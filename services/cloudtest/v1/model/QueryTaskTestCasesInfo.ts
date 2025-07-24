

export class QueryTaskTestCasesInfo {
    private 'page_no'?: number;
    private 'page_size'?: number;
    private 'start_index'?: number;
    private 'end_index'?: number;
    private 'key_word'?: string;
    private 'test_case_uris'?: Array<string>;
    private 'iterator_uri'?: string;
    public constructor() { 
    }
    public withPageNo(pageNo: number): QueryTaskTestCasesInfo {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): QueryTaskTestCasesInfo {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withStartIndex(startIndex: number): QueryTaskTestCasesInfo {
        this['start_index'] = startIndex;
        return this;
    }
    public set startIndex(startIndex: number  | undefined) {
        this['start_index'] = startIndex;
    }
    public get startIndex(): number | undefined {
        return this['start_index'];
    }
    public withEndIndex(endIndex: number): QueryTaskTestCasesInfo {
        this['end_index'] = endIndex;
        return this;
    }
    public set endIndex(endIndex: number  | undefined) {
        this['end_index'] = endIndex;
    }
    public get endIndex(): number | undefined {
        return this['end_index'];
    }
    public withKeyWord(keyWord: string): QueryTaskTestCasesInfo {
        this['key_word'] = keyWord;
        return this;
    }
    public set keyWord(keyWord: string  | undefined) {
        this['key_word'] = keyWord;
    }
    public get keyWord(): string | undefined {
        return this['key_word'];
    }
    public withTestCaseUris(testCaseUris: Array<string>): QueryTaskTestCasesInfo {
        this['test_case_uris'] = testCaseUris;
        return this;
    }
    public set testCaseUris(testCaseUris: Array<string>  | undefined) {
        this['test_case_uris'] = testCaseUris;
    }
    public get testCaseUris(): Array<string> | undefined {
        return this['test_case_uris'];
    }
    public withIteratorUri(iteratorUri: string): QueryTaskTestCasesInfo {
        this['iterator_uri'] = iteratorUri;
        return this;
    }
    public set iteratorUri(iteratorUri: string  | undefined) {
        this['iterator_uri'] = iteratorUri;
    }
    public get iteratorUri(): string | undefined {
        return this['iterator_uri'];
    }
}