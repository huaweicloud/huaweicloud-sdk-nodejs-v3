import { UserVO } from './UserVO';


export class SnapshotsVO {
    public title?: string;
    private 'issue_id'?: string;
    public snapshot2workitem?: object;
    private 'created_by'?: UserVO;
    private 'modified_by'?: UserVO;
    public category?: string;
    public description?: string;
    public path?: string;
    public region?: string;
    public id?: string;
    private 'tenant_id'?: string;
    private 'created_date'?: string;
    private 'modified_date'?: string;
    private 'domain_id'?: string;
    public type?: string;
    private 'snap_base_info_id'?: string;
    private 'issue_category'?: string;
    private 'parent_id'?: string;
    private 'root_id'?: string;
    private 'parent_full_path'?: string;
    private 'parent_path'?: string;
    private 'full_path'?: string;
    private 'version_number'?: number;
    public deletable?: boolean;
    private 'category_name'?: string;
    public constructor() { 
    }
    public withTitle(title: string): SnapshotsVO {
        this['title'] = title;
        return this;
    }
    public withIssueId(issueId: string): SnapshotsVO {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withSnapshot2workitem(snapshot2workitem: object): SnapshotsVO {
        this['snapshot2workitem'] = snapshot2workitem;
        return this;
    }
    public withCreatedBy(createdBy: UserVO): SnapshotsVO {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: UserVO  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): UserVO | undefined {
        return this['created_by'];
    }
    public withModifiedBy(modifiedBy: UserVO): SnapshotsVO {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: UserVO  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): UserVO | undefined {
        return this['modified_by'];
    }
    public withCategory(category: string): SnapshotsVO {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): SnapshotsVO {
        this['description'] = description;
        return this;
    }
    public withPath(path: string): SnapshotsVO {
        this['path'] = path;
        return this;
    }
    public withRegion(region: string): SnapshotsVO {
        this['region'] = region;
        return this;
    }
    public withId(id: string): SnapshotsVO {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): SnapshotsVO {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withCreatedDate(createdDate: string): SnapshotsVO {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withModifiedDate(modifiedDate: string): SnapshotsVO {
        this['modified_date'] = modifiedDate;
        return this;
    }
    public set modifiedDate(modifiedDate: string  | undefined) {
        this['modified_date'] = modifiedDate;
    }
    public get modifiedDate(): string | undefined {
        return this['modified_date'];
    }
    public withDomainId(domainId: string): SnapshotsVO {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withType(type: string): SnapshotsVO {
        this['type'] = type;
        return this;
    }
    public withSnapBaseInfoId(snapBaseInfoId: string): SnapshotsVO {
        this['snap_base_info_id'] = snapBaseInfoId;
        return this;
    }
    public set snapBaseInfoId(snapBaseInfoId: string  | undefined) {
        this['snap_base_info_id'] = snapBaseInfoId;
    }
    public get snapBaseInfoId(): string | undefined {
        return this['snap_base_info_id'];
    }
    public withIssueCategory(issueCategory: string): SnapshotsVO {
        this['issue_category'] = issueCategory;
        return this;
    }
    public set issueCategory(issueCategory: string  | undefined) {
        this['issue_category'] = issueCategory;
    }
    public get issueCategory(): string | undefined {
        return this['issue_category'];
    }
    public withParentId(parentId: string): SnapshotsVO {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withRootId(rootId: string): SnapshotsVO {
        this['root_id'] = rootId;
        return this;
    }
    public set rootId(rootId: string  | undefined) {
        this['root_id'] = rootId;
    }
    public get rootId(): string | undefined {
        return this['root_id'];
    }
    public withParentFullPath(parentFullPath: string): SnapshotsVO {
        this['parent_full_path'] = parentFullPath;
        return this;
    }
    public set parentFullPath(parentFullPath: string  | undefined) {
        this['parent_full_path'] = parentFullPath;
    }
    public get parentFullPath(): string | undefined {
        return this['parent_full_path'];
    }
    public withParentPath(parentPath: string): SnapshotsVO {
        this['parent_path'] = parentPath;
        return this;
    }
    public set parentPath(parentPath: string  | undefined) {
        this['parent_path'] = parentPath;
    }
    public get parentPath(): string | undefined {
        return this['parent_path'];
    }
    public withFullPath(fullPath: string): SnapshotsVO {
        this['full_path'] = fullPath;
        return this;
    }
    public set fullPath(fullPath: string  | undefined) {
        this['full_path'] = fullPath;
    }
    public get fullPath(): string | undefined {
        return this['full_path'];
    }
    public withVersionNumber(versionNumber: number): SnapshotsVO {
        this['version_number'] = versionNumber;
        return this;
    }
    public set versionNumber(versionNumber: number  | undefined) {
        this['version_number'] = versionNumber;
    }
    public get versionNumber(): number | undefined {
        return this['version_number'];
    }
    public withDeletable(deletable: boolean): SnapshotsVO {
        this['deletable'] = deletable;
        return this;
    }
    public withCategoryName(categoryName: string): SnapshotsVO {
        this['category_name'] = categoryName;
        return this;
    }
    public set categoryName(categoryName: string  | undefined) {
        this['category_name'] = categoryName;
    }
    public get categoryName(): string | undefined {
        return this['category_name'];
    }
}