

export class PPTPageInfo {
    private 'page_no'?: number;
    private 'file_id'?: string;
    private 'page_content'?: string;
    public constructor() { 
    }
    public withPageNo(pageNo: number): PPTPageInfo {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withFileId(fileId: string): PPTPageInfo {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
    public withPageContent(pageContent: string): PPTPageInfo {
        this['page_content'] = pageContent;
        return this;
    }
    public set pageContent(pageContent: string  | undefined) {
        this['page_content'] = pageContent;
    }
    public get pageContent(): string | undefined {
        return this['page_content'];
    }
}