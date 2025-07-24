import { TaskCheckSettingsItem } from './TaskCheckSettingsItem';


export class ConfigTaskParameterBody {
    private 'check_id'?: number;
    private 'ruleset_id'?: string;
    public language?: string;
    public status?: string;
    private 'task_check_settings'?: Array<TaskCheckSettingsItem>;
    public constructor(checkId?: number, rulesetId?: string, language?: string, status?: string, taskCheckSettings?: Array<TaskCheckSettingsItem>) { 
        this['check_id'] = checkId;
        this['ruleset_id'] = rulesetId;
        this['language'] = language;
        this['status'] = status;
        this['task_check_settings'] = taskCheckSettings;
    }
    public withCheckId(checkId: number): ConfigTaskParameterBody {
        this['check_id'] = checkId;
        return this;
    }
    public set checkId(checkId: number  | undefined) {
        this['check_id'] = checkId;
    }
    public get checkId(): number | undefined {
        return this['check_id'];
    }
    public withRulesetId(rulesetId: string): ConfigTaskParameterBody {
        this['ruleset_id'] = rulesetId;
        return this;
    }
    public set rulesetId(rulesetId: string  | undefined) {
        this['ruleset_id'] = rulesetId;
    }
    public get rulesetId(): string | undefined {
        return this['ruleset_id'];
    }
    public withLanguage(language: string): ConfigTaskParameterBody {
        this['language'] = language;
        return this;
    }
    public withStatus(status: string): ConfigTaskParameterBody {
        this['status'] = status;
        return this;
    }
    public withTaskCheckSettings(taskCheckSettings: Array<TaskCheckSettingsItem>): ConfigTaskParameterBody {
        this['task_check_settings'] = taskCheckSettings;
        return this;
    }
    public set taskCheckSettings(taskCheckSettings: Array<TaskCheckSettingsItem>  | undefined) {
        this['task_check_settings'] = taskCheckSettings;
    }
    public get taskCheckSettings(): Array<TaskCheckSettingsItem> | undefined {
        return this['task_check_settings'];
    }
}