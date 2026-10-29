import { IgnorePathSettingItem } from './IgnorePathSettingItem';


export class UpdateIgnorePathRequestBody {
    private 'ignore_path_settings'?: Array<IgnorePathSettingItem>;
    public constructor() { 
    }
    public withIgnorePathSettings(ignorePathSettings: Array<IgnorePathSettingItem>): UpdateIgnorePathRequestBody {
        this['ignore_path_settings'] = ignorePathSettings;
        return this;
    }
    public set ignorePathSettings(ignorePathSettings: Array<IgnorePathSettingItem>  | undefined) {
        this['ignore_path_settings'] = ignorePathSettings;
    }
    public get ignorePathSettings(): Array<IgnorePathSettingItem> | undefined {
        return this['ignore_path_settings'];
    }
}