

export class DiffDto {
    private 'old_path'?: string;
    private 'new_path'?: string;
    private 'a_mode'?: string;
    private 'b_mode'?: string;
    private 'file_path'?: string;
    private 'new_file'?: boolean;
    private 'file_type'?: string;
    private 'renamed_file'?: boolean;
    private 'deleted_file'?: boolean;
    public diff?: string;
    public binary?: boolean;
    private 'too_large'?: boolean;
    public collapsed?: boolean;
    private 'line_count'?: Array<number>;
    private 'added_lines'?: number;
    private 'removed_lines'?: number;
    public constructor() { 
    }
    public withOldPath(oldPath: string): DiffDto {
        this['old_path'] = oldPath;
        return this;
    }
    public set oldPath(oldPath: string  | undefined) {
        this['old_path'] = oldPath;
    }
    public get oldPath(): string | undefined {
        return this['old_path'];
    }
    public withNewPath(newPath: string): DiffDto {
        this['new_path'] = newPath;
        return this;
    }
    public set newPath(newPath: string  | undefined) {
        this['new_path'] = newPath;
    }
    public get newPath(): string | undefined {
        return this['new_path'];
    }
    public withAMode(aMode: string): DiffDto {
        this['a_mode'] = aMode;
        return this;
    }
    public set aMode(aMode: string  | undefined) {
        this['a_mode'] = aMode;
    }
    public get aMode(): string | undefined {
        return this['a_mode'];
    }
    public withBMode(bMode: string): DiffDto {
        this['b_mode'] = bMode;
        return this;
    }
    public set bMode(bMode: string  | undefined) {
        this['b_mode'] = bMode;
    }
    public get bMode(): string | undefined {
        return this['b_mode'];
    }
    public withFilePath(filePath: string): DiffDto {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withNewFile(newFile: boolean): DiffDto {
        this['new_file'] = newFile;
        return this;
    }
    public set newFile(newFile: boolean  | undefined) {
        this['new_file'] = newFile;
    }
    public get newFile(): boolean | undefined {
        return this['new_file'];
    }
    public withFileType(fileType: string): DiffDto {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withRenamedFile(renamedFile: boolean): DiffDto {
        this['renamed_file'] = renamedFile;
        return this;
    }
    public set renamedFile(renamedFile: boolean  | undefined) {
        this['renamed_file'] = renamedFile;
    }
    public get renamedFile(): boolean | undefined {
        return this['renamed_file'];
    }
    public withDeletedFile(deletedFile: boolean): DiffDto {
        this['deleted_file'] = deletedFile;
        return this;
    }
    public set deletedFile(deletedFile: boolean  | undefined) {
        this['deleted_file'] = deletedFile;
    }
    public get deletedFile(): boolean | undefined {
        return this['deleted_file'];
    }
    public withDiff(diff: string): DiffDto {
        this['diff'] = diff;
        return this;
    }
    public withBinary(binary: boolean): DiffDto {
        this['binary'] = binary;
        return this;
    }
    public withTooLarge(tooLarge: boolean): DiffDto {
        this['too_large'] = tooLarge;
        return this;
    }
    public set tooLarge(tooLarge: boolean  | undefined) {
        this['too_large'] = tooLarge;
    }
    public get tooLarge(): boolean | undefined {
        return this['too_large'];
    }
    public withCollapsed(collapsed: boolean): DiffDto {
        this['collapsed'] = collapsed;
        return this;
    }
    public withLineCount(lineCount: Array<number>): DiffDto {
        this['line_count'] = lineCount;
        return this;
    }
    public set lineCount(lineCount: Array<number>  | undefined) {
        this['line_count'] = lineCount;
    }
    public get lineCount(): Array<number> | undefined {
        return this['line_count'];
    }
    public withAddedLines(addedLines: number): DiffDto {
        this['added_lines'] = addedLines;
        return this;
    }
    public set addedLines(addedLines: number  | undefined) {
        this['added_lines'] = addedLines;
    }
    public get addedLines(): number | undefined {
        return this['added_lines'];
    }
    public withRemovedLines(removedLines: number): DiffDto {
        this['removed_lines'] = removedLines;
        return this;
    }
    public set removedLines(removedLines: number  | undefined) {
        this['removed_lines'] = removedLines;
    }
    public get removedLines(): number | undefined {
        return this['removed_lines'];
    }
}