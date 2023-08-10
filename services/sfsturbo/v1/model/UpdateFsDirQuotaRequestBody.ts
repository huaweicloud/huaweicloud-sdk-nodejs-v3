

export class UpdateFsDirQuotaRequestBody {
    public path?: string;
    public capacity?: number;
    public inode?: number;
    public constructor(path?: string) { 
        this['path'] = path;
    }
    public withPath(path: string): UpdateFsDirQuotaRequestBody {
        this['path'] = path;
        return this;
    }
    public withCapacity(capacity: number): UpdateFsDirQuotaRequestBody {
        this['capacity'] = capacity;
        return this;
    }
    public withInode(inode: number): UpdateFsDirQuotaRequestBody {
        this['inode'] = inode;
        return this;
    }
}