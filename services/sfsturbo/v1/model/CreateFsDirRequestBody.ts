

export class CreateFsDirRequestBody {
    public path?: string;
    public mode?: number;
    public uid?: number;
    public gid?: number;
    public constructor(path?: string) { 
        this['path'] = path;
    }
    public withPath(path: string): CreateFsDirRequestBody {
        this['path'] = path;
        return this;
    }
    public withMode(mode: number): CreateFsDirRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withUid(uid: number): CreateFsDirRequestBody {
        this['uid'] = uid;
        return this;
    }
    public withGid(gid: number): CreateFsDirRequestBody {
        this['gid'] = gid;
        return this;
    }
}