

export class UserTagDTO {
    private 'match_field'?: string;
    private 'match_field_index'?: string;
    public constructor() { 
    }
    public withMatchField(matchField: string): UserTagDTO {
        this['match_field'] = matchField;
        return this;
    }
    public set matchField(matchField: string  | undefined) {
        this['match_field'] = matchField;
    }
    public get matchField(): string | undefined {
        return this['match_field'];
    }
    public withMatchFieldIndex(matchFieldIndex: string): UserTagDTO {
        this['match_field_index'] = matchFieldIndex;
        return this;
    }
    public set matchFieldIndex(matchFieldIndex: string  | undefined) {
        this['match_field_index'] = matchFieldIndex;
    }
    public get matchFieldIndex(): string | undefined {
        return this['match_field_index'];
    }
}