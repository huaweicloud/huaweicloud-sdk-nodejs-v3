import { AccessTypeStatistics } from './AccessTypeStatistics';
import { ActionStatistics } from './ActionStatistics';
import { CategoryStatistics } from './CategoryStatistics';
import { TimeRange } from './TimeRange';


export class OverviewStatistics {
    private 'project_id'?: string;
    private 'text_request_count'?: number;
    private 'image_request_count'?: number;
    private 'access_type_stats'?: Array<AccessTypeStatistics>;
    private 'category_stats'?: Array<CategoryStatistics>;
    private 'action_stats'?: Array<ActionStatistics>;
    private 'time_range'?: TimeRange;
    private 'active_app_count'?: number;
    public constructor(projectId?: string, textRequestCount?: number, imageRequestCount?: number, accessTypeStats?: Array<AccessTypeStatistics>, categoryStats?: Array<CategoryStatistics>, actionStats?: Array<ActionStatistics>, timeRange?: TimeRange) { 
        this['project_id'] = projectId;
        this['text_request_count'] = textRequestCount;
        this['image_request_count'] = imageRequestCount;
        this['access_type_stats'] = accessTypeStats;
        this['category_stats'] = categoryStats;
        this['action_stats'] = actionStats;
        this['time_range'] = timeRange;
    }
    public withProjectId(projectId: string): OverviewStatistics {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTextRequestCount(textRequestCount: number): OverviewStatistics {
        this['text_request_count'] = textRequestCount;
        return this;
    }
    public set textRequestCount(textRequestCount: number  | undefined) {
        this['text_request_count'] = textRequestCount;
    }
    public get textRequestCount(): number | undefined {
        return this['text_request_count'];
    }
    public withImageRequestCount(imageRequestCount: number): OverviewStatistics {
        this['image_request_count'] = imageRequestCount;
        return this;
    }
    public set imageRequestCount(imageRequestCount: number  | undefined) {
        this['image_request_count'] = imageRequestCount;
    }
    public get imageRequestCount(): number | undefined {
        return this['image_request_count'];
    }
    public withAccessTypeStats(accessTypeStats: Array<AccessTypeStatistics>): OverviewStatistics {
        this['access_type_stats'] = accessTypeStats;
        return this;
    }
    public set accessTypeStats(accessTypeStats: Array<AccessTypeStatistics>  | undefined) {
        this['access_type_stats'] = accessTypeStats;
    }
    public get accessTypeStats(): Array<AccessTypeStatistics> | undefined {
        return this['access_type_stats'];
    }
    public withCategoryStats(categoryStats: Array<CategoryStatistics>): OverviewStatistics {
        this['category_stats'] = categoryStats;
        return this;
    }
    public set categoryStats(categoryStats: Array<CategoryStatistics>  | undefined) {
        this['category_stats'] = categoryStats;
    }
    public get categoryStats(): Array<CategoryStatistics> | undefined {
        return this['category_stats'];
    }
    public withActionStats(actionStats: Array<ActionStatistics>): OverviewStatistics {
        this['action_stats'] = actionStats;
        return this;
    }
    public set actionStats(actionStats: Array<ActionStatistics>  | undefined) {
        this['action_stats'] = actionStats;
    }
    public get actionStats(): Array<ActionStatistics> | undefined {
        return this['action_stats'];
    }
    public withTimeRange(timeRange: TimeRange): OverviewStatistics {
        this['time_range'] = timeRange;
        return this;
    }
    public set timeRange(timeRange: TimeRange  | undefined) {
        this['time_range'] = timeRange;
    }
    public get timeRange(): TimeRange | undefined {
        return this['time_range'];
    }
    public withActiveAppCount(activeAppCount: number): OverviewStatistics {
        this['active_app_count'] = activeAppCount;
        return this;
    }
    public set activeAppCount(activeAppCount: number  | undefined) {
        this['active_app_count'] = activeAppCount;
    }
    public get activeAppCount(): number | undefined {
        return this['active_app_count'];
    }
}