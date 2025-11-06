import { DiffRefDto } from './DiffRefDto';


export class FileChangeDto {
    private 'file_path'?: string;
    private 'old_path'?: string;
    private 'new_path'?: string;
    private 'a_mode'?: string;
    private 'b_mode'?: string;
    private 'mode_changed'?: boolean;
    private 'file_type'?: string;
    private 'new_file'?: boolean;
    private 'renamed_file'?: boolean;
    private 'deleted_file'?: boolean;
    public diff?: string;
    public binary?: boolean;
    private 'too_large'?: boolean;
    public collapsed?: boolean;
    private 'added_lines'?: number;
    private 'removed_lines'?: number;
    private 'content_sha'?: string;
    private 'diff_refs'?: DiffRefDto;
    public constructor() { 
    }
    public withFilePath(filePath: string): FileChangeDto {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withOldPath(oldPath: string): FileChangeDto {
        this['old_path'] = oldPath;
        return this;
    }
    public set oldPath(oldPath: string  | undefined) {
        this['old_path'] = oldPath;
    }
    public get oldPath(): string | undefined {
        return this['old_path'];
    }
    public withNewPath(newPath: string): FileChangeDto {
        this['new_path'] = newPath;
        return this;
    }
    public set newPath(newPath: string  | undefined) {
        this['new_path'] = newPath;
    }
    public get newPath(): string | undefined {
        return this['new_path'];
    }
    public withAMode(aMode: string): FileChangeDto {
        this['a_mode'] = aMode;
        return this;
    }
    public set aMode(aMode: string  | undefined) {
        this['a_mode'] = aMode;
    }
    public get aMode(): string | undefined {
        return this['a_mode'];
    }
    public withBMode(bMode: string): FileChangeDto {
        this['b_mode'] = bMode;
        return this;
    }
    public set bMode(bMode: string  | undefined) {
        this['b_mode'] = bMode;
    }
    public get bMode(): string | undefined {
        return this['b_mode'];
    }
    public withModeChanged(modeChanged: boolean): FileChangeDto {
        this['mode_changed'] = modeChanged;
        return this;
    }
    public set modeChanged(modeChanged: boolean  | undefined) {
        this['mode_changed'] = modeChanged;
    }
    public get modeChanged(): boolean | undefined {
        return this['mode_changed'];
    }
    public withFileType(fileType: string): FileChangeDto {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withNewFile(newFile: boolean): FileChangeDto {
        this['new_file'] = newFile;
        return this;
    }
    public set newFile(newFile: boolean  | undefined) {
        this['new_file'] = newFile;
    }
    public get newFile(): boolean | undefined {
        return this['new_file'];
    }
    public withRenamedFile(renamedFile: boolean): FileChangeDto {
        this['renamed_file'] = renamedFile;
        return this;
    }
    public set renamedFile(renamedFile: boolean  | undefined) {
        this['renamed_file'] = renamedFile;
    }
    public get renamedFile(): boolean | undefined {
        return this['renamed_file'];
    }
    public withDeletedFile(deletedFile: boolean): FileChangeDto {
        this['deleted_file'] = deletedFile;
        return this;
    }
    public set deletedFile(deletedFile: boolean  | undefined) {
        this['deleted_file'] = deletedFile;
    }
    public get deletedFile(): boolean | undefined {
        return this['deleted_file'];
    }
    public withDiff(diff: string): FileChangeDto {
        this['diff'] = diff;
        return this;
    }
    public withBinary(binary: boolean): FileChangeDto {
        this['binary'] = binary;
        return this;
    }
    public withTooLarge(tooLarge: boolean): FileChangeDto {
        this['too_large'] = tooLarge;
        return this;
    }
    public set tooLarge(tooLarge: boolean  | undefined) {
        this['too_large'] = tooLarge;
    }
    public get tooLarge(): boolean | undefined {
        return this['too_large'];
    }
    public withCollapsed(collapsed: boolean): FileChangeDto {
        this['collapsed'] = collapsed;
        return this;
    }
    public withAddedLines(addedLines: number): FileChangeDto {
        this['added_lines'] = addedLines;
        return this;
    }
    public set addedLines(addedLines: number  | undefined) {
        this['added_lines'] = addedLines;
    }
    public get addedLines(): number | undefined {
        return this['added_lines'];
    }
    public withRemovedLines(removedLines: number): FileChangeDto {
        this['removed_lines'] = removedLines;
        return this;
    }
    public set removedLines(removedLines: number  | undefined) {
        this['removed_lines'] = removedLines;
    }
    public get removedLines(): number | undefined {
        return this['removed_lines'];
    }
    public withContentSha(contentSha: string): FileChangeDto {
        this['content_sha'] = contentSha;
        return this;
    }
    public set contentSha(contentSha: string  | undefined) {
        this['content_sha'] = contentSha;
    }
    public get contentSha(): string | undefined {
        return this['content_sha'];
    }
    public withDiffRefs(diffRefs: DiffRefDto): FileChangeDto {
        this['diff_refs'] = diffRefs;
        return this;
    }
    public set diffRefs(diffRefs: DiffRefDto  | undefined) {
        this['diff_refs'] = diffRefs;
    }
    public get diffRefs(): DiffRefDto | undefined {
        return this['diff_refs'];
    }
}