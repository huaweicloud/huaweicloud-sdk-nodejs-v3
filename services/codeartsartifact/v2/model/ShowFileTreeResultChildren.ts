

export class ShowFileTreeResultChildren {
    public name?: string;
    public uri?: string;
    public path?: string;
    public modified?: string;
    public folder?: boolean;
    private 'modified_by'?: string;
    private 'has_child'?: boolean;
    public constructor() { 
    }
    public withName(name: string): ShowFileTreeResultChildren {
        this['name'] = name;
        return this;
    }
    public withUri(uri: string): ShowFileTreeResultChildren {
        this['uri'] = uri;
        return this;
    }
    public withPath(path: string): ShowFileTreeResultChildren {
        this['path'] = path;
        return this;
    }
    public withModified(modified: string): ShowFileTreeResultChildren {
        this['modified'] = modified;
        return this;
    }
    public withFolder(folder: boolean): ShowFileTreeResultChildren {
        this['folder'] = folder;
        return this;
    }
    public withModifiedBy(modifiedBy: string): ShowFileTreeResultChildren {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: string  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): string | undefined {
        return this['modified_by'];
    }
    public withHasChild(hasChild: boolean): ShowFileTreeResultChildren {
        this['has_child'] = hasChild;
        return this;
    }
    public set hasChild(hasChild: boolean  | undefined) {
        this['has_child'] = hasChild;
    }
    public get hasChild(): boolean | undefined {
        return this['has_child'];
    }
}