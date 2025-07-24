import { TaskAdvancedSettingsItem } from './TaskAdvancedSettingsItem';


export class UpdateTaskSettingsRequestBody {
    private 'task_advanced_settings'?: Array<TaskAdvancedSettingsItem>;
    public constructor(taskAdvancedSettings?: Array<TaskAdvancedSettingsItem>) { 
        this['task_advanced_settings'] = taskAdvancedSettings;
    }
    public withTaskAdvancedSettings(taskAdvancedSettings: Array<TaskAdvancedSettingsItem>): UpdateTaskSettingsRequestBody {
        this['task_advanced_settings'] = taskAdvancedSettings;
        return this;
    }
    public set taskAdvancedSettings(taskAdvancedSettings: Array<TaskAdvancedSettingsItem>  | undefined) {
        this['task_advanced_settings'] = taskAdvancedSettings;
    }
    public get taskAdvancedSettings(): Array<TaskAdvancedSettingsItem> | undefined {
        return this['task_advanced_settings'];
    }
}