import { AliasTarget } from './AliasTarget';
import { PageLink } from './PageLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateRecordSetsResponse extends SdkResponse {
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
    public line?: string;
    public weight?: number;
    private 'health_check_id'?: string;
    private 'alias_target'?: AliasTarget;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateRecordSetsResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateRecordSetsResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateRecordSetsResponse {
        this['description'] = description;
        return this;
    }
    public withZoneId(zoneId: string): UpdateRecordSetsResponse {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): string | undefined {
        return this['zone_id'];
    }
    public withZoneName(zoneName: string): UpdateRecordSetsResponse {
        this['zone_name'] = zoneName;
        return this;
    }
    public set zoneName(zoneName: string  | undefined) {
        this['zone_name'] = zoneName;
    }
    public get zoneName(): string | undefined {
        return this['zone_name'];
    }
    public withType(type: string): UpdateRecordSetsResponse {
        this['type'] = type;
        return this;
    }
    public withTtl(ttl: number): UpdateRecordSetsResponse {
        this['ttl'] = ttl;
        return this;
    }
    public withRecords(records: Array<string>): UpdateRecordSetsResponse {
        this['records'] = records;
        return this;
    }
    public withCreatedAt(createdAt: string): UpdateRecordSetsResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): UpdateRecordSetsResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withStatus(status: string): UpdateRecordSetsResponse {
        this['status'] = status;
        return this;
    }
    public withDefault(_default: boolean): UpdateRecordSetsResponse {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean  | undefined) {
        this['default'] = _default;
    }
    public get _default(): boolean | undefined {
        return this['default'];
    }
    public withProjectId(projectId: string): UpdateRecordSetsResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withLinks(links: PageLink): UpdateRecordSetsResponse {
        this['links'] = links;
        return this;
    }
    public withLine(line: string): UpdateRecordSetsResponse {
        this['line'] = line;
        return this;
    }
    public withWeight(weight: number): UpdateRecordSetsResponse {
        this['weight'] = weight;
        return this;
    }
    public withHealthCheckId(healthCheckId: string): UpdateRecordSetsResponse {
        this['health_check_id'] = healthCheckId;
        return this;
    }
    public set healthCheckId(healthCheckId: string  | undefined) {
        this['health_check_id'] = healthCheckId;
    }
    public get healthCheckId(): string | undefined {
        return this['health_check_id'];
    }
    public withAliasTarget(aliasTarget: AliasTarget): UpdateRecordSetsResponse {
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