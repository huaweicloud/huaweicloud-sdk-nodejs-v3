import { DataClassificationCombineRuleCheckDTOCombineInputData } from './DataClassificationCombineRuleCheckDTOCombineInputData';
import { DataClassificationSingleRuleDTO } from './DataClassificationSingleRuleDTO';


export class DataClassificationCombineRuleCheckDTO {
    public expression?: string;
    private 'combine_input_data'?: DataClassificationCombineRuleCheckDTOCombineInputData;
    public combine?: boolean;
    private 'single_rule_check_list'?: Array<DataClassificationSingleRuleDTO>;
    public constructor() { 
    }
    public withExpression(expression: string): DataClassificationCombineRuleCheckDTO {
        this['expression'] = expression;
        return this;
    }
    public withCombineInputData(combineInputData: DataClassificationCombineRuleCheckDTOCombineInputData): DataClassificationCombineRuleCheckDTO {
        this['combine_input_data'] = combineInputData;
        return this;
    }
    public set combineInputData(combineInputData: DataClassificationCombineRuleCheckDTOCombineInputData  | undefined) {
        this['combine_input_data'] = combineInputData;
    }
    public get combineInputData(): DataClassificationCombineRuleCheckDTOCombineInputData | undefined {
        return this['combine_input_data'];
    }
    public withCombine(combine: boolean): DataClassificationCombineRuleCheckDTO {
        this['combine'] = combine;
        return this;
    }
    public withSingleRuleCheckList(singleRuleCheckList: Array<DataClassificationSingleRuleDTO>): DataClassificationCombineRuleCheckDTO {
        this['single_rule_check_list'] = singleRuleCheckList;
        return this;
    }
    public set singleRuleCheckList(singleRuleCheckList: Array<DataClassificationSingleRuleDTO>  | undefined) {
        this['single_rule_check_list'] = singleRuleCheckList;
    }
    public get singleRuleCheckList(): Array<DataClassificationSingleRuleDTO> | undefined {
        return this['single_rule_check_list'];
    }
}