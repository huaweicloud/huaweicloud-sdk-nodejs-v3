import { AliasTarget } from './AliasTarget';
import { PageLink } from './PageLink';


export class ShowRecordSetByZoneResp {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'zone_id'?: string | undefined;
    private 'zone_name'?: string | undefined;
    public type?: string;
    public ttl?: number;
    public records?: Array<string>;
    private 'create_at'?: string | undefined;
    private 'update_at'?: string | undefined;
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
    public withId(id: string): ShowRecordSetByZoneResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowRecordSetByZoneResp {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowRecordSetByZoneResp {
        this['description'] = description;
        return this;
    }
    public withZoneId(zoneId: string): ShowRecordSetByZoneResp {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId() {
        return this['zone_id'];
    }
    public withZoneName(zoneName: string): ShowRecordSetByZoneResp {
        this['zone_name'] = zoneName;
        return this;
    }
    public set zoneName(zoneName: string | undefined) {
        this['zone_name'] = zoneName;
    }
    public get zoneName() {
        return this['zone_name'];
    }
    public withType(type: string): ShowRecordSetByZoneResp {
        this['type'] = type;
        return this;
    }
    public withTtl(ttl: number): ShowRecordSetByZoneResp {
        this['ttl'] = ttl;
        return this;
    }
    public withRecords(records: Array<string>): ShowRecordSetByZoneResp {
        this['records'] = records;
        return this;
    }
    public withCreateAt(createAt: string): ShowRecordSetByZoneResp {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt() {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: string): ShowRecordSetByZoneResp {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt() {
        return this['update_at'];
    }
    public withStatus(status: string): ShowRecordSetByZoneResp {
        this['status'] = status;
        return this;
    }
    public withDefault(_default: boolean): ShowRecordSetByZoneResp {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean | undefined) {
        this['default'] = _default;
    }
    public get _default() {
        return this['default'];
    }
    public withProjectId(projectId: string): ShowRecordSetByZoneResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withLinks(links: PageLink): ShowRecordSetByZoneResp {
        this['links'] = links;
        return this;
    }
    public withLine(line: string): ShowRecordSetByZoneResp {
        this['line'] = line;
        return this;
    }
    public withWeight(weight: number): ShowRecordSetByZoneResp {
        this['weight'] = weight;
        return this;
    }
    public withHealthCheckId(healthCheckId: string): ShowRecordSetByZoneResp {
        this['health_check_id'] = healthCheckId;
        return this;
    }
    public set healthCheckId(healthCheckId: string | undefined) {
        this['health_check_id'] = healthCheckId;
    }
    public get healthCheckId() {
        return this['health_check_id'];
    }
    public withAliasTarget(aliasTarget: AliasTarget): ShowRecordSetByZoneResp {
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