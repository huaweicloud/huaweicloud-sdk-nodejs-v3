

export class FileTreeNode {
    private 'file_path'?: string | undefined;
    private 'file_name'?: string | undefined;
    private 'file_type'?: string | undefined;
    public constructor() { 
    }
    public withFilePath(filePath: string): FileTreeNode {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath() {
        return this['file_path'];
    }
    public withFileName(fileName: string): FileTreeNode {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName() {
        return this['file_name'];
    }
    public withFileType(fileType: string): FileTreeNode {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType() {
        return this['file_type'];
    }
}