import { AliasTarget } from './AliasTarget';
import { Link } from './Link';


export class RecordsetData {
    public id?: string;
    public name?: string;
    public description?: string;
    public type?: string;
    public ttl?: number;
    public records?: Array<string>;
    public status?: string;
    private 'zone_id'?: string;
    private 'zone_name'?: string;
    public line?: string;
    private 'alias_target'?: AliasTarget;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'health_check_id'?: string;
    private 'default'?: boolean;
    private 'project_id'?: string;
    public links?: Link;
    public weight?: number;
    public constructor() { 
    }
    public withId(id: string): RecordsetData {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RecordsetData {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): RecordsetData {
        this['description'] = description;
        return this;
    }
    public withType(type: string): RecordsetData {
        this['type'] = type;
        return this;
    }
    public withTtl(ttl: number): RecordsetData {
        this['ttl'] = ttl;
        return this;
    }
    public withRecords(records: Array<string>): RecordsetData {
        this['records'] = records;
        return this;
    }
    public withStatus(status: string): RecordsetData {
        this['status'] = status;
        return this;
    }
    public withZoneId(zoneId: string): RecordsetData {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): string | undefined {
        return this['zone_id'];
    }
    public withZoneName(zoneName: string): RecordsetData {
        this['zone_name'] = zoneName;
        return this;
    }
    public set zoneName(zoneName: string  | undefined) {
        this['zone_name'] = zoneName;
    }
    public get zoneName(): string | undefined {
        return this['zone_name'];
    }
    public withLine(line: string): RecordsetData {
        this['line'] = line;
        return this;
    }
    public withAliasTarget(aliasTarget: AliasTarget): RecordsetData {
        this['alias_target'] = aliasTarget;
        return this;
    }
    public set aliasTarget(aliasTarget: AliasTarget  | undefined) {
        this['alias_target'] = aliasTarget;
    }
    public get aliasTarget(): AliasTarget | undefined {
        return this['alias_target'];
    }
    public withCreatedAt(createdAt: string): RecordsetData {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): RecordsetData {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withHealthCheckId(healthCheckId: string): RecordsetData {
        this['health_check_id'] = healthCheckId;
        return this;
    }
    public set healthCheckId(healthCheckId: string  | undefined) {
        this['health_check_id'] = healthCheckId;
    }
    public get healthCheckId(): string | undefined {
        return this['health_check_id'];
    }
    public withDefault(_default: boolean): RecordsetData {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean  | undefined) {
        this['default'] = _default;
    }
    public get _default(): boolean | undefined {
        return this['default'];
    }
    public withProjectId(projectId: string): RecordsetData {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withLinks(links: Link): RecordsetData {
        this['links'] = links;
        return this;
    }
    public withWeight(weight: number): RecordsetData {
        this['weight'] = weight;
        return this;
    }
}