import { QueryDiagnosisResultDiagnosisResults } from './QueryDiagnosisResultDiagnosisResults';


export class QueryDiagnosisResult {
    public score?: number;
    public status?: string;
    public progress?: number;
    private 'error_msg'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public total?: number;
    private 'normal_count'?: number;
    private 'abnormal_count'?: number;
    private 'alarm_count'?: number;
    private 'failure_count'?: number;
    private 'timeout_count'?: number;
    private 'diagnosis_results'?: Array<QueryDiagnosisResultDiagnosisResults>;
    public constructor() { 
    }
    public withScore(score: number): QueryDiagnosisResult {
        this['score'] = score;
        return this;
    }
    public withStatus(status: string): QueryDiagnosisResult {
        this['status'] = status;
        return this;
    }
    public withProgress(progress: number): QueryDiagnosisResult {
        this['progress'] = progress;
        return this;
    }
    public withErrorMsg(errorMsg: string): QueryDiagnosisResult {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withStartTime(startTime: string): QueryDiagnosisResult {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): QueryDiagnosisResult {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withTotal(total: number): QueryDiagnosisResult {
        this['total'] = total;
        return this;
    }
    public withNormalCount(normalCount: number): QueryDiagnosisResult {
        this['normal_count'] = normalCount;
        return this;
    }
    public set normalCount(normalCount: number  | undefined) {
        this['normal_count'] = normalCount;
    }
    public get normalCount(): number | undefined {
        return this['normal_count'];
    }
    public withAbnormalCount(abnormalCount: number): QueryDiagnosisResult {
        this['abnormal_count'] = abnormalCount;
        return this;
    }
    public set abnormalCount(abnormalCount: number  | undefined) {
        this['abnormal_count'] = abnormalCount;
    }
    public get abnormalCount(): number | undefined {
        return this['abnormal_count'];
    }
    public withAlarmCount(alarmCount: number): QueryDiagnosisResult {
        this['alarm_count'] = alarmCount;
        return this;
    }
    public set alarmCount(alarmCount: number  | undefined) {
        this['alarm_count'] = alarmCount;
    }
    public get alarmCount(): number | undefined {
        return this['alarm_count'];
    }
    public withFailureCount(failureCount: number): QueryDiagnosisResult {
        this['failure_count'] = failureCount;
        return this;
    }
    public set failureCount(failureCount: number  | undefined) {
        this['failure_count'] = failureCount;
    }
    public get failureCount(): number | undefined {
        return this['failure_count'];
    }
    public withTimeoutCount(timeoutCount: number): QueryDiagnosisResult {
        this['timeout_count'] = timeoutCount;
        return this;
    }
    public set timeoutCount(timeoutCount: number  | undefined) {
        this['timeout_count'] = timeoutCount;
    }
    public get timeoutCount(): number | undefined {
        return this['timeout_count'];
    }
    public withDiagnosisResults(diagnosisResults: Array<QueryDiagnosisResultDiagnosisResults>): QueryDiagnosisResult {
        this['diagnosis_results'] = diagnosisResults;
        return this;
    }
    public set diagnosisResults(diagnosisResults: Array<QueryDiagnosisResultDiagnosisResults>  | undefined) {
        this['diagnosis_results'] = diagnosisResults;
    }
    public get diagnosisResults(): Array<QueryDiagnosisResultDiagnosisResults> | undefined {
        return this['diagnosis_results'];
    }
}