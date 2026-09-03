

export class ShowBinlogParseRequestBody {
    private 'file_name'?: string;
    private 'cur_page'?: number;
    private 'per_page'?: number;
    public constructor(fileName?: string) { 
        this['file_name'] = fileName;
    }
    public withFileName(fileName: string): ShowBinlogParseRequestBody {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withCurPage(curPage: number): ShowBinlogParseRequestBody {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: number  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): number | undefined {
        return this['cur_page'];
    }
    public withPerPage(perPage: number): ShowBinlogParseRequestBody {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
}