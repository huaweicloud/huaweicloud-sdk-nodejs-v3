

export class DashBoardsFolder {
    public created?: number;
    public updated?: number;
    private 'created_by'?: string;
    private 'dashboard_ids'?: Array<string>;
    public display?: boolean;
    private 'enterprise_project_id'?: string;
    private 'folder_id'?: string;
    private 'folder_title'?: string;
    private 'folder_title_en'?: string;
    private 'is_template'?: boolean;
    public constructor(created?: number, updated?: number, createdBy?: string, dashboardIds?: Array<string>, display?: boolean, enterpriseProjectId?: string, folderId?: string, folderTitle?: string, isTemplate?: boolean) { 
        this['created'] = created;
        this['updated'] = updated;
        this['created_by'] = createdBy;
        this['dashboard_ids'] = dashboardIds;
        this['display'] = display;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['folder_id'] = folderId;
        this['folder_title'] = folderTitle;
        this['is_template'] = isTemplate;
    }
    public withCreated(created: number): DashBoardsFolder {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: number): DashBoardsFolder {
        this['updated'] = updated;
        return this;
    }
    public withCreatedBy(createdBy: string): DashBoardsFolder {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withDashboardIds(dashboardIds: Array<string>): DashBoardsFolder {
        this['dashboard_ids'] = dashboardIds;
        return this;
    }
    public set dashboardIds(dashboardIds: Array<string>  | undefined) {
        this['dashboard_ids'] = dashboardIds;
    }
    public get dashboardIds(): Array<string> | undefined {
        return this['dashboard_ids'];
    }
    public withDisplay(display: boolean): DashBoardsFolder {
        this['display'] = display;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DashBoardsFolder {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFolderId(folderId: string): DashBoardsFolder {
        this['folder_id'] = folderId;
        return this;
    }
    public set folderId(folderId: string  | undefined) {
        this['folder_id'] = folderId;
    }
    public get folderId(): string | undefined {
        return this['folder_id'];
    }
    public withFolderTitle(folderTitle: string): DashBoardsFolder {
        this['folder_title'] = folderTitle;
        return this;
    }
    public set folderTitle(folderTitle: string  | undefined) {
        this['folder_title'] = folderTitle;
    }
    public get folderTitle(): string | undefined {
        return this['folder_title'];
    }
    public withFolderTitleEn(folderTitleEn: string): DashBoardsFolder {
        this['folder_title_en'] = folderTitleEn;
        return this;
    }
    public set folderTitleEn(folderTitleEn: string  | undefined) {
        this['folder_title_en'] = folderTitleEn;
    }
    public get folderTitleEn(): string | undefined {
        return this['folder_title_en'];
    }
    public withIsTemplate(isTemplate: boolean): DashBoardsFolder {
        this['is_template'] = isTemplate;
        return this;
    }
    public set isTemplate(isTemplate: boolean  | undefined) {
        this['is_template'] = isTemplate;
    }
    public get isTemplate(): boolean | undefined {
        return this['is_template'];
    }
}