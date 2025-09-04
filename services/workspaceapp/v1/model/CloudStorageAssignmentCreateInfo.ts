import { AttachType } from './AttachType';


export class CloudStorageAssignmentCreateInfo {
    public id?: string;
    private 'region_id'?: string;
    private 'tenant_id'?: string;
    private 'domain_id'?: string;
    private 'folder_name'?: string;
    public attach?: string;
    private 'attach_id'?: string;
    private 'attach_type'?: AttachType;
    private 'error_message'?: string;
    private 'is_success'?: boolean;
    public constructor() { 
    }
    public withId(id: string): CloudStorageAssignmentCreateInfo {
        this['id'] = id;
        return this;
    }
    public withRegionId(regionId: string): CloudStorageAssignmentCreateInfo {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withTenantId(tenantId: string): CloudStorageAssignmentCreateInfo {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withDomainId(domainId: string): CloudStorageAssignmentCreateInfo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withFolderName(folderName: string): CloudStorageAssignmentCreateInfo {
        this['folder_name'] = folderName;
        return this;
    }
    public set folderName(folderName: string  | undefined) {
        this['folder_name'] = folderName;
    }
    public get folderName(): string | undefined {
        return this['folder_name'];
    }
    public withAttach(attach: string): CloudStorageAssignmentCreateInfo {
        this['attach'] = attach;
        return this;
    }
    public withAttachId(attachId: string): CloudStorageAssignmentCreateInfo {
        this['attach_id'] = attachId;
        return this;
    }
    public set attachId(attachId: string  | undefined) {
        this['attach_id'] = attachId;
    }
    public get attachId(): string | undefined {
        return this['attach_id'];
    }
    public withAttachType(attachType: AttachType): CloudStorageAssignmentCreateInfo {
        this['attach_type'] = attachType;
        return this;
    }
    public set attachType(attachType: AttachType  | undefined) {
        this['attach_type'] = attachType;
    }
    public get attachType(): AttachType | undefined {
        return this['attach_type'];
    }
    public withErrorMessage(errorMessage: string): CloudStorageAssignmentCreateInfo {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withIsSuccess(isSuccess: boolean): CloudStorageAssignmentCreateInfo {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
}