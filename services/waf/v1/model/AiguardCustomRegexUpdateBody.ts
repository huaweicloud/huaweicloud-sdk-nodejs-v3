

export class AiguardCustomRegexUpdateBody {
    public name?: string;
    private 'regex_expression'?: string;
    public constructor() { 
    }
    public withName(name: string): AiguardCustomRegexUpdateBody {
        this['name'] = name;
        return this;
    }
    public withRegexExpression(regexExpression: string): AiguardCustomRegexUpdateBody {
        this['regex_expression'] = regexExpression;
        return this;
    }
    public set regexExpression(regexExpression: string  | undefined) {
        this['regex_expression'] = regexExpression;
    }
    public get regexExpression(): string | undefined {
        return this['regex_expression'];
    }
}