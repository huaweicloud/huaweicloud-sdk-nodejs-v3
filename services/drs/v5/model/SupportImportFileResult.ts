

export class SupportImportFileResult {
    private 'file_size'?: string;
    private 'previous_select'?: string;
    public constructor() { 
    }
    public withFileSize(fileSize: string): SupportImportFileResult {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: string  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): string | undefined {
        return this['file_size'];
    }
    public withPreviousSelect(previousSelect: string): SupportImportFileResult {
        this['previous_select'] = previousSelect;
        return this;
    }
    public set previousSelect(previousSelect: string  | undefined) {
        this['previous_select'] = previousSelect;
    }
    public get previousSelect(): string | undefined {
        return this['previous_select'];
    }
}