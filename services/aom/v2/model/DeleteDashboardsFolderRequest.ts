

export class DeleteDashboardsFolderRequest {
    private 'folder_id'?: string;
    private 'Enterprise-Project-Id'?: string;
    private 'delete_all'?: boolean;
    public constructor(folderId?: string, deleteAll?: boolean) { 
        this['folder_id'] = folderId;
        this['delete_all'] = deleteAll;
    }
    public withFolderId(folderId: string): DeleteDashboardsFolderRequest {
        this['folder_id'] = folderId;
        return this;
    }
    public set folderId(folderId: string  | undefined) {
        this['folder_id'] = folderId;
    }
    public get folderId(): string | undefined {
        return this['folder_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteDashboardsFolderRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withDeleteAll(deleteAll: boolean): DeleteDashboardsFolderRequest {
        this['delete_all'] = deleteAll;
        return this;
    }
    public set deleteAll(deleteAll: boolean  | undefined) {
        this['delete_all'] = deleteAll;
    }
    public get deleteAll(): boolean | undefined {
        return this['delete_all'];
    }
}