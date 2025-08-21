

export class FileDiffDto {
    private 'old_path'?: string;
    private 'new_path'?: object;
    private 'a_mode'?: string;
    private 'b_mode'?: string;
    private 'new_file'?: boolean;
    private 'renamed_file'?: boolean;
    private 'deleted_file'?: boolean;
    public diff?: string;
    private 'too_large'?: boolean;
    private 'added_lines'?: number;
    private 'removed_lines'?: number;
    public constructor() { 
    }
    public withOldPath(oldPath: string): FileDiffDto {
        this['old_path'] = oldPath;
        return this;
    }
    public set oldPath(oldPath: string  | undefined) {
        this['old_path'] = oldPath;
    }
    public get oldPath(): string | undefined {
        return this['old_path'];
    }
    public withNewPath(newPath: object): FileDiffDto {
        this['new_path'] = newPath;
        return this;
    }
    public set newPath(newPath: object  | undefined) {
        this['new_path'] = newPath;
    }
    public get newPath(): object | undefined {
        return this['new_path'];
    }
    public withAMode(aMode: string): FileDiffDto {
        this['a_mode'] = aMode;
        return this;
    }
    public set aMode(aMode: string  | undefined) {
        this['a_mode'] = aMode;
    }
    public get aMode(): string | undefined {
        return this['a_mode'];
    }
    public withBMode(bMode: string): FileDiffDto {
        this['b_mode'] = bMode;
        return this;
    }
    public set bMode(bMode: string  | undefined) {
        this['b_mode'] = bMode;
    }
    public get bMode(): string | undefined {
        return this['b_mode'];
    }
    public withNewFile(newFile: boolean): FileDiffDto {
        this['new_file'] = newFile;
        return this;
    }
    public set newFile(newFile: boolean  | undefined) {
        this['new_file'] = newFile;
    }
    public get newFile(): boolean | undefined {
        return this['new_file'];
    }
    public withRenamedFile(renamedFile: boolean): FileDiffDto {
        this['renamed_file'] = renamedFile;
        return this;
    }
    public set renamedFile(renamedFile: boolean  | undefined) {
        this['renamed_file'] = renamedFile;
    }
    public get renamedFile(): boolean | undefined {
        return this['renamed_file'];
    }
    public withDeletedFile(deletedFile: boolean): FileDiffDto {
        this['deleted_file'] = deletedFile;
        return this;
    }
    public set deletedFile(deletedFile: boolean  | undefined) {
        this['deleted_file'] = deletedFile;
    }
    public get deletedFile(): boolean | undefined {
        return this['deleted_file'];
    }
    public withDiff(diff: string): FileDiffDto {
        this['diff'] = diff;
        return this;
    }
    public withTooLarge(tooLarge: boolean): FileDiffDto {
        this['too_large'] = tooLarge;
        return this;
    }
    public set tooLarge(tooLarge: boolean  | undefined) {
        this['too_large'] = tooLarge;
    }
    public get tooLarge(): boolean | undefined {
        return this['too_large'];
    }
    public withAddedLines(addedLines: number): FileDiffDto {
        this['added_lines'] = addedLines;
        return this;
    }
    public set addedLines(addedLines: number  | undefined) {
        this['added_lines'] = addedLines;
    }
    public get addedLines(): number | undefined {
        return this['added_lines'];
    }
    public withRemovedLines(removedLines: number): FileDiffDto {
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