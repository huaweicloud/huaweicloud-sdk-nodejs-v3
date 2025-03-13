import { DataClassificationSingleRuleDTO } from './DataClassificationSingleRuleDTO';


export class DataClassificationCombineRuleDTO {
    public name?: string;
    private 'secrecy_level_id'?: string;
    private 'combine_expression'?: string;
    public description?: string;
    private 'category_id'?: string;
    public enable?: boolean;
    private 'single_expressions'?: Array<DataClassificationSingleRuleDTO>;
    public constructor(name?: string, secrecyLevelId?: string, combineExpression?: string, singleExpressions?: Array<DataClassificationSingleRuleDTO>) { 
        this['name'] = name;
        this['secrecy_level_id'] = secrecyLevelId;
        this['combine_expression'] = combineExpression;
        this['single_expressions'] = singleExpressions;
    }
    public withName(name: string): DataClassificationCombineRuleDTO {
        this['name'] = name;
        return this;
    }
    public withSecrecyLevelId(secrecyLevelId: string): DataClassificationCombineRuleDTO {
        this['secrecy_level_id'] = secrecyLevelId;
        return this;
    }
    public set secrecyLevelId(secrecyLevelId: string  | undefined) {
        this['secrecy_level_id'] = secrecyLevelId;
    }
    public get secrecyLevelId(): string | undefined {
        return this['secrecy_level_id'];
    }
    public withCombineExpression(combineExpression: string): DataClassificationCombineRuleDTO {
        this['combine_expression'] = combineExpression;
        return this;
    }
    public set combineExpression(combineExpression: string  | undefined) {
        this['combine_expression'] = combineExpression;
    }
    public get combineExpression(): string | undefined {
        return this['combine_expression'];
    }
    public withDescription(description: string): DataClassificationCombineRuleDTO {
        this['description'] = description;
        return this;
    }
    public withCategoryId(categoryId: string): DataClassificationCombineRuleDTO {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: string  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): string | undefined {
        return this['category_id'];
    }
    public withEnable(enable: boolean): DataClassificationCombineRuleDTO {
        this['enable'] = enable;
        return this;
    }
    public withSingleExpressions(singleExpressions: Array<DataClassificationSingleRuleDTO>): DataClassificationCombineRuleDTO {
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