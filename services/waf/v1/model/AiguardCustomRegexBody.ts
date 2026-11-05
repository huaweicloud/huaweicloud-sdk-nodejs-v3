

export class AiguardCustomRegexBody {
    public name?: string;
    private 'regex_expression'?: string;
    public constructor(name?: string, regexExpression?: string) { 
        this['name'] = name;
        this['regex_expression'] = regexExpression;
    }
    public withName(name: string): AiguardCustomRegexBody {
        this['name'] = name;
        return this;
    }
    public withRegexExpression(regexExpression: string): AiguardCustomRegexBody {
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