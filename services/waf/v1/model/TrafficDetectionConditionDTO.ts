

export class TrafficDetectionConditionDTO {
    public id?: string;
    private 'match_field'?: string;
    private 'match_field_index'?: string;
    private 'logical_operator'?: string;
    private 'match_contents'?: Array<string>;
    private 'value_list_res'?: string;
    public constructor() { 
    }
    public withId(id: string): TrafficDetectionConditionDTO {
        this['id'] = id;
        return this;
    }
    public withMatchField(matchField: string): TrafficDetectionConditionDTO {
        this['match_field'] = matchField;
        return this;
    }
    public set matchField(matchField: string  | undefined) {
        this['match_field'] = matchField;
    }
    public get matchField(): string | undefined {
        return this['match_field'];
    }
    public withMatchFieldIndex(matchFieldIndex: string): TrafficDetectionConditionDTO {
        this['match_field_index'] = matchFieldIndex;
        return this;
    }
    public set matchFieldIndex(matchFieldIndex: string  | undefined) {
        this['match_field_index'] = matchFieldIndex;
    }
    public get matchFieldIndex(): string | undefined {
        return this['match_field_index'];
    }
    public withLogicalOperator(logicalOperator: string): TrafficDetectionConditionDTO {
        this['logical_operator'] = logicalOperator;
        return this;
    }
    public set logicalOperator(logicalOperator: string  | undefined) {
        this['logical_operator'] = logicalOperator;
    }
    public get logicalOperator(): string | undefined {
        return this['logical_operator'];
    }
    public withMatchContents(matchContents: Array<string>): TrafficDetectionConditionDTO {
        this['match_contents'] = matchContents;
        return this;
    }
    public set matchContents(matchContents: Array<string>  | undefined) {
        this['match_contents'] = matchContents;
    }
    public get matchContents(): Array<string> | undefined {
        return this['match_contents'];
    }
    public withValueListRes(valueListRes: string): TrafficDetectionConditionDTO {
        this['value_list_res'] = valueListRes;
        return this;
    }
    public set valueListRes(valueListRes: string  | undefined) {
        this['value_list_res'] = valueListRes;
    }
    public get valueListRes(): string | undefined {
        return this['value_list_res'];
    }
}