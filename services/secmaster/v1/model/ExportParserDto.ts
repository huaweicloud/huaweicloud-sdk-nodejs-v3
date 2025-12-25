

export class ExportParserDto {
    private 'parser_ids'?: Array<string>;
    public constructor(parserIds?: Array<string>) { 
        this['parser_ids'] = parserIds;
    }
    public withParserIds(parserIds: Array<string>): ExportParserDto {
        this['parser_ids'] = parserIds;
        return this;
    }
    public set parserIds(parserIds: Array<string>  | undefined) {
        this['parser_ids'] = parserIds;
    }
    public get parserIds(): Array<string> | undefined {
        return this['parser_ids'];
    }
}