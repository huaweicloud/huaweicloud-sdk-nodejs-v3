

export class AttachmentVO {
    private 'attachment_type'?: string;
    private 'created_by'?: object;
    private 'created_date'?: string;
    public description?: string;
    private 'disk_directory'?: string;
    public filesize?: string;
    public id?: string;
    private 'modified_by'?: object;
    private 'store_filename'?: string;
    public title?: string;
    private 'workitem_id'?: string;
    public constructor() { 
    }
    public withAttachmentType(attachmentType: string): AttachmentVO {
        this['attachment_type'] = attachmentType;
        return this;
    }
    public set attachmentType(attachmentType: string  | undefined) {
        this['attachment_type'] = attachmentType;
    }
    public get attachmentType(): string | undefined {
        return this['attachment_type'];
    }
    public withCreatedBy(createdBy: object): AttachmentVO {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: object  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): object | undefined {
        return this['created_by'];
    }
    public withCreatedDate(createdDate: string): AttachmentVO {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withDescription(description: string): AttachmentVO {
        this['description'] = description;
        return this;
    }
    public withDiskDirectory(diskDirectory: string): AttachmentVO {
        this['disk_directory'] = diskDirectory;
        return this;
    }
    public set diskDirectory(diskDirectory: string  | undefined) {
        this['disk_directory'] = diskDirectory;
    }
    public get diskDirectory(): string | undefined {
        return this['disk_directory'];
    }
    public withFilesize(filesize: string): AttachmentVO {
        this['filesize'] = filesize;
        return this;
    }
    public withId(id: string): AttachmentVO {
        this['id'] = id;
        return this;
    }
    public withModifiedBy(modifiedBy: object): AttachmentVO {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: object  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): object | undefined {
        return this['modified_by'];
    }
    public withStoreFilename(storeFilename: string): AttachmentVO {
        this['store_filename'] = storeFilename;
        return this;
    }
    public set storeFilename(storeFilename: string  | undefined) {
        this['store_filename'] = storeFilename;
    }
    public get storeFilename(): string | undefined {
        return this['store_filename'];
    }
    public withTitle(title: string): AttachmentVO {
        this['title'] = title;
        return this;
    }
    public withWorkitemId(workitemId: string): AttachmentVO {
        this['workitem_id'] = workitemId;
        return this;
    }
    public set workitemId(workitemId: string  | undefined) {
        this['workitem_id'] = workitemId;
    }
    public get workitemId(): string | undefined {
        return this['workitem_id'];
    }
}