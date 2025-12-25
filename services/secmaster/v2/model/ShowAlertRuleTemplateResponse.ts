import { AlertRuleEnvironment } from './AlertRuleEnvironment';
import { IsapJobMode } from './IsapJobMode';
import { IsapJobModeSettingVo } from './IsapJobModeSettingVo';
import { IsapJobOutputSetting } from './IsapJobOutputSetting';
import { ProcessError } from './ProcessError';
import { ProcessStatus } from './ProcessStatus';
import { QueryType } from './QueryType';
import { Status } from './Status';
import { Trigger } from './Trigger';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAlertRuleTemplateResponse extends SdkResponse {
    private 'accumulated_times'?: number;
    private 'create_by'?: string;
    private 'create_time'?: number;
    private 'cu_quota_amount'?: number;
    public description?: string;
    public environment?: AlertRuleEnvironment;
    private 'job_mode'?: IsapJobMode;
    private 'job_mode_setting'?: IsapJobModeSettingVo;
    private 'job_output_setting'?: IsapJobOutputSetting;
    private 'process_error'?: ProcessError;
    private 'process_status'?: ProcessStatus;
    private 'query_type'?: QueryType;
    public script?: string;
    public status?: Status;
    private 'table_name'?: string;
    private 'template_id'?: string;
    private 'template_name'?: string;
    public triggers?: Array<Trigger>;
    private 'update_by'?: string;
    private 'update_time'?: number;
    public constructor() { 
        super();
    }
    public withAccumulatedTimes(accumulatedTimes: number): ShowAlertRuleTemplateResponse {
        this['accumulated_times'] = accumulatedTimes;
        return this;
    }
    public set accumulatedTimes(accumulatedTimes: number  | undefined) {
        this['accumulated_times'] = accumulatedTimes;
    }
    public get accumulatedTimes(): number | undefined {
        return this['accumulated_times'];
    }
    public withCreateBy(createBy: string): ShowAlertRuleTemplateResponse {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: number): ShowAlertRuleTemplateResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCuQuotaAmount(cuQuotaAmount: number): ShowAlertRuleTemplateResponse {
        this['cu_quota_amount'] = cuQuotaAmount;
        return this;
    }
    public set cuQuotaAmount(cuQuotaAmount: number  | undefined) {
        this['cu_quota_amount'] = cuQuotaAmount;
    }
    public get cuQuotaAmount(): number | undefined {
        return this['cu_quota_amount'];
    }
    public withDescription(description: string): ShowAlertRuleTemplateResponse {
        this['description'] = description;
        return this;
    }
    public withEnvironment(environment: AlertRuleEnvironment): ShowAlertRuleTemplateResponse {
        this['environment'] = environment;
        return this;
    }
    public withJobMode(jobMode: IsapJobMode): ShowAlertRuleTemplateResponse {
        this['job_mode'] = jobMode;
        return this;
    }
    public set jobMode(jobMode: IsapJobMode  | undefined) {
        this['job_mode'] = jobMode;
    }
    public get jobMode(): IsapJobMode | undefined {
        return this['job_mode'];
    }
    public withJobModeSetting(jobModeSetting: IsapJobModeSettingVo): ShowAlertRuleTemplateResponse {
        this['job_mode_setting'] = jobModeSetting;
        return this;
    }
    public set jobModeSetting(jobModeSetting: IsapJobModeSettingVo  | undefined) {
        this['job_mode_setting'] = jobModeSetting;
    }
    public get jobModeSetting(): IsapJobModeSettingVo | undefined {
        return this['job_mode_setting'];
    }
    public withJobOutputSetting(jobOutputSetting: IsapJobOutputSetting): ShowAlertRuleTemplateResponse {
        this['job_output_setting'] = jobOutputSetting;
        return this;
    }
    public set jobOutputSetting(jobOutputSetting: IsapJobOutputSetting  | undefined) {
        this['job_output_setting'] = jobOutputSetting;
    }
    public get jobOutputSetting(): IsapJobOutputSetting | undefined {
        return this['job_output_setting'];
    }
    public withProcessError(processError: ProcessError): ShowAlertRuleTemplateResponse {
        this['process_error'] = processError;
        return this;
    }
    public set processError(processError: ProcessError  | undefined) {
        this['process_error'] = processError;
    }
    public get processError(): ProcessError | undefined {
        return this['process_error'];
    }
    public withProcessStatus(processStatus: ProcessStatus): ShowAlertRuleTemplateResponse {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: ProcessStatus  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): ProcessStatus | undefined {
        return this['process_status'];
    }
    public withQueryType(queryType: QueryType): ShowAlertRuleTemplateResponse {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: QueryType  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): QueryType | undefined {
        return this['query_type'];
    }
    public withScript(script: string): ShowAlertRuleTemplateResponse {
        this['script'] = script;
        return this;
    }
    public withStatus(status: Status): ShowAlertRuleTemplateResponse {
        this['status'] = status;
        return this;
    }
    public withTableName(tableName: string): ShowAlertRuleTemplateResponse {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withTemplateId(templateId: string): ShowAlertRuleTemplateResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): ShowAlertRuleTemplateResponse {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTriggers(triggers: Array<Trigger>): ShowAlertRuleTemplateResponse {
        this['triggers'] = triggers;
        return this;
    }
    public withUpdateBy(updateBy: string): ShowAlertRuleTemplateResponse {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withUpdateTime(updateTime: number): ShowAlertRuleTemplateResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}