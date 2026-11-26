

export class ClaimMatchValue {
    private 'match_value_string'?: string;
    private 'match_value_string_list'?: Array<string>;
    public constructor() { 
    }
    public withMatchValueString(matchValueString: string): ClaimMatchValue {
        this['match_value_string'] = matchValueString;
        return this;
    }
    public set matchValueString(matchValueString: string  | undefined) {
        this['match_value_string'] = matchValueString;
    }
    public get matchValueString(): string | undefined {
        return this['match_value_string'];
    }
    public withMatchValueStringList(matchValueStringList: Array<string>): ClaimMatchValue {
        this['match_value_string_list'] = matchValueStringList;
        return this;
    }
    public set matchValueStringList(matchValueStringList: Array<string>  | undefined) {
        this['match_value_string_list'] = matchValueStringList;
    }
    public get matchValueStringList(): Array<string> | undefined {
        return this['match_value_string_list'];
    }
}