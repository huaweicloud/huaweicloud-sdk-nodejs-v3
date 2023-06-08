import { AliasTarget } from './AliasTarget';
import { PageLink } from './PageLink';


export class QueryRecordSetWithLineResp {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'zone_id'?: string | undefined;
    private 'zone_name'?: string | undefined;
    public type?: string;
    public ttl?: number;
    public records?: Array<string>;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    public status?: string;
    private 'default'?: boolean | undefined;
    private 'project_id'?: string | undefined;
    public links?: PageLink;
    public line?: string;
    public weight?: number;
    private 'health_check_id'?: string | undefined;
    private 'alias_target'?: AliasTarget | undefined;
    public constructor() { 
    }
    public withId(id: string): QueryRecordSetWithLineResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): QueryRecordSetWithLineResp {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): QueryRecordSetWithLineResp {
        this['description'] = description;
        return this;
    }
    public withZoneId(zoneId: string): QueryRecordSetWithLineResp {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId() {
        return this['zone_id'];
    }
    public withZoneName(zoneName: string): QueryRecordSetWithLineResp {
        this['zone_name'] = zoneName;
        return this;
    }
    public set zoneName(zoneName: string | undefined) {
        this['zone_name'] = zoneName;
    }
    public get zoneName() {
        return this['zone_name'];
    }
    public withType(type: string): QueryRecordSetWithLineResp {
        this['type'] = type;
        return this;
    }
    public withTtl(ttl: number): QueryRecordSetWithLineResp {
        this['ttl'] = ttl;
        return this;
    }
    public withRecords(records: Array<string>): QueryRecordSetWithLineResp {
        this['records'] = records;
        return this;
    }
    public withCreatedAt(createdAt: string): QueryRecordSetWithLineResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): QueryRecordSetWithLineResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withStatus(status: string): QueryRecordSetWithLineResp {
        this['status'] = status;
        return this;
    }
    public withDefault(_default: boolean): QueryRecordSetWithLineResp {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean | undefined) {
        this['default'] = _default;
    }
    public get _default() {
        return this['default'];
    }
    public withProjectId(projectId: string): QueryRecordSetWithLineResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withLinks(links: PageLink): QueryRecordSetWithLineResp {
        this['links'] = links;
        return this;
    }
    public withLine(line: string): QueryRecordSetWithLineResp {
        this['line'] = line;
        return this;
    }
    public withWeight(weight: number): QueryRecordSetWithLineResp {
        this['weight'] = weight;
        return this;
    }
    public withHealthCheckId(healthCheckId: string): QueryRecordSetWithLineResp {
        this['health_check_id'] = healthCheckId;
        return this;
    }
    public set healthCheckId(healthCheckId: string | undefined) {
        this['health_check_id'] = healthCheckId;
    }
    public get healthCheckId() {
        return this['health_check_id'];
    }
    public withAliasTarget(aliasTarget: AliasTarget): QueryRecordSetWithLineResp {
        this['alias_target'] = aliasTarget;
        return this;
    }
    public set aliasTarget(aliasTarget: AliasTarget | undefined) {
        this['alias_target'] = aliasTarget;
    }
    public get aliasTarget() {
        return this['alias_target'];
    }
}