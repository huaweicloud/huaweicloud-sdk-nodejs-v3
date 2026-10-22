import { HistoryItem } from './HistoryItem';
import { HitDetail } from './HitDetail';


export class LogItem {
    public id?: string;
    public timestamp?: number;
    private 'request_id'?: string;
    private 'region_id'?: string;
    private 'engine_id'?: string;
    private 'app_id'?: string;
    private 'app_name'?: string;
    private 'tenant_id'?: string;
    private 'project_id'?: string;
    private 'detect_type'?: string;
    private 'detect_content'?: string;
    public history?: Array<HistoryItem>;
    private 'attack_types'?: Array<string>;
    public suggestion?: string;
    private 'custom_resp'?: string;
    private 'hit_details'?: Array<HitDetail>;
    public constructor() { 
    }
    public withId(id: string): LogItem {
        this['id'] = id;
        return this;
    }
    public withTimestamp(timestamp: number): LogItem {
        this['timestamp'] = timestamp;
        return this;
    }
    public withRequestId(requestId: string): LogItem {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withRegionId(regionId: string): LogItem {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withEngineId(engineId: string): LogItem {
        this['engine_id'] = engineId;
        return this;
    }
    public set engineId(engineId: string  | undefined) {
        this['engine_id'] = engineId;
    }
    public get engineId(): string | undefined {
        return this['engine_id'];
    }
    public withAppId(appId: string): LogItem {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppName(appName: string): LogItem {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withTenantId(tenantId: string): LogItem {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withProjectId(projectId: string): LogItem {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDetectType(detectType: string): LogItem {
        this['detect_type'] = detectType;
        return this;
    }
    public set detectType(detectType: string  | undefined) {
        this['detect_type'] = detectType;
    }
    public get detectType(): string | undefined {
        return this['detect_type'];
    }
    public withDetectContent(detectContent: string): LogItem {
        this['detect_content'] = detectContent;
        return this;
    }
    public set detectContent(detectContent: string  | undefined) {
        this['detect_content'] = detectContent;
    }
    public get detectContent(): string | undefined {
        return this['detect_content'];
    }
    public withHistory(history: Array<HistoryItem>): LogItem {
        this['history'] = history;
        return this;
    }
    public withAttackTypes(attackTypes: Array<string>): LogItem {
        this['attack_types'] = attackTypes;
        return this;
    }
    public set attackTypes(attackTypes: Array<string>  | undefined) {
        this['attack_types'] = attackTypes;
    }
    public get attackTypes(): Array<string> | undefined {
        return this['attack_types'];
    }
    public withSuggestion(suggestion: string): LogItem {
        this['suggestion'] = suggestion;
        return this;
    }
    public withCustomResp(customResp: string): LogItem {
        this['custom_resp'] = customResp;
        return this;
    }
    public set customResp(customResp: string  | undefined) {
        this['custom_resp'] = customResp;
    }
    public get customResp(): string | undefined {
        return this['custom_resp'];
    }
    public withHitDetails(hitDetails: Array<HitDetail>): LogItem {
        this['hit_details'] = hitDetails;
        return this;
    }
    public set hitDetails(hitDetails: Array<HitDetail>  | undefined) {
        this['hit_details'] = hitDetails;
    }
    public get hitDetails(): Array<HitDetail> | undefined {
        return this['hit_details'];
    }
}