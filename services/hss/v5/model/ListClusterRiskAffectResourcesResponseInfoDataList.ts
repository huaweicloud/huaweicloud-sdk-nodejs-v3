

export class ListClusterRiskAffectResourcesResponseInfoDataList {
    private 'resource_name'?: string;
    private 'resource_id'?: string;
    private 'resource_type'?: string;
    public namespace?: string;
    private 'hit_rule'?: string;
    private 'hit_path_list'?: Array<string>;
    private 'first_scan_time'?: number;
    private 'last_scan_time'?: number;
    public constructor() { 
    }
    public withResourceName(resourceName: string): ListClusterRiskAffectResourcesResponseInfoDataList {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceId(resourceId: string): ListClusterRiskAffectResourcesResponseInfoDataList {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: string): ListClusterRiskAffectResourcesResponseInfoDataList {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withNamespace(namespace: string): ListClusterRiskAffectResourcesResponseInfoDataList {
        this['namespace'] = namespace;
        return this;
    }
    public withHitRule(hitRule: string): ListClusterRiskAffectResourcesResponseInfoDataList {
        this['hit_rule'] = hitRule;
        return this;
    }
    public set hitRule(hitRule: string  | undefined) {
        this['hit_rule'] = hitRule;
    }
    public get hitRule(): string | undefined {
        return this['hit_rule'];
    }
    public withHitPathList(hitPathList: Array<string>): ListClusterRiskAffectResourcesResponseInfoDataList {
        this['hit_path_list'] = hitPathList;
        return this;
    }
    public set hitPathList(hitPathList: Array<string>  | undefined) {
        this['hit_path_list'] = hitPathList;
    }
    public get hitPathList(): Array<string> | undefined {
        return this['hit_path_list'];
    }
    public withFirstScanTime(firstScanTime: number): ListClusterRiskAffectResourcesResponseInfoDataList {
        this['first_scan_time'] = firstScanTime;
        return this;
    }
    public set firstScanTime(firstScanTime: number  | undefined) {
        this['first_scan_time'] = firstScanTime;
    }
    public get firstScanTime(): number | undefined {
        return this['first_scan_time'];
    }
    public withLastScanTime(lastScanTime: number): ListClusterRiskAffectResourcesResponseInfoDataList {
        this['last_scan_time'] = lastScanTime;
        return this;
    }
    public set lastScanTime(lastScanTime: number  | undefined) {
        this['last_scan_time'] = lastScanTime;
    }
    public get lastScanTime(): number | undefined {
        return this['last_scan_time'];
    }
}