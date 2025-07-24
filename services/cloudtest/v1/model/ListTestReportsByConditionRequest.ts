

export class ListTestReportsByConditionRequest {
    private 'project_id'?: string;
    private 'page_size'?: number;
    private 'page_no'?: string;
    private 'key_word'?: string;
    public own?: boolean;
    public constructor(projectId?: string, pageSize?: number) { 
        this['project_id'] = projectId;
        this['page_size'] = pageSize;
    }
    public withProjectId(projectId: string): ListTestReportsByConditionRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPageSize(pageSize: number): ListTestReportsByConditionRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPageNo(pageNo: string): ListTestReportsByConditionRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: string  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): string | undefined {
        return this['page_no'];
    }
    public withKeyWord(keyWord: string): ListTestReportsByConditionRequest {
        this['key_word'] = keyWord;
        return this;
    }
    public set keyWord(keyWord: string  | undefined) {
        this['key_word'] = keyWord;
    }
    public get keyWord(): string | undefined {
        return this['key_word'];
    }
    public withOwn(own: boolean): ListTestReportsByConditionRequest {
        this['own'] = own;
        return this;
    }
}