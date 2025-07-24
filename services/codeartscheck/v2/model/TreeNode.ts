

export class TreeNode {
    private 'file_name'?: string;
    private 'file_path'?: string;
    private 'is_leaf'?: boolean;
    private 'checkbox_status'?: string;
    public constructor() { 
    }
    public withFileName(fileName: string): TreeNode {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFilePath(filePath: string): TreeNode {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withIsLeaf(isLeaf: boolean): TreeNode {
        this['is_leaf'] = isLeaf;
        return this;
    }
    public set isLeaf(isLeaf: boolean  | undefined) {
        this['is_leaf'] = isLeaf;
    }
    public get isLeaf(): boolean | undefined {
        return this['is_leaf'];
    }
    public withCheckboxStatus(checkboxStatus: string): TreeNode {
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