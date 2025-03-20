

export class SliDetail {
    public id?: string;
    private 'sort_id'?: number;
    private 'sli_type'?: SliDetailSliTypeEnum | string;
    public name?: string;
    public description?: string;
    private 'comparison_operator'?: SliDetailComparisonOperatorEnum | string;
    private 'numerical_value'?: number;
    public unit?: SliDetailUnitEnum | string;
    public constructor(sliType?: string, name?: string, description?: string, comparisonOperator?: string, numericalValue?: number, unit?: string) { 
        this['sli_type'] = sliType;
        this['name'] = name;
        this['description'] = description;
        this['comparison_operator'] = comparisonOperator;
        this['numerical_value'] = numericalValue;
        this['unit'] = unit;
    }
    public withId(id: string): SliDetail {
        this['id'] = id;
        return this;
    }
    public withSortId(sortId: number): SliDetail {
        this['sort_id'] = sortId;
        return this;
    }
    public set sortId(sortId: number  | undefined) {
        this['sort_id'] = sortId;
    }
    public get sortId(): number | undefined {
        return this['sort_id'];
    }
    public withSliType(sliType: SliDetailSliTypeEnum | string): SliDetail {
        this['sli_type'] = sliType;
        return this;
    }
    public set sliType(sliType: SliDetailSliTypeEnum | string  | undefined) {
        this['sli_type'] = sliType;
    }
    public get sliType(): SliDetailSliTypeEnum | string | undefined {
        return this['sli_type'];
    }
    public withName(name: string): SliDetail {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): SliDetail {
        this['description'] = description;
        return this;
    }
    public withComparisonOperator(comparisonOperator: SliDetailComparisonOperatorEnum | string): SliDetail {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: SliDetailComparisonOperatorEnum | string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): SliDetailComparisonOperatorEnum | string | undefined {
        return this['comparison_operator'];
    }
    public withNumericalValue(numericalValue: number): SliDetail {
        this['numerical_value'] = numericalValue;
        return this;
    }
    public set numericalValue(numericalValue: number  | undefined) {
        this['numerical_value'] = numericalValue;
    }
    public get numericalValue(): number | undefined {
        return this['numerical_value'];
    }
    public withUnit(unit: SliDetailUnitEnum | string): SliDetail {
        this['unit'] = unit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SliDetailSliTypeEnum {
    REQUEST = 'REQUEST',
    INSTANCES = 'INSTANCES'
}
/**
    * @export
    * @enum {string}
    */
export enum SliDetailComparisonOperatorEnum {
    GREATER_THAN = 'GREATER_THAN',
    GREATER_THAN_OR_EQUAL_TO = 'GREATER_THAN_OR_EQUAL_TO',
    EQUALS = 'EQUALS',
    LESS_THAN = 'LESS_THAN',
    LESS_THAN_OR_EQUAL_TO = 'LESS_THAN_OR_EQUAL_TO'
}
/**
    * @export
    * @enum {string}
    */
export enum SliDetailUnitEnum {
    PERCENT_SIGN = 'PERCENT_SIGN',
    MILLISECONDS = 'MILLISECONDS',
    NUMBER_OF_REQUESTS_PER_SECOND = 'NUMBER_OF_REQUESTS_PER_SECOND'
}
