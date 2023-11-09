import { CreateIndicatorDetailDataSource } from './CreateIndicatorDetailDataSource';
import { CreateIndicatorDetailEnvironment } from './CreateIndicatorDetailEnvironment';
import { CreateIndicatorDetailIndicatorType } from './CreateIndicatorDetailIndicatorType';
import { DataClassRefPojo } from './DataClassRefPojo';
import { IndicatorDataObjectDetail } from './IndicatorDataObjectDetail';


export class CreateIndicatorDetail {
    private 'data_source'?: CreateIndicatorDetailDataSource;
    public verdict?: string;
    public confidence?: number;
    public status?: string;
    public labels?: string;
    public value?: string;
    private 'granular_marking'?: string;
    public environment?: CreateIndicatorDetailEnvironment;
    public defanged?: boolean;
    private 'first_report_time'?: string;
    private 'last_report_time'?: string;
    public id?: string;
    private 'indicator_type'?: CreateIndicatorDetailIndicatorType;
    public name?: string;
    private 'dataclass_id'?: string;
    private 'data_object'?: IndicatorDataObjectDetail;
    private 'workspace_id'?: string;
    private 'project_id'?: string;
    private 'layout_id'?: string;
    public dataclass?: DataClassRefPojo;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor(dataSource?: CreateIndicatorDetailDataSource, verdict?: string, value?: string, granularMarking?: string, environment?: CreateIndicatorDetailEnvironment, defanged?: boolean, firstReportTime?: string, indicatorType?: CreateIndicatorDetailIndicatorType, name?: string, workspaceId?: string) { 
        this['data_source'] = dataSource;
        this['verdict'] = verdict;
        this['value'] = value;
        this['granular_marking'] = granularMarking;
        this['environment'] = environment;
        this['defanged'] = defanged;
        this['first_report_time'] = firstReportTime;
        this['indicator_type'] = indicatorType;
        this['name'] = name;
        this['workspace_id'] = workspaceId;
    }
    public withDataSource(dataSource: CreateIndicatorDetailDataSource): CreateIndicatorDetail {
        this['data_source'] = dataSource;
        return this;
    }
    public set dataSource(dataSource: CreateIndicatorDetailDataSource  | undefined) {
        this['data_source'] = dataSource;
    }
    public get dataSource(): CreateIndicatorDetailDataSource | undefined {
        return this['data_source'];
    }
    public withVerdict(verdict: string): CreateIndicatorDetail {
        this['verdict'] = verdict;
        return this;
    }
    public withConfidence(confidence: number): CreateIndicatorDetail {
        this['confidence'] = confidence;
        return this;
    }
    public withStatus(status: string): CreateIndicatorDetail {
        this['status'] = status;
        return this;
    }
    public withLabels(labels: string): CreateIndicatorDetail {
        this['labels'] = labels;
        return this;
    }
    public withValue(value: string): CreateIndicatorDetail {
        this['value'] = value;
        return this;
    }
    public withGranularMarking(granularMarking: string): CreateIndicatorDetail {
        this['granular_marking'] = granularMarking;
        return this;
    }
    public set granularMarking(granularMarking: string  | undefined) {
        this['granular_marking'] = granularMarking;
    }
    public get granularMarking(): string | undefined {
        return this['granular_marking'];
    }
    public withEnvironment(environment: CreateIndicatorDetailEnvironment): CreateIndicatorDetail {
        this['environment'] = environment;
        return this;
    }
    public withDefanged(defanged: boolean): CreateIndicatorDetail {
        this['defanged'] = defanged;
        return this;
    }
    public withFirstReportTime(firstReportTime: string): CreateIndicatorDetail {
        this['first_report_time'] = firstReportTime;
        return this;
    }
    public set firstReportTime(firstReportTime: string  | undefined) {
        this['first_report_time'] = firstReportTime;
    }
    public get firstReportTime(): string | undefined {
        return this['first_report_time'];
    }
    public withLastReportTime(lastReportTime: string): CreateIndicatorDetail {
        this['last_report_time'] = lastReportTime;
        return this;
    }
    public set lastReportTime(lastReportTime: string  | undefined) {
        this['last_report_time'] = lastReportTime;
    }
    public get lastReportTime(): string | undefined {
        return this['last_report_time'];
    }
    public withId(id: string): CreateIndicatorDetail {
        this['id'] = id;
        return this;
    }
    public withIndicatorType(indicatorType: CreateIndicatorDetailIndicatorType): CreateIndicatorDetail {
        this['indicator_type'] = indicatorType;
        return this;
    }
    public set indicatorType(indicatorType: CreateIndicatorDetailIndicatorType  | undefined) {
        this['indicator_type'] = indicatorType;
    }
    public get indicatorType(): CreateIndicatorDetailIndicatorType | undefined {
        return this['indicator_type'];
    }
    public withName(name: string): CreateIndicatorDetail {
        this['name'] = name;
        return this;
    }
    public withDataclassId(dataclassId: string): CreateIndicatorDetail {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withDataObject(dataObject: IndicatorDataObjectDetail): CreateIndicatorDetail {
        this['data_object'] = dataObject;
        return this;
    }
    public set dataObject(dataObject: IndicatorDataObjectDetail  | undefined) {
        this['data_object'] = dataObject;
    }
    public get dataObject(): IndicatorDataObjectDetail | undefined {
        return this['data_object'];
    }
    public withWorkspaceId(workspaceId: string): CreateIndicatorDetail {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withProjectId(projectId: string): CreateIndicatorDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withLayoutId(layoutId: string): CreateIndicatorDetail {
        this['layout_id'] = layoutId;
        return this;
    }
    public set layoutId(layoutId: string  | undefined) {
        this['layout_id'] = layoutId;
    }
    public get layoutId(): string | undefined {
        return this['layout_id'];
    }
    public withDataclass(dataclass: DataClassRefPojo): CreateIndicatorDetail {
        this['dataclass'] = dataclass;
        return this;
    }
    public withCreateTime(createTime: string): CreateIndicatorDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CreateIndicatorDetail {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}