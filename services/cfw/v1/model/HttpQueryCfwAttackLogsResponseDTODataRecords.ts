import { PacketMessage } from './PacketMessage';


export class HttpQueryCfwAttackLogsResponseDTODataRecords {
    public direction?: HttpQueryCfwAttackLogsResponseDTODataRecordsDirectionEnum | string;
    public action?: string;
    private 'event_time'?: number;
    private 'attack_type'?: string;
    private 'attack_rule'?: string;
    public level?: string;
    public source?: string;
    private 'packet_length'?: number;
    private 'attack_rule_id'?: string;
    private 'hit_time'?: number;
    private 'log_id'?: string;
    private 'src_ip'?: string;
    private 'src_port'?: number;
    private 'dst_ip'?: string;
    private 'dst_port'?: number;
    public protocol?: string;
    public packet?: string;
    public app?: string;
    public packetMessages?: Array<PacketMessage>;
    private 'src_region_id'?: string;
    private 'src_region_name'?: string;
    private 'dst_region_id'?: string;
    private 'dst_region_name'?: string;
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
    public withDirection(direction: HttpQueryCfwAttackLogsResponseDTODataRecordsDirectionEnum | string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['direction'] = direction;
        return this;
    }
    public withAction(action: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['action'] = action;
        return this;
    }
    public withEventTime(eventTime: number): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['event_time'] = eventTime;
        return this;
    }
    public set eventTime(eventTime: number  | undefined) {
        this['event_time'] = eventTime;
    }
    public get eventTime(): number | undefined {
        return this['event_time'];
    }
    public withAttackType(attackType: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['attack_type'] = attackType;
        return this;
    }
    public set attackType(attackType: string  | undefined) {
        this['attack_type'] = attackType;
    }
    public get attackType(): string | undefined {
        return this['attack_type'];
    }
    public withAttackRule(attackRule: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['attack_rule'] = attackRule;
        return this;
    }
    public set attackRule(attackRule: string  | undefined) {
        this['attack_rule'] = attackRule;
    }
    public get attackRule(): string | undefined {
        return this['attack_rule'];
    }
    public withLevel(level: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['level'] = level;
        return this;
    }
    public withSource(source: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['source'] = source;
        return this;
    }
    public withPacketLength(packetLength: number): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['packet_length'] = packetLength;
        return this;
    }
    public set packetLength(packetLength: number  | undefined) {
        this['packet_length'] = packetLength;
    }
    public get packetLength(): number | undefined {
        return this['packet_length'];
    }
    public withAttackRuleId(attackRuleId: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['attack_rule_id'] = attackRuleId;
        return this;
    }
    public set attackRuleId(attackRuleId: string  | undefined) {
        this['attack_rule_id'] = attackRuleId;
    }
    public get attackRuleId(): string | undefined {
        return this['attack_rule_id'];
    }
    public withHitTime(hitTime: number): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['hit_time'] = hitTime;
        return this;
    }
    public set hitTime(hitTime: number  | undefined) {
        this['hit_time'] = hitTime;
    }
    public get hitTime(): number | undefined {
        return this['hit_time'];
    }
    public withLogId(logId: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['log_id'] = logId;
        return this;
    }
    public set logId(logId: string  | undefined) {
        this['log_id'] = logId;
    }
    public get logId(): string | undefined {
        return this['log_id'];
    }
    public withSrcIp(srcIp: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: string  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): string | undefined {
        return this['src_ip'];
    }
    public withSrcPort(srcPort: number): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['src_port'] = srcPort;
        return this;
    }
    public set srcPort(srcPort: number  | undefined) {
        this['src_port'] = srcPort;
    }
    public get srcPort(): number | undefined {
        return this['src_port'];
    }
    public withDstIp(dstIp: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['dst_ip'] = dstIp;
        return this;
    }
    public set dstIp(dstIp: string  | undefined) {
        this['dst_ip'] = dstIp;
    }
    public get dstIp(): string | undefined {
        return this['dst_ip'];
    }
    public withDstPort(dstPort: number): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['dst_port'] = dstPort;
        return this;
    }
    public set dstPort(dstPort: number  | undefined) {
        this['dst_port'] = dstPort;
    }
    public get dstPort(): number | undefined {
        return this['dst_port'];
    }
    public withProtocol(protocol: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['protocol'] = protocol;
        return this;
    }
    public withPacket(packet: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['packet'] = packet;
        return this;
    }
    public withApp(app: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['app'] = app;
        return this;
    }
    public withPacketMessages(packetMessages: Array<PacketMessage>): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['packetMessages'] = packetMessages;
        return this;
    }
    public withSrcRegionId(srcRegionId: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['src_region_id'] = srcRegionId;
        return this;
    }
    public set srcRegionId(srcRegionId: string  | undefined) {
        this['src_region_id'] = srcRegionId;
    }
    public get srcRegionId(): string | undefined {
        return this['src_region_id'];
    }
    public withSrcRegionName(srcRegionName: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['src_region_name'] = srcRegionName;
        return this;
    }
    public set srcRegionName(srcRegionName: string  | undefined) {
        this['src_region_name'] = srcRegionName;
    }
    public get srcRegionName(): string | undefined {
        return this['src_region_name'];
    }
    public withDstRegionId(dstRegionId: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['dst_region_id'] = dstRegionId;
        return this;
    }
    public set dstRegionId(dstRegionId: string  | undefined) {
        this['dst_region_id'] = dstRegionId;
    }
    public get dstRegionId(): string | undefined {
        return this['dst_region_id'];
    }
    public withDstRegionName(dstRegionName: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['dst_region_name'] = dstRegionName;
        return this;
    }
    public set dstRegionName(dstRegionName: string  | undefined) {
        this['dst_region_name'] = dstRegionName;
    }
    public get dstRegionName(): string | undefined {
        return this['dst_region_name'];
    }
    public withSrcProvinceId(srcProvinceId: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['src_province_id'] = srcProvinceId;
        return this;
    }
    public set srcProvinceId(srcProvinceId: string  | undefined) {
        this['src_province_id'] = srcProvinceId;
    }
    public get srcProvinceId(): string | undefined {
        return this['src_province_id'];
    }
    public withSrcProvinceName(srcProvinceName: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['src_province_name'] = srcProvinceName;
        return this;
    }
    public set srcProvinceName(srcProvinceName: string  | undefined) {
        this['src_province_name'] = srcProvinceName;
    }
    public get srcProvinceName(): string | undefined {
        return this['src_province_name'];
    }
    public withSrcCityId(srcCityId: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['src_city_id'] = srcCityId;
        return this;
    }
    public set srcCityId(srcCityId: string  | undefined) {
        this['src_city_id'] = srcCityId;
    }
    public get srcCityId(): string | undefined {
        return this['src_city_id'];
    }
    public withSrcCityName(srcCityName: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['src_city_name'] = srcCityName;
        return this;
    }
    public set srcCityName(srcCityName: string  | undefined) {
        this['src_city_name'] = srcCityName;
    }
    public get srcCityName(): string | undefined {
        return this['src_city_name'];
    }
    public withDstProvinceId(dstProvinceId: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['dst_province_id'] = dstProvinceId;
        return this;
    }
    public set dstProvinceId(dstProvinceId: string  | undefined) {
        this['dst_province_id'] = dstProvinceId;
    }
    public get dstProvinceId(): string | undefined {
        return this['dst_province_id'];
    }
    public withDstProvinceName(dstProvinceName: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['dst_province_name'] = dstProvinceName;
        return this;
    }
    public set dstProvinceName(dstProvinceName: string  | undefined) {
        this['dst_province_name'] = dstProvinceName;
    }
    public get dstProvinceName(): string | undefined {
        return this['dst_province_name'];
    }
    public withDstCityId(dstCityId: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
        this['dst_city_id'] = dstCityId;
        return this;
    }
    public set dstCityId(dstCityId: string  | undefined) {
        this['dst_city_id'] = dstCityId;
    }
    public get dstCityId(): string | undefined {
        return this['dst_city_id'];
    }
    public withDstCityName(dstCityName: string): HttpQueryCfwAttackLogsResponseDTODataRecords {
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

/**
    * @export
    * @enum {string}
    */
export enum HttpQueryCfwAttackLogsResponseDTODataRecordsDirectionEnum {
    OUT2IN = 'out2in',
    IN2OUT = 'in2out'
}
