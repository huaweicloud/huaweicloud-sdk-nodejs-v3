import { AlertRuleJobSetting } from './AlertRuleJobSetting';
import { AlertRuleProcessError } from './AlertRuleProcessError';
import { IsapJobMode } from './IsapJobMode';
import { IsapJobModeSettingVo } from './IsapJobModeSettingVo';
import { JobEnvironment } from './JobEnvironment';
import { JobProcessStatus } from './JobProcessStatus';
import { JobStatus } from './JobStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAlertRuleResponse extends SdkResponse {
    private 'alert_rule_id'?: string;
    private 'alert_rule_name'?: string;
    public script?: string;
    public status?: JobStatus;
    public directory?: string;
    public description?: string;
    private 'job_mode'?: IsapJobMode;
    private 'job_mode_setting'?: IsapJobModeSettingVo;
    private 'job_output_setting'?: AlertRuleJobSetting;
    private 'process_status'?: JobProcessStatus;
    private 'process_error'?: AlertRuleProcessError;
    public environment?: JobEnvironment;
    private 'output_table_id'?: string;
    private 'output_table_name'?: string;
    private 'output_table_ids'?: Array<string>;
    private 'output_table_names'?: Array<string>;
    private 'create_by'?: string;
    private 'create_time'?: number;
    private 'update_by'?: string;
    private 'update_time'?: number;
    private 'delete_time'?: number;
    public constructor() { 
        super();
    }
    public withAlertRuleId(alertRuleId: string): CreateAlertRuleResponse {
        this['alert_rule_id'] = alertRuleId;
        return this;
    }
    public set alertRuleId(alertRuleId: string  | undefined) {
        this['alert_rule_id'] = alertRuleId;
    }
    public get alertRuleId(): string | undefined {
        return this['alert_rule_id'];
    }
    public withAlertRuleName(alertRuleName: string): CreateAlertRuleResponse {
        this['alert_rule_name'] = alertRuleName;
        return this;
    }
    public set alertRuleName(alertRuleName: string  | undefined) {
        this['alert_rule_name'] = alertRuleName;
    }
    public get alertRuleName(): string | undefined {
        return this['alert_rule_name'];
    }
    public withScript(script: string): CreateAlertRuleResponse {
        this['script'] = script;
        return this;
    }
    public withStatus(status: JobStatus): CreateAlertRuleResponse {
        this['status'] = status;
        return this;
    }
    public withDirectory(directory: string): CreateAlertRuleResponse {
        this['directory'] = directory;
        return this;
    }
    public withDescription(description: string): CreateAlertRuleResponse {
        this['description'] = description;
        return this;
    }
    public withJobMode(jobMode: IsapJobMode): CreateAlertRuleResponse {
        this['job_mode'] = jobMode;
        return this;
    }
    public set jobMode(jobMode: IsapJobMode  | undefined) {
        this['job_mode'] = jobMode;
    }
    public get jobMode(): IsapJobMode | undefined {
        return this['job_mode'];
    }
    public withJobModeSetting(jobModeSetting: IsapJobModeSettingVo): CreateAlertRuleResponse {
        this['job_mode_setting'] = jobModeSetting;
        return this;
    }
    public set jobModeSetting(jobModeSetting: IsapJobModeSettingVo  | undefined) {
        this['job_mode_setting'] = jobModeSetting;
    }
    public get jobModeSetting(): IsapJobModeSettingVo | undefined {
        return this['job_mode_setting'];
    }
    public withJobOutputSetting(jobOutputSetting: AlertRuleJobSetting): CreateAlertRuleResponse {
        this['job_output_setting'] = jobOutputSetting;
        return this;
    }
    public set jobOutputSetting(jobOutputSetting: AlertRuleJobSetting  | undefined) {
        this['job_output_setting'] = jobOutputSetting;
    }
    public get jobOutputSetting(): AlertRuleJobSetting | undefined {
        return this['job_output_setting'];
    }
    public withProcessStatus(processStatus: JobProcessStatus): CreateAlertRuleResponse {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: JobProcessStatus  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): JobProcessStatus | undefined {
        return this['process_status'];
    }
    public withProcessError(processError: AlertRuleProcessError): CreateAlertRuleResponse {
        this['process_error'] = processError;
        return this;
    }
    public set processError(processError: AlertRuleProcessError  | undefined) {
        this['process_error'] = processError;
    }
    public get processError(): AlertRuleProcessError | undefined {
        return this['process_error'];
    }
    public withEnvironment(environment: JobEnvironment): CreateAlertRuleResponse {
        this['environment'] = environment;
        return this;
    }
    public withOutputTableId(outputTableId: string): CreateAlertRuleResponse {
        this['output_table_id'] = outputTableId;
        return this;
    }
    public set outputTableId(outputTableId: string  | undefined) {
        this['output_table_id'] = outputTableId;
    }
    public get outputTableId(): string | undefined {
        return this['output_table_id'];
    }
    public withOutputTableName(outputTableName: string): CreateAlertRuleResponse {
        this['output_table_name'] = outputTableName;
        return this;
    }
    public set outputTableName(outputTableName: string  | undefined) {
        this['output_table_name'] = outputTableName;
    }
    public get outputTableName(): string | undefined {
        return this['output_table_name'];
    }
    public withOutputTableIds(outputTableIds: Array<string>): CreateAlertRuleResponse {
        this['output_table_ids'] = outputTableIds;
        return this;
    }
    public set outputTableIds(outputTableIds: Array<string>  | undefined) {
        this['output_table_ids'] = outputTableIds;
    }
    public get outputTableIds(): Array<string> | undefined {
        return this['output_table_ids'];
    }
    public withOutputTableNames(outputTableNames: Array<string>): CreateAlertRuleResponse {
        this['output_table_names'] = outputTableNames;
        return this;
    }
    public set outputTableNames(outputTableNames: Array<string>  | undefined) {
        this['output_table_names'] = outputTableNames;
    }
    public get outputTableNames(): Array<string> | undefined {
        return this['output_table_names'];
    }
    public withCreateBy(createBy: string): CreateAlertRuleResponse {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: number): CreateAlertRuleResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateBy(updateBy: string): CreateAlertRuleResponse {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withUpdateTime(updateTime: number): CreateAlertRuleResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withDeleteTime(deleteTime: number): CreateAlertRuleResponse {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: number  | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime(): number | undefined {
        return this['delete_time'];
    }
}