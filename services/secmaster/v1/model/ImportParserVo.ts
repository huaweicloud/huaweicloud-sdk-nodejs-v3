

export class ImportParserVo {
    private 'file_name'?: string;
    private 'parser_title'?: string;
    public success?: boolean;
    public constructor() { 
    }
    public withFileName(fileName: string): ImportParserVo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withParserTitle(parserTitle: string): ImportParserVo {
        this['parser_title'] = parserTitle;
        return this;
    }
    public set parserTitle(parserTitle: string  | undefined) {
        this['parser_title'] = parserTitle;
    }
    public get parserTitle(): string | undefined {
        return this['parser_title'];
    }
    public withSuccess(success: boolean): ImportParserVo {
        this['success'] = success;
        return this;
    }
}