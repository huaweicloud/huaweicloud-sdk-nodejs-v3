
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadAttachmentsResponse extends SdkResponse {
    public id?: number;
    private 'issue_id'?: number;
    private 'project_id'?: string;
    private 'disk_filename'?: string;
    private 'file_name'?: string;
    public size?: string;
    public constructor() { 
        super();
    }
    public withId(id: number): UploadAttachmentsResponse {
        this['id'] = id;
        return this;
    }
    public withIssueId(issueId: number): UploadAttachmentsResponse {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: number  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): number | undefined {
        return this['issue_id'];
    }
    public withProjectId(projectId: string): UploadAttachmentsResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDiskFilename(diskFilename: string): UploadAttachmentsResponse {
        this['disk_filename'] = diskFilename;
        return this;
    }
    public set diskFilename(diskFilename: string  | undefined) {
        this['disk_filename'] = diskFilename;
    }
    public get diskFilename(): string | undefined {
        return this['disk_filename'];
    }
    public withFileName(fileName: string): UploadAttachmentsResponse {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withSize(size: string): UploadAttachmentsResponse {
        this['size'] = size;
        return this;
    }
}