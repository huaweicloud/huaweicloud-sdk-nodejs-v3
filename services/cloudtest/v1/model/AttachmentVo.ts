

export class AttachmentVo {
    public uri?: string;
    public creator?: string;
    public updator?: string;
    public region?: string;
    private 'doc_id'?: string;
    private 'parent_uri'?: string;
    private 'parent_type'?: string;
    private 'file_name'?: string;
    private 'store_file_name'?: string;
    private 'file_path'?: string;
    private 'file_size'?: number;
    private 'file_type'?: string;
    private 'system_type'?: string;
    private 'create_time'?: Date;
    private 'create_time_timestamp'?: number;
    private 'update_time'?: Date;
    private 'update_time_timestamp'?: number;
    private 'project_uuid'?: string;
    private 'related_type'?: string;
    public constructor() { 
    }
    public withUri(uri: string): AttachmentVo {
        this['uri'] = uri;
        return this;
    }
    public withCreator(creator: string): AttachmentVo {
        this['creator'] = creator;
        return this;
    }
    public withUpdator(updator: string): AttachmentVo {
        this['updator'] = updator;
        return this;
    }
    public withRegion(region: string): AttachmentVo {
        this['region'] = region;
        return this;
    }
    public withDocId(docId: string): AttachmentVo {
        this['doc_id'] = docId;
        return this;
    }
    public set docId(docId: string  | undefined) {
        this['doc_id'] = docId;
    }
    public get docId(): string | undefined {
        return this['doc_id'];
    }
    public withParentUri(parentUri: string): AttachmentVo {
        this['parent_uri'] = parentUri;
        return this;
    }
    public set parentUri(parentUri: string  | undefined) {
        this['parent_uri'] = parentUri;
    }
    public get parentUri(): string | undefined {
        return this['parent_uri'];
    }
    public withParentType(parentType: string): AttachmentVo {
        this['parent_type'] = parentType;
        return this;
    }
    public set parentType(parentType: string  | undefined) {
        this['parent_type'] = parentType;
    }
    public get parentType(): string | undefined {
        return this['parent_type'];
    }
    public withFileName(fileName: string): AttachmentVo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withStoreFileName(storeFileName: string): AttachmentVo {
        this['store_file_name'] = storeFileName;
        return this;
    }
    public set storeFileName(storeFileName: string  | undefined) {
        this['store_file_name'] = storeFileName;
    }
    public get storeFileName(): string | undefined {
        return this['store_file_name'];
    }
    public withFilePath(filePath: string): AttachmentVo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileSize(fileSize: number): AttachmentVo {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
    public withFileType(fileType: string): AttachmentVo {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withSystemType(systemType: string): AttachmentVo {
        this['system_type'] = systemType;
        return this;
    }
    public set systemType(systemType: string  | undefined) {
        this['system_type'] = systemType;
    }
    public get systemType(): string | undefined {
        return this['system_type'];
    }
    public withCreateTime(createTime: Date): AttachmentVo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withCreateTimeTimestamp(createTimeTimestamp: number): AttachmentVo {
        this['create_time_timestamp'] = createTimeTimestamp;
        return this;
    }
    public set createTimeTimestamp(createTimeTimestamp: number  | undefined) {
        this['create_time_timestamp'] = createTimeTimestamp;
    }
    public get createTimeTimestamp(): number | undefined {
        return this['create_time_timestamp'];
    }
    public withUpdateTime(updateTime: Date): AttachmentVo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withUpdateTimeTimestamp(updateTimeTimestamp: number): AttachmentVo {
        this['update_time_timestamp'] = updateTimeTimestamp;
        return this;
    }
    public set updateTimeTimestamp(updateTimeTimestamp: number  | undefined) {
        this['update_time_timestamp'] = updateTimeTimestamp;
    }
    public get updateTimeTimestamp(): number | undefined {
        return this['update_time_timestamp'];
    }
    public withProjectUuid(projectUuid: string): AttachmentVo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withRelatedType(relatedType: string): AttachmentVo {
        this['related_type'] = relatedType;
        return this;
    }
    public set relatedType(relatedType: string  | undefined) {
        this['related_type'] = relatedType;
    }
    public get relatedType(): string | undefined {
        return this['related_type'];
    }
}