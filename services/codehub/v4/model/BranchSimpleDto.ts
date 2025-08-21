

export class BranchSimpleDto {
    public name?: string;
    private 'default'?: boolean;
    private 'can_delete'?: boolean;
    private 'can_read'?: boolean;
    private 'can_download'?: boolean;
    private 'can_push'?: boolean;
    public constructor() { 
    }
    public withName(name: string): BranchSimpleDto {
        this['name'] = name;
        return this;
    }
    public withDefault(_default: boolean): BranchSimpleDto {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean  | undefined) {
        this['default'] = _default;
    }
    public get _default(): boolean | undefined {
        return this['default'];
    }
    public withCanDelete(canDelete: boolean): BranchSimpleDto {
        this['can_delete'] = canDelete;
        return this;
    }
    public set canDelete(canDelete: boolean  | undefined) {
        this['can_delete'] = canDelete;
    }
    public get canDelete(): boolean | undefined {
        return this['can_delete'];
    }
    public withCanRead(canRead: boolean): BranchSimpleDto {
        this['can_read'] = canRead;
        return this;
    }
    public set canRead(canRead: boolean  | undefined) {
        this['can_read'] = canRead;
    }
    public get canRead(): boolean | undefined {
        return this['can_read'];
    }
    public withCanDownload(canDownload: boolean): BranchSimpleDto {
        this['can_download'] = canDownload;
        return this;
    }
    public set canDownload(canDownload: boolean  | undefined) {
        this['can_download'] = canDownload;
    }
    public get canDownload(): boolean | undefined {
        return this['can_download'];
    }
    public withCanPush(canPush: boolean): BranchSimpleDto {
        this['can_push'] = canPush;
        return this;
    }
    public set canPush(canPush: boolean  | undefined) {
        this['can_push'] = canPush;
    }
    public get canPush(): boolean | undefined {
        return this['can_push'];
    }
}