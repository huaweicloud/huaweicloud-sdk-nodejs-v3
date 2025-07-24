

export class BasicAwCata {
    private 'aw_dir'?: string;
    private 'cata_type'?: number;
    private 'create_time'?: string;
    private 'create_user'?: string;
    private 'create_user_id'?: string;
    public desc?: string;
    private 'extra_info'?: string;
    public id?: string;
    private 'is_folder'?: string;
    public name?: string;
    public nameView?: string;
    private 'parent_id'?: string;
    private 'project_id'?: string;
    public refCnt?: number;
    public region?: string;
    private 'update_time'?: string;
    private 'update_user'?: string;
    public constructor() { 
    }
    public withAwDir(awDir: string): BasicAwCata {
        this['aw_dir'] = awDir;
        return this;
    }
    public set awDir(awDir: string  | undefined) {
        this['aw_dir'] = awDir;
    }
    public get awDir(): string | undefined {
        return this['aw_dir'];
    }
    public withCataType(cataType: number): BasicAwCata {
        this['cata_type'] = cataType;
        return this;
    }
    public set cataType(cataType: number  | undefined) {
        this['cata_type'] = cataType;
    }
    public get cataType(): number | undefined {
        return this['cata_type'];
    }
    public withCreateTime(createTime: string): BasicAwCata {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): BasicAwCata {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withCreateUserId(createUserId: string): BasicAwCata {
        this['create_user_id'] = createUserId;
        return this;
    }
    public set createUserId(createUserId: string  | undefined) {
        this['create_user_id'] = createUserId;
    }
    public get createUserId(): string | undefined {
        return this['create_user_id'];
    }
    public withDesc(desc: string): BasicAwCata {
        this['desc'] = desc;
        return this;
    }
    public withExtraInfo(extraInfo: string): BasicAwCata {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: string  | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo(): string | undefined {
        return this['extra_info'];
    }
    public withId(id: string): BasicAwCata {
        this['id'] = id;
        return this;
    }
    public withIsFolder(isFolder: string): BasicAwCata {
        this['is_folder'] = isFolder;
        return this;
    }
    public set isFolder(isFolder: string  | undefined) {
        this['is_folder'] = isFolder;
    }
    public get isFolder(): string | undefined {
        return this['is_folder'];
    }
    public withName(name: string): BasicAwCata {
        this['name'] = name;
        return this;
    }
    public withNameView(nameView: string): BasicAwCata {
        this['nameView'] = nameView;
        return this;
    }
    public withParentId(parentId: string): BasicAwCata {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withProjectId(projectId: string): BasicAwCata {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRefCnt(refCnt: number): BasicAwCata {
        this['refCnt'] = refCnt;
        return this;
    }
    public withRegion(region: string): BasicAwCata {
        this['region'] = region;
        return this;
    }
    public withUpdateTime(updateTime: string): BasicAwCata {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withUpdateUser(updateUser: string): BasicAwCata {
        this['update_user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update_user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update_user'];
    }
}