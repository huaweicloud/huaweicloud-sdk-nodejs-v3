

export class CreateFlinkSqlJobGraphRequestBody {
    private 'sql_body'?: string;
    private 'flink_version'?: CreateFlinkSqlJobGraphRequestBodyFlinkVersionEnum | string;
    private 'cu_number'?: number;
    private 'manager_cu_number'?: number;
    private 'parallel_number'?: number;
    private 'tm_cus'?: number;
    private 'tm_slot_num'?: number;
    private 'operator_config'?: string;
    private 'static_estimator'?: boolean;
    private 'job_type'?: string;
    private 'graph_type'?: CreateFlinkSqlJobGraphRequestBodyGraphTypeEnum | string;
    private 'static_estimator_config'?: string;
    public constructor(sqlBody?: string) { 
        this['sql_body'] = sqlBody;
    }
    public withSqlBody(sqlBody: string): CreateFlinkSqlJobGraphRequestBody {
        this['sql_body'] = sqlBody;
        return this;
    }
    public set sqlBody(sqlBody: string  | undefined) {
        this['sql_body'] = sqlBody;
    }
    public get sqlBody(): string | undefined {
        return this['sql_body'];
    }
    public withFlinkVersion(flinkVersion: CreateFlinkSqlJobGraphRequestBodyFlinkVersionEnum | string): CreateFlinkSqlJobGraphRequestBody {
        this['flink_version'] = flinkVersion;
        return this;
    }
    public set flinkVersion(flinkVersion: CreateFlinkSqlJobGraphRequestBodyFlinkVersionEnum | string  | undefined) {
        this['flink_version'] = flinkVersion;
    }
    public get flinkVersion(): CreateFlinkSqlJobGraphRequestBodyFlinkVersionEnum | string | undefined {
        return this['flink_version'];
    }
    public withCuNumber(cuNumber: number): CreateFlinkSqlJobGraphRequestBody {
        this['cu_number'] = cuNumber;
        return this;
    }
    public set cuNumber(cuNumber: number  | undefined) {
        this['cu_number'] = cuNumber;
    }
    public get cuNumber(): number | undefined {
        return this['cu_number'];
    }
    public withManagerCuNumber(managerCuNumber: number): CreateFlinkSqlJobGraphRequestBody {
        this['manager_cu_number'] = managerCuNumber;
        return this;
    }
    public set managerCuNumber(managerCuNumber: number  | undefined) {
        this['manager_cu_number'] = managerCuNumber;
    }
    public get managerCuNumber(): number | undefined {
        return this['manager_cu_number'];
    }
    public withParallelNumber(parallelNumber: number): CreateFlinkSqlJobGraphRequestBody {
        this['parallel_number'] = parallelNumber;
        return this;
    }
    public set parallelNumber(parallelNumber: number  | undefined) {
        this['parallel_number'] = parallelNumber;
    }
    public get parallelNumber(): number | undefined {
        return this['parallel_number'];
    }
    public withTmCus(tmCus: number): CreateFlinkSqlJobGraphRequestBody {
        this['tm_cus'] = tmCus;
        return this;
    }
    public set tmCus(tmCus: number  | undefined) {
        this['tm_cus'] = tmCus;
    }
    public get tmCus(): number | undefined {
        return this['tm_cus'];
    }
    public withTmSlotNum(tmSlotNum: number): CreateFlinkSqlJobGraphRequestBody {
        this['tm_slot_num'] = tmSlotNum;
        return this;
    }
    public set tmSlotNum(tmSlotNum: number  | undefined) {
        this['tm_slot_num'] = tmSlotNum;
    }
    public get tmSlotNum(): number | undefined {
        return this['tm_slot_num'];
    }
    public withOperatorConfig(operatorConfig: string): CreateFlinkSqlJobGraphRequestBody {
        this['operator_config'] = operatorConfig;
        return this;
    }
    public set operatorConfig(operatorConfig: string  | undefined) {
        this['operator_config'] = operatorConfig;
    }
    public get operatorConfig(): string | undefined {
        return this['operator_config'];
    }
    public withStaticEstimator(staticEstimator: boolean): CreateFlinkSqlJobGraphRequestBody {
        this['static_estimator'] = staticEstimator;
        return this;
    }
    public set staticEstimator(staticEstimator: boolean  | undefined) {
        this['static_estimator'] = staticEstimator;
    }
    public get staticEstimator(): boolean | undefined {
        return this['static_estimator'];
    }
    public withJobType(jobType: string): CreateFlinkSqlJobGraphRequestBody {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withGraphType(graphType: CreateFlinkSqlJobGraphRequestBodyGraphTypeEnum | string): CreateFlinkSqlJobGraphRequestBody {
        this['graph_type'] = graphType;
        return this;
    }
    public set graphType(graphType: CreateFlinkSqlJobGraphRequestBodyGraphTypeEnum | string  | undefined) {
        this['graph_type'] = graphType;
    }
    public get graphType(): CreateFlinkSqlJobGraphRequestBodyGraphTypeEnum | string | undefined {
        return this['graph_type'];
    }
    public withStaticEstimatorConfig(staticEstimatorConfig: string): CreateFlinkSqlJobGraphRequestBody {
        this['static_estimator_config'] = staticEstimatorConfig;
        return this;
    }
    public set staticEstimatorConfig(staticEstimatorConfig: string  | undefined) {
        this['static_estimator_config'] = staticEstimatorConfig;
    }
    public get staticEstimatorConfig(): string | undefined {
        return this['static_estimator_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateFlinkSqlJobGraphRequestBodyFlinkVersionEnum {
    E_1_1 = '1.1',
    E_1_12 = '1.12'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateFlinkSqlJobGraphRequestBodyGraphTypeEnum {
    SIMPLE_GRAPH = 'simple_graph',
    JOB_GRAPH = 'job_graph'
}
