

export class ObsTargetAttributes {
    private 'file_mode'?: number;
    private 'dir_mode'?: number;
    public uid?: number;
    public gid?: number;
    public constructor() { 
    }
    public withFileMode(fileMode: number): ObsTargetAttributes {
        this['file_mode'] = fileMode;
        return this;
    }
    public set fileMode(fileMode: number  | undefined) {
        this['file_mode'] = fileMode;
    }
    public get fileMode(): number | undefined {
        return this['file_mode'];
    }
    public withDirMode(dirMode: number): ObsTargetAttributes {
        this['dir_mode'] = dirMode;
        return this;
    }
    public set dirMode(dirMode: number  | undefined) {
        this['dir_mode'] = dirMode;
    }
    public get dirMode(): number | undefined {
        return this['dir_mode'];
    }
    public withUid(uid: number): ObsTargetAttributes {
        this['uid'] = uid;
        return this;
    }
    public withGid(gid: number): ObsTargetAttributes {
        this['gid'] = gid;
        return this;
    }
}