import { IsapJobModeSettingDto } from './IsapJobModeSettingDto';
import { IsapJobOutputSetting } from './IsapJobOutputSetting';
import { JobEnvironment } from './JobEnvironment';
import { JobStatus } from './JobStatus';


export class UpdateAlertRuleRequestBody {
    private 'alert_rule_name'?: string;
    public description?: string;
    public directory?: string;
    public script?: string;
    public status?: JobStatus;
    private 'job_mode_setting'?: IsapJobModeSettingDto;
    private 'job_output_setting'?: IsapJobOutputSetting;
    public environment?: JobEnvironment;
    private 'output_table_id'?: string;
    private 'output_table_ids'?: Array<string>;
    private 'output_table_names'?: Array<string>;
    private 'publish_status'?: string;
    public constructor() { 
    }
    public withAlertRuleName(alertRuleName: string): UpdateAlertRuleRequestBody {
        this['alert_rule_name'] = alertRuleName;
        return this;
    }
    public set alertRuleName(alertRuleName: string  | undefined) {
        this['alert_rule_name'] = alertRuleName;
    }
    public get alertRuleName(): string | undefined {
        return this['alert_rule_name'];
    }
    public withDescription(description: string): UpdateAlertRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withDirectory(directory: string): UpdateAlertRuleRequestBody {
        this['directory'] = directory;
        return this;
    }
    public withScript(script: string): UpdateAlertRuleRequestBody {
        this['script'] = script;
        return this;
    }
    public withStatus(status: JobStatus): UpdateAlertRuleRequestBody {
        this['status'] = status;
        return this;
    }
    public withJobModeSetting(jobModeSetting: IsapJobModeSettingDto): UpdateAlertRuleRequestBody {
        this['job_mode_setting'] = jobModeSetting;
        return this;
    }
    public set jobModeSetting(jobModeSetting: IsapJobModeSettingDto  | undefined) {
        this['job_mode_setting'] = jobModeSetting;
    }
    public get jobModeSetting(): IsapJobModeSettingDto | undefined {
        return this['job_mode_setting'];
    }
    public withJobOutputSetting(jobOutputSetting: IsapJobOutputSetting): UpdateAlertRuleRequestBody {
        this['job_output_setting'] = jobOutputSetting;
        return this;
    }
    public set jobOutputSetting(jobOutputSetting: IsapJobOutputSetting  | undefined) {
        this['job_output_setting'] = jobOutputSetting;
    }
    public get jobOutputSetting(): IsapJobOutputSetting | undefined {
        return this['job_output_setting'];
    }
    public withEnvironment(environment: JobEnvironment): UpdateAlertRuleRequestBody {
        this['environment'] = environment;
        return this;
    }
    public withOutputTableId(outputTableId: string): UpdateAlertRuleRequestBody {
        this['output_table_id'] = outputTableId;
        return this;
    }
    public set outputTableId(outputTableId: string  | undefined) {
        this['output_table_id'] = outputTableId;
    }
    public get outputTableId(): string | undefined {
        return this['output_table_id'];
    }
    public withOutputTableIds(outputTableIds: Array<string>): UpdateAlertRuleRequestBody {
        this['output_table_ids'] = outputTableIds;
        return this;
    }
    public set outputTableIds(outputTableIds: Array<string>  | undefined) {
        this['output_table_ids'] = outputTableIds;
    }
    public get outputTableIds(): Array<string> | undefined {
        return this['output_table_ids'];
    }
    public withOutputTableNames(outputTableNames: Array<string>): UpdateAlertRuleRequestBody {
        this['output_table_names'] = outputTableNames;
        return this;
    }
    public set outputTableNames(outputTableNames: Array<string>  | undefined) {
        this['output_table_names'] = outputTableNames;
    }
    public get outputTableNames(): Array<string> | undefined {
        return this['output_table_names'];
    }
    public withPublishStatus(publishStatus: string): UpdateAlertRuleRequestBody {
        this['publish_status'] = publishStatus;
        return this;
    }
    public set publishStatus(publishStatus: string  | undefined) {
        this['publish_status'] = publishStatus;
    }
    public get publishStatus(): string | undefined {
        return this['publish_status'];
    }
}