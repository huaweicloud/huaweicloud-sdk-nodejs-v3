

export class ResolveConflictFileDto {
    private 'old_path'?: string;
    private 'new_path'?: string;
    public sections?: object;
    public content?: string;
    public constructor(oldPath?: string, newPath?: string) { 
        this['old_path'] = oldPath;
        this['new_path'] = newPath;
    }
    public withOldPath(oldPath: string): ResolveConflictFileDto {
        this['old_path'] = oldPath;
        return this;
    }
    public set oldPath(oldPath: string  | undefined) {
        this['old_path'] = oldPath;
    }
    public get oldPath(): string | undefined {
        return this['old_path'];
    }
    public withNewPath(newPath: string): ResolveConflictFileDto {
        this['new_path'] = newPath;
        return this;
    }
    public set newPath(newPath: string  | undefined) {
        this['new_path'] = newPath;
    }
    public get newPath(): string | undefined {
        return this['new_path'];
    }
    public withSections(sections: object): ResolveConflictFileDto {
        this['sections'] = sections;
        return this;
    }
    public withContent(content: string): ResolveConflictFileDto {
        this['content'] = content;
        return this;
    }
}