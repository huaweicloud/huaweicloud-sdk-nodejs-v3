

export class RuleProfileDto {
    public url?: string;
    public constructor() { 
    }
    public withUrl(url: string): RuleProfileDto {
        this['url'] = url;
        return this;
    }
}