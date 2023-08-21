
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDashBoardResponse extends SdkResponse {
    public charts?: Array<string>;
    public filters?: Array<string>;
    private 'group_name'?: string;
    public id?: string;
    private 'last_update_time'?: number;
    private 'project_id'?: string;
    public title?: string;
    public useSystemTemplate?: boolean;
    public constructor() { 
        super();
    }
    public withCharts(charts: Array<string>): CreateDashBoardResponse {
        this['charts'] = charts;
        return this;
    }
    public withFilters(filters: Array<string>): CreateDashBoardResponse {
        this['filters'] = filters;
        return this;
    }
    public withGroupName(groupName: string): CreateDashBoardResponse {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withId(id: string): CreateDashBoardResponse {
        this['id'] = id;
        return this;
    }
    public withLastUpdateTime(lastUpdateTime: number): CreateDashBoardResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: number  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): number | undefined {
        return this['last_update_time'];
    }
    public withProjectId(projectId: string): CreateDashBoardResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTitle(title: string): CreateDashBoardResponse {
        this['title'] = title;
        return this;
    }
    public withUseSystemTemplate(useSystemTemplate: boolean): CreateDashBoardResponse {
        this['useSystemTemplate'] = useSystemTemplate;
        return this;
    }
}