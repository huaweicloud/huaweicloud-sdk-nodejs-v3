

export class ParserTemplate {
    public description?: string;
    private 'parser_id'?: string;
    public title?: string;
    public constructor() { 
    }
    public withDescription(description: string): ParserTemplate {
        this['description'] = description;
        return this;
    }
    public withParserId(parserId: string): ParserTemplate {
        this['parser_id'] = parserId;
        return this;
    }
    public set parserId(parserId: string  | undefined) {
        this['parser_id'] = parserId;
    }
    public get parserId(): string | undefined {
        return this['parser_id'];
    }
    public withTitle(title: string): ParserTemplate {
        this['title'] = title;
        return this;
    }
}