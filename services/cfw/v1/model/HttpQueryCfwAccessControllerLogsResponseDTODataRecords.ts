

export class HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
    public action?: string;
    private 'rule_name'?: string;
    private 'rule_id'?: string;
    private 'hit_time'?: number;
    private 'src_region_id'?: string;
    private 'src_region_name'?: string;
    private 'dst_region_id'?: string;
    private 'dst_region_name'?: string;
    private 'log_id'?: string;
    private 'src_ip'?: string;
    private 'src_port'?: number;
    private 'dst_ip'?: string;
    private 'dst_port'?: number;
    public protocol?: string;
    public app?: string;
    private 'dst_host'?: string;
    private 'src_province_id'?: string;
    private 'src_province_name'?: string;
    private 'src_city_id'?: string;
    private 'src_city_name'?: string;
    private 'dst_province_id'?: string;
    private 'dst_province_name'?: string;
    private 'dst_city_id'?: string;
    private 'dst_city_name'?: string;
    public constructor() { 
    }
    public withAction(action: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['action'] = action;
        return this;
    }
    public withRuleName(ruleName: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withRuleId(ruleId: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withHitTime(hitTime: number): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['hit_time'] = hitTime;
        return this;
    }
    public set hitTime(hitTime: number  | undefined) {
        this['hit_time'] = hitTime;
    }
    public get hitTime(): number | undefined {
        return this['hit_time'];
    }
    public withSrcRegionId(srcRegionId: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['src_region_id'] = srcRegionId;
        return this;
    }
    public set srcRegionId(srcRegionId: string  | undefined) {
        this['src_region_id'] = srcRegionId;
    }
    public get srcRegionId(): string | undefined {
        return this['src_region_id'];
    }
    public withSrcRegionName(srcRegionName: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['src_region_name'] = srcRegionName;
        return this;
    }
    public set srcRegionName(srcRegionName: string  | undefined) {
        this['src_region_name'] = srcRegionName;
    }
    public get srcRegionName(): string | undefined {
        return this['src_region_name'];
    }
    public withDstRegionId(dstRegionId: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['dst_region_id'] = dstRegionId;
        return this;
    }
    public set dstRegionId(dstRegionId: string  | undefined) {
        this['dst_region_id'] = dstRegionId;
    }
    public get dstRegionId(): string | undefined {
        return this['dst_region_id'];
    }
    public withDstRegionName(dstRegionName: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['dst_region_name'] = dstRegionName;
        return this;
    }
    public set dstRegionName(dstRegionName: string  | undefined) {
        this['dst_region_name'] = dstRegionName;
    }
    public get dstRegionName(): string | undefined {
        return this['dst_region_name'];
    }
    public withLogId(logId: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['log_id'] = logId;
        return this;
    }
    public set logId(logId: string  | undefined) {
        this['log_id'] = logId;
    }
    public get logId(): string | undefined {
        return this['log_id'];
    }
    public withSrcIp(srcIp: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: string  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): string | undefined {
        return this['src_ip'];
    }
    public withSrcPort(srcPort: number): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['src_port'] = srcPort;
        return this;
    }
    public set srcPort(srcPort: number  | undefined) {
        this['src_port'] = srcPort;
    }
    public get srcPort(): number | undefined {
        return this['src_port'];
    }
    public withDstIp(dstIp: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['dst_ip'] = dstIp;
        return this;
    }
    public set dstIp(dstIp: string  | undefined) {
        this['dst_ip'] = dstIp;
    }
    public get dstIp(): string | undefined {
        return this['dst_ip'];
    }
    public withDstPort(dstPort: number): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['dst_port'] = dstPort;
        return this;
    }
    public set dstPort(dstPort: number  | undefined) {
        this['dst_port'] = dstPort;
    }
    public get dstPort(): number | undefined {
        return this['dst_port'];
    }
    public withProtocol(protocol: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['protocol'] = protocol;
        return this;
    }
    public withApp(app: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['app'] = app;
        return this;
    }
    public withDstHost(dstHost: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['dst_host'] = dstHost;
        return this;
    }
    public set dstHost(dstHost: string  | undefined) {
        this['dst_host'] = dstHost;
    }
    public get dstHost(): string | undefined {
        return this['dst_host'];
    }
    public withSrcProvinceId(srcProvinceId: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['src_province_id'] = srcProvinceId;
        return this;
    }
    public set srcProvinceId(srcProvinceId: string  | undefined) {
        this['src_province_id'] = srcProvinceId;
    }
    public get srcProvinceId(): string | undefined {
        return this['src_province_id'];
    }
    public withSrcProvinceName(srcProvinceName: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['src_province_name'] = srcProvinceName;
        return this;
    }
    public set srcProvinceName(srcProvinceName: string  | undefined) {
        this['src_province_name'] = srcProvinceName;
    }
    public get srcProvinceName(): string | undefined {
        return this['src_province_name'];
    }
    public withSrcCityId(srcCityId: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['src_city_id'] = srcCityId;
        return this;
    }
    public set srcCityId(srcCityId: string  | undefined) {
        this['src_city_id'] = srcCityId;
    }
    public get srcCityId(): string | undefined {
        return this['src_city_id'];
    }
    public withSrcCityName(srcCityName: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['src_city_name'] = srcCityName;
        return this;
    }
    public set srcCityName(srcCityName: string  | undefined) {
        this['src_city_name'] = srcCityName;
    }
    public get srcCityName(): string | undefined {
        return this['src_city_name'];
    }
    public withDstProvinceId(dstProvinceId: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['dst_province_id'] = dstProvinceId;
        return this;
    }
    public set dstProvinceId(dstProvinceId: string  | undefined) {
        this['dst_province_id'] = dstProvinceId;
    }
    public get dstProvinceId(): string | undefined {
        return this['dst_province_id'];
    }
    public withDstProvinceName(dstProvinceName: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['dst_province_name'] = dstProvinceName;
        return this;
    }
    public set dstProvinceName(dstProvinceName: string  | undefined) {
        this['dst_province_name'] = dstProvinceName;
    }
    public get dstProvinceName(): string | undefined {
        return this['dst_province_name'];
    }
    public withDstCityId(dstCityId: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['dst_city_id'] = dstCityId;
        return this;
    }
    public set dstCityId(dstCityId: string  | undefined) {
        this['dst_city_id'] = dstCityId;
    }
    public get dstCityId(): string | undefined {
        return this['dst_city_id'];
    }
    public withDstCityName(dstCityName: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['dst_city_name'] = dstCityName;
        return this;
    }
    public set dstCityName(dstCityName: string  | undefined) {
        this['dst_city_name'] = dstCityName;
    }
    public get dstCityName(): string | undefined {
        return this['dst_city_name'];
    }
}