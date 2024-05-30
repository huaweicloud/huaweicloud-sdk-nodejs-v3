import { StatisticSchema } from './StatisticSchema';


export class StatisticInfo {
    private 'atomic_index'?: StatisticSchema;
    private 'derivative_index'?: StatisticSchema;
    private 'compound_metric'?: StatisticSchema;
    private 'biz_index'?: StatisticSchema;
    public dimension?: StatisticSchema;
    private 'condition_group'?: StatisticSchema;
    private 'time_condition'?: StatisticSchema;
    private 'common_condition'?: StatisticSchema;
    private 'dimension_logic_table'?: StatisticSchema;
    private 'fact_logic_table'?: StatisticSchema;
    private 'aggregation_logic_table'?: StatisticSchema;
    private 'data_standard'?: StatisticSchema;
    private 'table_model'?: StatisticSchema;
    private 'lookup_table'?: StatisticSchema;
    private 'pending_review'?: number;
    private 'my_applications'?: number;
    public constructor() { 
    }
    public withAtomicIndex(atomicIndex: StatisticSchema): StatisticInfo {
        this['atomic_index'] = atomicIndex;
        return this;
    }
    public set atomicIndex(atomicIndex: StatisticSchema  | undefined) {
        this['atomic_index'] = atomicIndex;
    }
    public get atomicIndex(): StatisticSchema | undefined {
        return this['atomic_index'];
    }
    public withDerivativeIndex(derivativeIndex: StatisticSchema): StatisticInfo {
        this['derivative_index'] = derivativeIndex;
        return this;
    }
    public set derivativeIndex(derivativeIndex: StatisticSchema  | undefined) {
        this['derivative_index'] = derivativeIndex;
    }
    public get derivativeIndex(): StatisticSchema | undefined {
        return this['derivative_index'];
    }
    public withCompoundMetric(compoundMetric: StatisticSchema): StatisticInfo {
        this['compound_metric'] = compoundMetric;
        return this;
    }
    public set compoundMetric(compoundMetric: StatisticSchema  | undefined) {
        this['compound_metric'] = compoundMetric;
    }
    public get compoundMetric(): StatisticSchema | undefined {
        return this['compound_metric'];
    }
    public withBizIndex(bizIndex: StatisticSchema): StatisticInfo {
        this['biz_index'] = bizIndex;
        return this;
    }
    public set bizIndex(bizIndex: StatisticSchema  | undefined) {
        this['biz_index'] = bizIndex;
    }
    public get bizIndex(): StatisticSchema | undefined {
        return this['biz_index'];
    }
    public withDimension(dimension: StatisticSchema): StatisticInfo {
        this['dimension'] = dimension;
        return this;
    }
    public withConditionGroup(conditionGroup: StatisticSchema): StatisticInfo {
        this['condition_group'] = conditionGroup;
        return this;
    }
    public set conditionGroup(conditionGroup: StatisticSchema  | undefined) {
        this['condition_group'] = conditionGroup;
    }
    public get conditionGroup(): StatisticSchema | undefined {
        return this['condition_group'];
    }
    public withTimeCondition(timeCondition: StatisticSchema): StatisticInfo {
        this['time_condition'] = timeCondition;
        return this;
    }
    public set timeCondition(timeCondition: StatisticSchema  | undefined) {
        this['time_condition'] = timeCondition;
    }
    public get timeCondition(): StatisticSchema | undefined {
        return this['time_condition'];
    }
    public withCommonCondition(commonCondition: StatisticSchema): StatisticInfo {
        this['common_condition'] = commonCondition;
        return this;
    }
    public set commonCondition(commonCondition: StatisticSchema  | undefined) {
        this['common_condition'] = commonCondition;
    }
    public get commonCondition(): StatisticSchema | undefined {
        return this['common_condition'];
    }
    public withDimensionLogicTable(dimensionLogicTable: StatisticSchema): StatisticInfo {
        this['dimension_logic_table'] = dimensionLogicTable;
        return this;
    }
    public set dimensionLogicTable(dimensionLogicTable: StatisticSchema  | undefined) {
        this['dimension_logic_table'] = dimensionLogicTable;
    }
    public get dimensionLogicTable(): StatisticSchema | undefined {
        return this['dimension_logic_table'];
    }
    public withFactLogicTable(factLogicTable: StatisticSchema): StatisticInfo {
        this['fact_logic_table'] = factLogicTable;
        return this;
    }
    public set factLogicTable(factLogicTable: StatisticSchema  | undefined) {
        this['fact_logic_table'] = factLogicTable;
    }
    public get factLogicTable(): StatisticSchema | undefined {
        return this['fact_logic_table'];
    }
    public withAggregationLogicTable(aggregationLogicTable: StatisticSchema): StatisticInfo {
        this['aggregation_logic_table'] = aggregationLogicTable;
        return this;
    }
    public set aggregationLogicTable(aggregationLogicTable: StatisticSchema  | undefined) {
        this['aggregation_logic_table'] = aggregationLogicTable;
    }
    public get aggregationLogicTable(): StatisticSchema | undefined {
        return this['aggregation_logic_table'];
    }
    public withDataStandard(dataStandard: StatisticSchema): StatisticInfo {
        this['data_standard'] = dataStandard;
        return this;
    }
    public set dataStandard(dataStandard: StatisticSchema  | undefined) {
        this['data_standard'] = dataStandard;
    }
    public get dataStandard(): StatisticSchema | undefined {
        return this['data_standard'];
    }
    public withTableModel(tableModel: StatisticSchema): StatisticInfo {
        this['table_model'] = tableModel;
        return this;
    }
    public set tableModel(tableModel: StatisticSchema  | undefined) {
        this['table_model'] = tableModel;
    }
    public get tableModel(): StatisticSchema | undefined {
        return this['table_model'];
    }
    public withLookupTable(lookupTable: StatisticSchema): StatisticInfo {
        this['lookup_table'] = lookupTable;
        return this;
    }
    public set lookupTable(lookupTable: StatisticSchema  | undefined) {
        this['lookup_table'] = lookupTable;
    }
    public get lookupTable(): StatisticSchema | undefined {
        return this['lookup_table'];
    }
    public withPendingReview(pendingReview: number): StatisticInfo {
        this['pending_review'] = pendingReview;
        return this;
    }
    public set pendingReview(pendingReview: number  | undefined) {
        this['pending_review'] = pendingReview;
    }
    public get pendingReview(): number | undefined {
        return this['pending_review'];
    }
    public withMyApplications(myApplications: number): StatisticInfo {
        this['my_applications'] = myApplications;
        return this;
    }
    public set myApplications(myApplications: number  | undefined) {
        this['my_applications'] = myApplications;
    }
    public get myApplications(): number | undefined {
        return this['my_applications'];
    }
}