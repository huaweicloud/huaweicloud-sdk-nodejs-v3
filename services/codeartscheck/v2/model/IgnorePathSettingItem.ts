

export class IgnorePathSettingItem {
    private 'file_path'?: string;
    private 'checkbox_status'?: string;
    public constructor(filePath?: string, checkboxStatus?: string) { 
        this['file_path'] = filePath;
        this['checkbox_status'] = checkboxStatus;
    }
    public withFilePath(filePath: string): IgnorePathSettingItem {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withCheckboxStatus(checkboxStatus: string): IgnorePathSettingItem {
        this['checkbox_status'] = checkboxStatus;
        return this;
    }
    public set checkboxStatus(checkboxStatus: string  | undefined) {
        this['checkbox_status'] = checkboxStatus;
    }
    public get checkboxStatus(): string | undefined {
        return this['checkbox_status'];
    }
}