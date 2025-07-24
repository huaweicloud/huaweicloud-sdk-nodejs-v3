

export class MindmapPageParamV3 {
    private 'folder_id_collection'?: Array<string>;
    private 'creator_num_collection'?: Array<string>;
    private 'updater_num_collection'?: Array<string>;
    private 'folder_root_id'?: string;
    private 'id_collection'?: Array<string>;
    public offset?: number;
    public limit?: number;
    public name?: string;
    private 'project_id'?: string;
    private 'branch_uri'?: string;
    private 'is_master'?: number;
    private 'iterator_uri'?: string;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withFolderIdCollection(folderIdCollection: Array<string>): MindmapPageParamV3 {
        this['folder_id_collection'] = folderIdCollection;
        return this;
    }
    public set folderIdCollection(folderIdCollection: Array<string>  | undefined) {
        this['folder_id_collection'] = folderIdCollection;
    }
    public get folderIdCollection(): Array<string> | undefined {
        return this['folder_id_collection'];
    }
    public withCreatorNumCollection(creatorNumCollection: Array<string>): MindmapPageParamV3 {
        this['creator_num_collection'] = creatorNumCollection;
        return this;
    }
    public set creatorNumCollection(creatorNumCollection: Array<string>  | undefined) {
        this['creator_num_collection'] = creatorNumCollection;
    }
    public get creatorNumCollection(): Array<string> | undefined {
        return this['creator_num_collection'];
    }
    public withUpdaterNumCollection(updaterNumCollection: Array<string>): MindmapPageParamV3 {
        this['updater_num_collection'] = updaterNumCollection;
        return this;
    }
    public set updaterNumCollection(updaterNumCollection: Array<string>  | undefined) {
        this['updater_num_collection'] = updaterNumCollection;
    }
    public get updaterNumCollection(): Array<string> | undefined {
        return this['updater_num_collection'];
    }
    public withFolderRootId(folderRootId: string): MindmapPageParamV3 {
        this['folder_root_id'] = folderRootId;
        return this;
    }
    public set folderRootId(folderRootId: string  | undefined) {
        this['folder_root_id'] = folderRootId;
    }
    public get folderRootId(): string | undefined {
        return this['folder_root_id'];
    }
    public withIdCollection(idCollection: Array<string>): MindmapPageParamV3 {
        this['id_collection'] = idCollection;
        return this;
    }
    public set idCollection(idCollection: Array<string>  | undefined) {
        this['id_collection'] = idCollection;
    }
    public get idCollection(): Array<string> | undefined {
        return this['id_collection'];
    }
    public withOffset(offset: number): MindmapPageParamV3 {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): MindmapPageParamV3 {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): MindmapPageParamV3 {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): MindmapPageParamV3 {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBranchUri(branchUri: string): MindmapPageParamV3 {
        this['branch_uri'] = branchUri;
        return this;
    }
    public set branchUri(branchUri: string  | undefined) {
        this['branch_uri'] = branchUri;
    }
    public get branchUri(): string | undefined {
        return this['branch_uri'];
    }
    public withIsMaster(isMaster: number): MindmapPageParamV3 {
        this['is_master'] = isMaster;
        return this;
    }
    public set isMaster(isMaster: number  | undefined) {
        this['is_master'] = isMaster;
    }
    public get isMaster(): number | undefined {
        return this['is_master'];
    }
    public withIteratorUri(iteratorUri: string): MindmapPageParamV3 {
        this['iterator_uri'] = iteratorUri;
        return this;
    }
    public set iteratorUri(iteratorUri: string  | undefined) {
        this['iterator_uri'] = iteratorUri;
    }
    public get iteratorUri(): string | undefined {
        return this['iterator_uri'];
    }
}