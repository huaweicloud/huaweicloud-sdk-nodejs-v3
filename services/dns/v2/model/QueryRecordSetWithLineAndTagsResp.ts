import { AliasTarget } from './AliasTarget';
import { PageLink } from './PageLink';
import { Tag } from './Tag';


export class QueryRecordSetWithLineAndTagsResp {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'zone_id'?: string;
    private 'zone_name'?: string;
    public type?: string;
    public ttl?: number;
    public records?: Array<string>;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public status?: string;
    private 'default'?: boolean;
    private 'project_id'?: string;
    public links?: PageLink;
    public tags?: Array<Tag>;
    public line?: string;
    private 'line_name'?: string;
    public weight?: number;
    private 'health_check_id'?: string;
    private 'alias_target'?: AliasTarget;
    public constructor() { 
    }
    public withId(id: string): QueryRecordSetWithLineAndTagsResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): QueryRecordSetWithLineAndTagsResp {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): QueryRecordSetWithLineAndTagsResp {
        this['description'] = description;
        return this;
    }
    public withZoneId(zoneId: string): QueryRecordSetWithLineAndTagsResp {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): string | undefined {
        return this['zone_id'];
    }
    public withZoneName(zoneName: string): QueryRecordSetWithLineAndTagsResp {
        this['zone_name'] = zoneName;
        return this;
    }
    public set zoneName(zoneName: string  | undefined) {
        this['zone_name'] = zoneName;
    }
    public get zoneName(): string | undefined {
        return this['zone_name'];
    }
    public withType(type: string): QueryRecordSetWithLineAndTagsResp {
        this['type'] = type;
        return this;
    }
    public withTtl(ttl: number): QueryRecordSetWithLineAndTagsResp {
        this['ttl'] = ttl;
        return this;
    }
    public withRecords(records: Array<string>): QueryRecordSetWithLineAndTagsResp {
        this['records'] = records;
        return this;
    }
    public withCreatedAt(createdAt: string): QueryRecordSetWithLineAndTagsResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): QueryRecordSetWithLineAndTagsResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withStatus(status: string): QueryRecordSetWithLineAndTagsResp {
        this['status'] = status;
        return this;
    }
    public withDefault(_default: boolean): QueryRecordSetWithLineAndTagsResp {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean  | undefined) {
        this['default'] = _default;
    }
    public get _default(): boolean | undefined {
        return this['default'];
    }
    public withProjectId(projectId: string): QueryRecordSetWithLineAndTagsResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withLinks(links: PageLink): QueryRecordSetWithLineAndTagsResp {
        this['links'] = links;
        return this;
    }
    public withTags(tags: Array<Tag>): QueryRecordSetWithLineAndTagsResp {
        this['tags'] = tags;
        return this;
    }
    public withLine(line: string): QueryRecordSetWithLineAndTagsResp {
        this['line'] = line;
        return this;
    }
    public withLineName(lineName: string): QueryRecordSetWithLineAndTagsResp {
        this['line_name'] = lineName;
        return this;
    }
    public set lineName(lineName: string  | undefined) {
        this['line_name'] = lineName;
    }
    public get lineName(): string | undefined {
        return this['line_name'];
    }
    public withWeight(weight: number): QueryRecordSetWithLineAndTagsResp {
        this['weight'] = weight;
        return this;
    }
    public withHealthCheckId(healthCheckId: string): QueryRecordSetWithLineAndTagsResp {
        this['health_check_id'] = healthCheckId;
        return this;
    }
    public set healthCheckId(healthCheckId: string  | undefined) {
        this['health_check_id'] = healthCheckId;
    }
    public get healthCheckId(): string | undefined {
        return this['health_check_id'];
    }
    public withAliasTarget(aliasTarget: AliasTarget): QueryRecordSetWithLineAndTagsResp {
        this['alias_target'] = aliasTarget;
        return this;
    }
    public set aliasTarget(aliasTarget: AliasTarget  | undefined) {
        this['alias_target'] = aliasTarget;
    }
    public get aliasTarget(): AliasTarget | undefined {
        return this['alias_target'];
    }
}