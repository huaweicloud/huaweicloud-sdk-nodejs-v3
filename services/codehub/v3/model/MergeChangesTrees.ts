

export class MergeChangesTrees {
    public title?: string;
    public level?: number;
    private 'file_path'?: string;
    private 'file_type'?: string;
    public constructor() { 
    }
    public withTitle(title: string): MergeChangesTrees {
        this['title'] = title;
        return this;
    }
    public withLevel(level: number): MergeChangesTrees {
        this['level'] = level;
        return this;
    }
    public withFilePath(filePath: string): MergeChangesTrees {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileType(fileType: string): MergeChangesTrees {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
}