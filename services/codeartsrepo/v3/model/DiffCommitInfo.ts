

export class DiffCommitInfo {
    private 'old_path'?: string;
    private 'new_path'?: string;
    private 'a_mode'?: string;
    private 'b_mode'?: string;
    private 'new_file'?: boolean;
    private 'renamed_file'?: boolean;
    private 'deleted_file'?: boolean;
    public diff?: string;
    public constructor() { 
    }
    public withOldPath(oldPath: string): DiffCommitInfo {
        this['old_path'] = oldPath;
        return this;
    }
    public set oldPath(oldPath: string  | undefined) {
        this['old_path'] = oldPath;
    }
    public get oldPath(): string | undefined {
        return this['old_path'];
    }
    public withNewPath(newPath: string): DiffCommitInfo {
        this['new_path'] = newPath;
        return this;
    }
    public set newPath(newPath: string  | undefined) {
        this['new_path'] = newPath;
    }
    public get newPath(): string | undefined {
        return this['new_path'];
    }
    public withAMode(aMode: string): DiffCommitInfo {
        this['a_mode'] = aMode;
        return this;
    }
    public set aMode(aMode: string  | undefined) {
        this['a_mode'] = aMode;
    }
    public get aMode(): string | undefined {
        return this['a_mode'];
    }
    public withBMode(bMode: string): DiffCommitInfo {
        this['b_mode'] = bMode;
        return this;
    }
    public set bMode(bMode: string  | undefined) {
        this['b_mode'] = bMode;
    }
    public get bMode(): string | undefined {
        return this['b_mode'];
    }
    public withNewFile(newFile: boolean): DiffCommitInfo {
        this['new_file'] = newFile;
        return this;
    }
    public set newFile(newFile: boolean  | undefined) {
        this['new_file'] = newFile;
    }
    public get newFile(): boolean | undefined {
        return this['new_file'];
    }
    public withRenamedFile(renamedFile: boolean): DiffCommitInfo {
        this['renamed_file'] = renamedFile;
        return this;
    }
    public set renamedFile(renamedFile: boolean  | undefined) {
        this['renamed_file'] = renamedFile;
    }
    public get renamedFile(): boolean | undefined {
        return this['renamed_file'];
    }
    public withDeletedFile(deletedFile: boolean): DiffCommitInfo {
        this['deleted_file'] = deletedFile;
        return this;
    }
    public set deletedFile(deletedFile: boolean  | undefined) {
        this['deleted_file'] = deletedFile;
    }
    public get deletedFile(): boolean | undefined {
        return this['deleted_file'];
    }
    public withDiff(diff: string): DiffCommitInfo {
        this['diff'] = diff;
        return this;
    }
}