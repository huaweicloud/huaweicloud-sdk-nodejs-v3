import { PrecheckResult } from './PrecheckResult';


export class QueryPreCheckResp {
    private 'precheck_id'?: string | undefined;
    public result?: boolean;
    public process?: string;
    private 'total_passed_rate'?: string | undefined;
    private 'rds_instance_id'?: string | undefined;
    private 'job_direction'?: QueryPreCheckRespJobDirectionEnum | undefined;
    private 'precheck_result'?: Array<PrecheckResult> | undefined;
    private 'error_msg'?: string | undefined;
    private 'error_code'?: string | undefined;
    public constructor() { 
    }
    public withPrecheckId(precheckId: string): QueryPreCheckResp {
        this['precheck_id'] = precheckId;
        return this;
    }
    public set precheckId(precheckId: string | undefined) {
        this['precheck_id'] = precheckId;
    }
    public get precheckId() {
        return this['precheck_id'];
    }
    public withResult(result: boolean): QueryPreCheckResp {
        this['result'] = result;
        return this;
    }
    public withProcess(process: string): QueryPreCheckResp {
        this['process'] = process;
        return this;
    }
    public withTotalPassedRate(totalPassedRate: string): QueryPreCheckResp {
        this['total_passed_rate'] = totalPassedRate;
        return this;
    }
    public set totalPassedRate(totalPassedRate: string | undefined) {
        this['total_passed_rate'] = totalPassedRate;
    }
    public get totalPassedRate() {
        return this['total_passed_rate'];
    }
    public withRdsInstanceId(rdsInstanceId: string): QueryPreCheckResp {
        this['rds_instance_id'] = rdsInstanceId;
        return this;
    }
    public set rdsInstanceId(rdsInstanceId: string | undefined) {
        this['rds_instance_id'] = rdsInstanceId;
    }
    public get rdsInstanceId() {
        return this['rds_instance_id'];
    }
    public withJobDirection(jobDirection: QueryPreCheckRespJobDirectionEnum): QueryPreCheckResp {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: QueryPreCheckRespJobDirectionEnum | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection() {
        return this['job_direction'];
    }
    public withPrecheckResult(precheckResult: Array<PrecheckResult>): QueryPreCheckResp {
        this['precheck_result'] = precheckResult;
        return this;
    }
    public set precheckResult(precheckResult: Array<PrecheckResult> | undefined) {
        this['precheck_result'] = precheckResult;
    }
    public get precheckResult() {
        return this['precheck_result'];
    }
    public withErrorMsg(errorMsg: string): QueryPreCheckResp {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg() {
        return this['error_msg'];
    }
    public withErrorCode(errorCode: string): QueryPreCheckResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QueryPreCheckRespJobDirectionEnum {
    UP = 'up',
    DOWN = 'down',
    NON_DBS = 'non-dbs'
}
