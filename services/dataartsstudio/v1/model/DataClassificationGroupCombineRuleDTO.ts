import { DataClassificationSingleRuleDTO } from './DataClassificationSingleRuleDTO';


export class DataClassificationGroupCombineRuleDTO {
    public name?: string;
    private 'secrecy_level_id'?: string;
    private 'combine_expression'?: string;
    public description?: string;
    private 'category_id'?: string;
    public enable?: boolean;
    public method?: DataClassificationGroupCombineRuleDTOMethodEnum | string;
    private 'single_expressions'?: Array<DataClassificationSingleRuleDTO>;
    public constructor(name?: string, secrecyLevelId?: string, combineExpression?: string, method?: string, singleExpressions?: Array<DataClassificationSingleRuleDTO>) { 
        this['name'] = name;
        this['secrecy_level_id'] = secrecyLevelId;
        this['combine_expression'] = combineExpression;
        this['method'] = method;
        this['single_expressions'] = singleExpressions;
    }
    public withName(name: string): DataClassificationGroupCombineRuleDTO {
        this['name'] = name;
        return this;
    }
    public withSecrecyLevelId(secrecyLevelId: string): DataClassificationGroupCombineRuleDTO {
        this['secrecy_level_id'] = secrecyLevelId;
        return this;
    }
    public set secrecyLevelId(secrecyLevelId: string  | undefined) {
        this['secrecy_level_id'] = secrecyLevelId;
    }
    public get secrecyLevelId(): string | undefined {
        return this['secrecy_level_id'];
    }
    public withCombineExpression(combineExpression: string): DataClassificationGroupCombineRuleDTO {
        this['combine_expression'] = combineExpression;
        return this;
    }
    public set combineExpression(combineExpression: string  | undefined) {
        this['combine_expression'] = combineExpression;
    }
    public get combineExpression(): string | undefined {
        return this['combine_expression'];
    }
    public withDescription(description: string): DataClassificationGroupCombineRuleDTO {
        this['description'] = description;
        return this;
    }
    public withCategoryId(categoryId: string): DataClassificationGroupCombineRuleDTO {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: string  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): string | undefined {
        return this['category_id'];
    }
    public withEnable(enable: boolean): DataClassificationGroupCombineRuleDTO {
        this['enable'] = enable;
        return this;
    }
    public withMethod(method: DataClassificationGroupCombineRuleDTOMethodEnum | string): DataClassificationGroupCombineRuleDTO {
        this['method'] = method;
        return this;
    }
    public withSingleExpressions(singleExpressions: Array<DataClassificationSingleRuleDTO>): DataClassificationGroupCombineRuleDTO {
        this['single_expressions'] = singleExpressions;
        return this;
    }
    public set singleExpressions(singleExpressions: Array<DataClassificationSingleRuleDTO>  | undefined) {
        this['single_expressions'] = singleExpressions;
    }
    public get singleExpressions(): Array<DataClassificationSingleRuleDTO> | undefined {
        return this['single_expressions'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataClassificationGroupCombineRuleDTOMethodEnum {
    COMBINE = 'COMBINE'
}
