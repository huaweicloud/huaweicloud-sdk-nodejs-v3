import { IndicatorDataObjectDetailDataSource } from './IndicatorDataObjectDetailDataSource';
import { IndicatorDataObjectDetailEnvironment } from './IndicatorDataObjectDetailEnvironment';
import { IndicatorDataObjectDetailIndicatorType } from './IndicatorDataObjectDetailIndicatorType';


export class IndicatorDataObjectDetail {
    private 'indicator_type'?: IndicatorDataObjectDetailIndicatorType;
    public value?: string;
    private 'update_time'?: string;
    private 'create_time'?: string;
    public environment?: IndicatorDataObjectDetailEnvironment;
    private 'data_source'?: IndicatorDataObjectDetailDataSource;
    private 'first_report_time'?: string;
    private 'is_deleted'?: boolean;
    private 'last_report_time'?: string;
    private 'granular_marking'?: number;
    public name?: string;
    public id?: string;
    private 'project_id'?: string;
    public revoked?: boolean;
    public status?: string;
    public verdict?: string;
    private 'workspace_id'?: string;
    public confidence?: number;
    public labels?: string;
    public defanged?: boolean;
    public constructor() { 
    }
    public withIndicatorType(indicatorType: IndicatorDataObjectDetailIndicatorType): IndicatorDataObjectDetail {
        this['indicator_type'] = indicatorType;
        return this;
    }
    public set indicatorType(indicatorType: IndicatorDataObjectDetailIndicatorType  | undefined) {
        this['indicator_type'] = indicatorType;
    }
    public get indicatorType(): IndicatorDataObjectDetailIndicatorType | undefined {
        return this['indicator_type'];
    }
    public withValue(value: string): IndicatorDataObjectDetail {
        this['value'] = value;
        return this;
    }
    public withUpdateTime(updateTime: string): IndicatorDataObjectDetail {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withCreateTime(createTime: string): IndicatorDataObjectDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withEnvironment(environment: IndicatorDataObjectDetailEnvironment): IndicatorDataObjectDetail {
        this['environment'] = environment;
        return this;
    }
    public withDataSource(dataSource: IndicatorDataObjectDetailDataSource): IndicatorDataObjectDetail {
        this['data_source'] = dataSource;
        return this;
    }
    public set dataSource(dataSource: IndicatorDataObjectDetailDataSource  | undefined) {
        this['data_source'] = dataSource;
    }
    public get dataSource(): IndicatorDataObjectDetailDataSource | undefined {
        return this['data_source'];
    }
    public withFirstReportTime(firstReportTime: string): IndicatorDataObjectDetail {
        this['first_report_time'] = firstReportTime;
        return this;
    }
    public set firstReportTime(firstReportTime: string  | undefined) {
        this['first_report_time'] = firstReportTime;
    }
    public get firstReportTime(): string | undefined {
        return this['first_report_time'];
    }
    public withIsDeleted(isDeleted: boolean): IndicatorDataObjectDetail {
        this['is_deleted'] = isDeleted;
        return this;
    }
    public set isDeleted(isDeleted: boolean  | undefined) {
        this['is_deleted'] = isDeleted;
    }
    public get isDeleted(): boolean | undefined {
        return this['is_deleted'];
    }
    public withLastReportTime(lastReportTime: string): IndicatorDataObjectDetail {
        this['last_report_time'] = lastReportTime;
        return this;
    }
    public set lastReportTime(lastReportTime: string  | undefined) {
        this['last_report_time'] = lastReportTime;
    }
    public get lastReportTime(): string | undefined {
        return this['last_report_time'];
    }
    public withGranularMarking(granularMarking: number): IndicatorDataObjectDetail {
        this['granular_marking'] = granularMarking;
        return this;
    }
    public set granularMarking(granularMarking: number  | undefined) {
        this['granular_marking'] = granularMarking;
    }
    public get granularMarking(): number | undefined {
        return this['granular_marking'];
    }
    public withName(name: string): IndicatorDataObjectDetail {
        this['name'] = name;
        return this;
    }
    public withId(id: string): IndicatorDataObjectDetail {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): IndicatorDataObjectDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRevoked(revoked: boolean): IndicatorDataObjectDetail {
        this['revoked'] = revoked;
        return this;
    }
    public withStatus(status: string): IndicatorDataObjectDetail {
        this['status'] = status;
        return this;
    }
    public withVerdict(verdict: string): IndicatorDataObjectDetail {
        this['verdict'] = verdict;
        return this;
    }
    public withWorkspaceId(workspaceId: string): IndicatorDataObjectDetail {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withConfidence(confidence: number): IndicatorDataObjectDetail {
        this['confidence'] = confidence;
        return this;
    }
    public withLabels(labels: string): IndicatorDataObjectDetail {
        this['labels'] = labels;
        return this;
    }
    public withDefanged(defanged: boolean): IndicatorDataObjectDetail {
        this['defanged'] = defanged;
        return this;
    }
}