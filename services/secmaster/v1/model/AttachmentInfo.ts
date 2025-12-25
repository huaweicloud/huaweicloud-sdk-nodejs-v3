

export class AttachmentInfo {
    public id?: string;
    private 'file_name'?: string;
    private 'file_folder'?: string;
    private 'workspace_id'?: string;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'modifier_id'?: string;
    private 'modifier_name'?: string;
    private 'is_deleted'?: string;
    private 'storage_type'?: string;
    private 'storage_url'?: string;
    public constructor() { 
    }
    public withId(id: string): AttachmentInfo {
        this['id'] = id;
        return this;
    }
    public withFileName(fileName: string): AttachmentInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileFolder(fileFolder: string): AttachmentInfo {
        this['file_folder'] = fileFolder;
        return this;
    }
    public set fileFolder(fileFolder: string  | undefined) {
        this['file_folder'] = fileFolder;
    }
    public get fileFolder(): string | undefined {
        return this['file_folder'];
    }
    public withWorkspaceId(workspaceId: string): AttachmentInfo {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withCreatorId(creatorId: string): AttachmentInfo {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): AttachmentInfo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCreateTime(createTime: string): AttachmentInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): AttachmentInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withModifierId(modifierId: string): AttachmentInfo {
        this['modifier_id'] = modifierId;
        return this;
    }
    public set modifierId(modifierId: string  | undefined) {
        this['modifier_id'] = modifierId;
    }
    public get modifierId(): string | undefined {
        return this['modifier_id'];
    }
    public withModifierName(modifierName: string): AttachmentInfo {
        this['modifier_name'] = modifierName;
        return this;
    }
    public set modifierName(modifierName: string  | undefined) {
        this['modifier_name'] = modifierName;
    }
    public get modifierName(): string | undefined {
        return this['modifier_name'];
    }
    public withIsDeleted(isDeleted: string): AttachmentInfo {
        this['is_deleted'] = isDeleted;
        return this;
    }
    public set isDeleted(isDeleted: string  | undefined) {
        this['is_deleted'] = isDeleted;
    }
    public get isDeleted(): string | undefined {
        return this['is_deleted'];
    }
    public withStorageType(storageType: string): AttachmentInfo {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: string  | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType(): string | undefined {
        return this['storage_type'];
    }
    public withStorageUrl(storageUrl: string): AttachmentInfo {
        this['storage_url'] = storageUrl;
        return this;
    }
    public set storageUrl(storageUrl: string  | undefined) {
        this['storage_url'] = storageUrl;
    }
    public get storageUrl(): string | undefined {
        return this['storage_url'];
    }
}