import { UserEntity } from './UserEntity';


export class AttachmentEntity {
    public id?: string;
    private 'issue_id'?: string;
    private 'disk_directory'?: string;
    private 'file_size'?: string;
    private 'store_filename'?: string;
    public title?: string;
    private 'modified_by'?: UserEntity;
    private 'created_by'?: UserEntity;
    private 'attachment_type'?: string;
    private 'created_date'?: string;
    public constructor() { 
    }
    public withId(id: string): AttachmentEntity {
        this['id'] = id;
        return this;
    }
    public withIssueId(issueId: string): AttachmentEntity {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withDiskDirectory(diskDirectory: string): AttachmentEntity {
        this['disk_directory'] = diskDirectory;
        return this;
    }
    public set diskDirectory(diskDirectory: string  | undefined) {
        this['disk_directory'] = diskDirectory;
    }
    public get diskDirectory(): string | undefined {
        return this['disk_directory'];
    }
    public withFileSize(fileSize: string): AttachmentEntity {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: string  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): string | undefined {
        return this['file_size'];
    }
    public withStoreFilename(storeFilename: string): AttachmentEntity {
        this['store_filename'] = storeFilename;
        return this;
    }
    public set storeFilename(storeFilename: string  | undefined) {
        this['store_filename'] = storeFilename;
    }
    public get storeFilename(): string | undefined {
        return this['store_filename'];
    }
    public withTitle(title: string): AttachmentEntity {
        this['title'] = title;
        return this;
    }
    public withModifiedBy(modifiedBy: UserEntity): AttachmentEntity {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: UserEntity  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): UserEntity | undefined {
        return this['modified_by'];
    }
    public withCreatedBy(createdBy: UserEntity): AttachmentEntity {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: UserEntity  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): UserEntity | undefined {
        return this['created_by'];
    }
    public withAttachmentType(attachmentType: string): AttachmentEntity {
        this['attachment_type'] = attachmentType;
        return this;
    }
    public set attachmentType(attachmentType: string  | undefined) {
        this['attachment_type'] = attachmentType;
    }
    public get attachmentType(): string | undefined {
        return this['attachment_type'];
    }
    public withCreatedDate(createdDate: string): AttachmentEntity {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
}