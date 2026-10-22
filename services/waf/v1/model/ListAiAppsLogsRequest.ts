

export class ListAiAppsLogsRequest {
    private 'Content-Type'?: string;
    private 'app_id'?: string;
    private 'request_id'?: string;
    private 'detect_type'?: string;
    private 'attack_types'?: Array<string>;
    public suggestion?: string;
    private 'app_name'?: string;
    public from?: number;
    public to?: number;
    public limit?: number;
    public offset?: number;
    public marker?: string;
    private 'sort_by'?: string;
    private 'sort_direction'?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListAiAppsLogsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withAppId(appId: string): ListAiAppsLogsRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withRequestId(requestId: string): ListAiAppsLogsRequest {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withDetectType(detectType: string): ListAiAppsLogsRequest {
        this['detect_type'] = detectType;
        return this;
    }
    public set detectType(detectType: string  | undefined) {
        this['detect_type'] = detectType;
    }
    public get detectType(): string | undefined {
        return this['detect_type'];
    }
    public withAttackTypes(attackTypes: Array<string>): ListAiAppsLogsRequest {
        this['attack_types'] = attackTypes;
        return this;
    }
    public set attackTypes(attackTypes: Array<string>  | undefined) {
        this['attack_types'] = attackTypes;
    }
    public get attackTypes(): Array<string> | undefined {
        return this['attack_types'];
    }
    public withSuggestion(suggestion: string): ListAiAppsLogsRequest {
        this['suggestion'] = suggestion;
        return this;
    }
    public withAppName(appName: string): ListAiAppsLogsRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withFrom(from: number): ListAiAppsLogsRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListAiAppsLogsRequest {
        this['to'] = to;
        return this;
    }
    public withLimit(limit: number): ListAiAppsLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAiAppsLogsRequest {
        this['offset'] = offset;
        return this;
    }
    public withMarker(marker: string): ListAiAppsLogsRequest {
        this['marker'] = marker;
        return this;
    }
    public withSortBy(sortBy: string): ListAiAppsLogsRequest {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withSortDirection(sortDirection: string): ListAiAppsLogsRequest {
        this['sort_direction'] = sortDirection;
        return this;
    }
    public set sortDirection(sortDirection: string  | undefined) {
        this['sort_direction'] = sortDirection;
    }
    public get sortDirection(): string | undefined {
        return this['sort_direction'];
    }
}