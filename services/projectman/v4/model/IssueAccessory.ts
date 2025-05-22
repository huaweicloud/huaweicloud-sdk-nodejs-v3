

export class IssueAccessory {
    private 'attachment_id'?: number;
    private 'issue_id'?: number;
    private 'creator_num_id'?: number;
    private 'created_date'?: string;
    private 'file_name'?: string;
    private 'container_type'?: string;
    private 'disk_file_name'?: string;
    public digest?: string;
    private 'disk_directory'?: string;
    private 'creator_id'?: string;
    public constructor() { 
    }
    public withAttachmentId(attachmentId: number): IssueAccessory {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: number  | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId(): number | undefined {
        return this['attachment_id'];
    }
    public withIssueId(issueId: number): IssueAccessory {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: number  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): number | undefined {
        return this['issue_id'];
    }
    public withCreatorNumId(creatorNumId: number): IssueAccessory {
        this['creator_num_id'] = creatorNumId;
        return this;
    }
    public set creatorNumId(creatorNumId: number  | undefined) {
        this['creator_num_id'] = creatorNumId;
    }
    public get creatorNumId(): number | undefined {
        return this['creator_num_id'];
    }
    public withCreatedDate(createdDate: string): IssueAccessory {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withFileName(fileName: string): IssueAccessory {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withContainerType(containerType: string): IssueAccessory {
        this['container_type'] = containerType;
        return this;
    }
    public set containerType(containerType: string  | undefined) {
        this['container_type'] = containerType;
    }
    public get containerType(): string | undefined {
        return this['container_type'];
    }
    public withDiskFileName(diskFileName: string): IssueAccessory {
        this['disk_file_name'] = diskFileName;
        return this;
    }
    public set diskFileName(diskFileName: string  | undefined) {
        this['disk_file_name'] = diskFileName;
    }
    public get diskFileName(): string | undefined {
        return this['disk_file_name'];
    }
    public withDigest(digest: string): IssueAccessory {
        this['digest'] = digest;
        return this;
    }
    public withDiskDirectory(diskDirectory: string): IssueAccessory {
        this['disk_directory'] = diskDirectory;
        return this;
    }
    public set diskDirectory(diskDirectory: string  | undefined) {
        this['disk_directory'] = diskDirectory;
    }
    public get diskDirectory(): string | undefined {
        return this['disk_directory'];
    }
    public withCreatorId(creatorId: string): IssueAccessory {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
}