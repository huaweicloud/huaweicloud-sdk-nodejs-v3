

export class MindmapRecycle {
    public app?: string;
    private 'create_time'?: string;
    private 'creator_name'?: string;
    private 'creator_num'?: string;
    private 'folder_id'?: string;
    private 'folder_root_id'?: string;
    public id?: string;
    private 'map_version'?: string;
    public mindmap?: string;
    public name?: string;
    public privacy?: string;
    private 'project_id'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withApp(app: string): MindmapRecycle {
        this['app'] = app;
        return this;
    }
    public withCreateTime(createTime: string): MindmapRecycle {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreatorName(creatorName: string): MindmapRecycle {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCreatorNum(creatorNum: string): MindmapRecycle {
        this['creator_num'] = creatorNum;
        return this;
    }
    public set creatorNum(creatorNum: string  | undefined) {
        this['creator_num'] = creatorNum;
    }
    public get creatorNum(): string | undefined {
        return this['creator_num'];
    }
    public withFolderId(folderId: string): MindmapRecycle {
        this['folder_id'] = folderId;
        return this;
    }
    public set folderId(folderId: string  | undefined) {
        this['folder_id'] = folderId;
    }
    public get folderId(): string | undefined {
        return this['folder_id'];
    }
    public withFolderRootId(folderRootId: string): MindmapRecycle {
        this['folder_root_id'] = folderRootId;
        return this;
    }
    public set folderRootId(folderRootId: string  | undefined) {
        this['folder_root_id'] = folderRootId;
    }
    public get folderRootId(): string | undefined {
        return this['folder_root_id'];
    }
    public withId(id: string): MindmapRecycle {
        this['id'] = id;
        return this;
    }
    public withMapVersion(mapVersion: string): MindmapRecycle {
        this['map_version'] = mapVersion;
        return this;
    }
    public set mapVersion(mapVersion: string  | undefined) {
        this['map_version'] = mapVersion;
    }
    public get mapVersion(): string | undefined {
        return this['map_version'];
    }
    public withMindmap(mindmap: string): MindmapRecycle {
        this['mindmap'] = mindmap;
        return this;
    }
    public withName(name: string): MindmapRecycle {
        this['name'] = name;
        return this;
    }
    public withPrivacy(privacy: string): MindmapRecycle {
        this['privacy'] = privacy;
        return this;
    }
    public withProjectId(projectId: string): MindmapRecycle {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withUpdateTime(updateTime: string): MindmapRecycle {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}