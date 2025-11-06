
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDashBoardResponse extends SdkResponse {
    private 'project_id'?: string;
    private 'dashboard_type'?: string;
    private 'dashboard_title'?: string;
    private 'dashboard_title_en'?: string;
    private 'dashboard_id'?: string;
    public version?: string;
    private 'enterprise_project_id'?: string;
    private 'folder_name'?: string;
    private 'folder_id'?: string;
    private 'sync_data'?: string;
    private 'is_create_action'?: boolean;
    private 'dashboard_tags'?: Array<{ [key: string]: string; }>;
    private 'is_favorite'?: boolean;
    public created?: number;
    public updated?: number;
    private 'created_by'?: string;
    private 'updated_by'?: string;
    public charts?: object;
    public templating?: object;
    public display?: boolean;
    private 'query_count'?: number;
    private 'time_range'?: string;
    public constructor() { 
        super();
    }
    public withProjectId(projectId: string): ShowDashBoardResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDashboardType(dashboardType: string): ShowDashBoardResponse {
        this['dashboard_type'] = dashboardType;
        return this;
    }
    public set dashboardType(dashboardType: string  | undefined) {
        this['dashboard_type'] = dashboardType;
    }
    public get dashboardType(): string | undefined {
        return this['dashboard_type'];
    }
    public withDashboardTitle(dashboardTitle: string): ShowDashBoardResponse {
        this['dashboard_title'] = dashboardTitle;
        return this;
    }
    public set dashboardTitle(dashboardTitle: string  | undefined) {
        this['dashboard_title'] = dashboardTitle;
    }
    public get dashboardTitle(): string | undefined {
        return this['dashboard_title'];
    }
    public withDashboardTitleEn(dashboardTitleEn: string): ShowDashBoardResponse {
        this['dashboard_title_en'] = dashboardTitleEn;
        return this;
    }
    public set dashboardTitleEn(dashboardTitleEn: string  | undefined) {
        this['dashboard_title_en'] = dashboardTitleEn;
    }
    public get dashboardTitleEn(): string | undefined {
        return this['dashboard_title_en'];
    }
    public withDashboardId(dashboardId: string): ShowDashBoardResponse {
        this['dashboard_id'] = dashboardId;
        return this;
    }
    public set dashboardId(dashboardId: string  | undefined) {
        this['dashboard_id'] = dashboardId;
    }
    public get dashboardId(): string | undefined {
        return this['dashboard_id'];
    }
    public withVersion(version: string): ShowDashBoardResponse {
        this['version'] = version;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowDashBoardResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFolderName(folderName: string): ShowDashBoardResponse {
        this['folder_name'] = folderName;
        return this;
    }
    public set folderName(folderName: string  | undefined) {
        this['folder_name'] = folderName;
    }
    public get folderName(): string | undefined {
        return this['folder_name'];
    }
    public withFolderId(folderId: string): ShowDashBoardResponse {
        this['folder_id'] = folderId;
        return this;
    }
    public set folderId(folderId: string  | undefined) {
        this['folder_id'] = folderId;
    }
    public get folderId(): string | undefined {
        return this['folder_id'];
    }
    public withSyncData(syncData: string): ShowDashBoardResponse {
        this['sync_data'] = syncData;
        return this;
    }
    public set syncData(syncData: string  | undefined) {
        this['sync_data'] = syncData;
    }
    public get syncData(): string | undefined {
        return this['sync_data'];
    }
    public withIsCreateAction(isCreateAction: boolean): ShowDashBoardResponse {
        this['is_create_action'] = isCreateAction;
        return this;
    }
    public set isCreateAction(isCreateAction: boolean  | undefined) {
        this['is_create_action'] = isCreateAction;
    }
    public get isCreateAction(): boolean | undefined {
        return this['is_create_action'];
    }
    public withDashboardTags(dashboardTags: Array<{ [key: string]: string; }>): ShowDashBoardResponse {
        this['dashboard_tags'] = dashboardTags;
        return this;
    }
    public set dashboardTags(dashboardTags: Array<{ [key: string]: string; }>  | undefined) {
        this['dashboard_tags'] = dashboardTags;
    }
    public get dashboardTags(): Array<{ [key: string]: string; }> | undefined {
        return this['dashboard_tags'];
    }
    public withIsFavorite(isFavorite: boolean): ShowDashBoardResponse {
        this['is_favorite'] = isFavorite;
        return this;
    }
    public set isFavorite(isFavorite: boolean  | undefined) {
        this['is_favorite'] = isFavorite;
    }
    public get isFavorite(): boolean | undefined {
        return this['is_favorite'];
    }
    public withCreated(created: number): ShowDashBoardResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: number): ShowDashBoardResponse {
        this['updated'] = updated;
        return this;
    }
    public withCreatedBy(createdBy: string): ShowDashBoardResponse {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withUpdatedBy(updatedBy: string): ShowDashBoardResponse {
        this['updated_by'] = updatedBy;
        return this;
    }
    public set updatedBy(updatedBy: string  | undefined) {
        this['updated_by'] = updatedBy;
    }
    public get updatedBy(): string | undefined {
        return this['updated_by'];
    }
    public withCharts(charts: object): ShowDashBoardResponse {
        this['charts'] = charts;
        return this;
    }
    public withTemplating(templating: object): ShowDashBoardResponse {
        this['templating'] = templating;
        return this;
    }
    public withDisplay(display: boolean): ShowDashBoardResponse {
        this['display'] = display;
        return this;
    }
    public withQueryCount(queryCount: number): ShowDashBoardResponse {
        this['query_count'] = queryCount;
        return this;
    }
    public set queryCount(queryCount: number  | undefined) {
        this['query_count'] = queryCount;
    }
    public get queryCount(): number | undefined {
        return this['query_count'];
    }
    public withTimeRange(timeRange: string): ShowDashBoardResponse {
        this['time_range'] = timeRange;
        return this;
    }
    public set timeRange(timeRange: string  | undefined) {
        this['time_range'] = timeRange;
    }
    public get timeRange(): string | undefined {
        return this['time_range'];
    }
}