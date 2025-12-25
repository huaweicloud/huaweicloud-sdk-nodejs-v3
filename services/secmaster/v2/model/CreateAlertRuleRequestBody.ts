import { IsapJobMode } from './IsapJobMode';
import { IsapJobModeSettingDto } from './IsapJobModeSettingDto';
import { IsapJobOutputSetting } from './IsapJobOutputSetting';
import { JobEnvironment } from './JobEnvironment';
import { JobStatus } from './JobStatus';


export class CreateAlertRuleRequestBody {
    private 'alert_rule_name'?: string;
    public description?: string;
    public directory?: string;
    public script?: string;
    public status?: JobStatus;
    private 'job_mode'?: IsapJobMode;
    private 'job_mode_setting'?: IsapJobModeSettingDto;
    public environment?: JobEnvironment;
    private 'job_output_setting'?: IsapJobOutputSetting;
    private 'output_table_id'?: string;
    private 'output_table_name'?: string;
    private 'cu_quota_amount'?: number;
    private 'output_table_ids'?: Array<string>;
    private 'output_table_names'?: Array<string>;
    public constructor(alertRuleName?: string, description?: string, status?: JobStatus, jobMode?: IsapJobMode, environment?: JobEnvironment, outputTableId?: string, cuQuotaAmount?: number, outputTableIds?: Array<string>, outputTableNames?: Array<string>) { 
        this['alert_rule_name'] = alertRuleName;
        this['description'] = description;
        this['status'] = status;
        this['job_mode'] = jobMode;
        this['environment'] = environment;
        this['output_table_id'] = outputTableId;
        this['cu_quota_amount'] = cuQuotaAmount;
        this['output_table_ids'] = outputTableIds;
        this['output_table_names'] = outputTableNames;
    }
    public withAlertRuleName(alertRuleName: string): CreateAlertRuleRequestBody {
        this['alert_rule_name'] = alertRuleName;
        return this;
    }
    public set alertRuleName(alertRuleName: string  | undefined) {
        this['alert_rule_name'] = alertRuleName;
    }
    public get alertRuleName(): string | undefined {
        return this['alert_rule_name'];
    }
    public withDescription(description: string): CreateAlertRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withDirectory(directory: string): CreateAlertRuleRequestBody {
        this['directory'] = directory;
        return this;
    }
    public withScript(script: string): CreateAlertRuleRequestBody {
        this['script'] = script;
        return this;
    }
    public withStatus(status: JobStatus): CreateAlertRuleRequestBody {
        this['status'] = status;
        return this;
    }
    public withJobMode(jobMode: IsapJobMode): CreateAlertRuleRequestBody {
        this['job_mode'] = jobMode;
        return this;
    }
    public set jobMode(jobMode: IsapJobMode  | undefined) {
        this['job_mode'] = jobMode;
    }
    public get jobMode(): IsapJobMode | undefined {
        return this['job_mode'];
    }
    public withJobModeSetting(jobModeSetting: IsapJobModeSettingDto): CreateAlertRuleRequestBody {
        this['job_mode_setting'] = jobModeSetting;
        return this;
    }
    public set jobModeSetting(jobModeSetting: IsapJobModeSettingDto  | undefined) {
        this['job_mode_setting'] = jobModeSetting;
    }
    public get jobModeSetting(): IsapJobModeSettingDto | undefined {
        return this['job_mode_setting'];
    }
    public withEnvironment(environment: JobEnvironment): CreateAlertRuleRequestBody {
        this['environment'] = environment;
        return this;
    }
    public withJobOutputSetting(jobOutputSetting: IsapJobOutputSetting): CreateAlertRuleRequestBody {
        this['job_output_setting'] = jobOutputSetting;
        return this;
    }
    public set jobOutputSetting(jobOutputSetting: IsapJobOutputSetting  | undefined) {
        this['job_output_setting'] = jobOutputSetting;
    }
    public get jobOutputSetting(): IsapJobOutputSetting | undefined {
        return this['job_output_setting'];
    }
    public withOutputTableId(outputTableId: string): CreateAlertRuleRequestBody {
        this['output_table_id'] = outputTableId;
        return this;
    }
    public set outputTableId(outputTableId: string  | undefined) {
        this['output_table_id'] = outputTableId;
    }
    public get outputTableId(): string | undefined {
        return this['output_table_id'];
    }
    public withOutputTableName(outputTableName: string): CreateAlertRuleRequestBody {
        this['output_table_name'] = outputTableName;
        return this;
    }
    public set outputTableName(outputTableName: string  | undefined) {
        this['output_table_name'] = outputTableName;
    }
    public get outputTableName(): string | undefined {
        return this['output_table_name'];
    }
    public withCuQuotaAmount(cuQuotaAmount: number): CreateAlertRuleRequestBody {
        this['cu_quota_amount'] = cuQuotaAmount;
        return this;
    }
    public set cuQuotaAmount(cuQuotaAmount: number  | undefined) {
        this['cu_quota_amount'] = cuQuotaAmount;
    }
    public get cuQuotaAmount(): number | undefined {
        return this['cu_quota_amount'];
    }
    public withOutputTableIds(outputTableIds: Array<string>): CreateAlertRuleRequestBody {
        this['output_table_ids'] = outputTableIds;
        return this;
    }
    public set outputTableIds(outputTableIds: Array<string>  | undefined) {
        this['output_table_ids'] = outputTableIds;
    }
    public get outputTableIds(): Array<string> | undefined {
        return this['output_table_ids'];
    }
    public withOutputTableNames(outputTableNames: Array<string>): CreateAlertRuleRequestBody {
        this['output_table_names'] = outputTableNames;
        return this;
    }
    public set outputTableNames(outputTableNames: Array<string>  | undefined) {
        this['output_table_names'] = outputTableNames;
    }
    public get outputTableNames(): Array<string> | undefined {
        return this['output_table_names'];
    }
}