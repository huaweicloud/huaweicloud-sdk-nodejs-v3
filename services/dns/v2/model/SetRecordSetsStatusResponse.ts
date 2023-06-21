import { AliasTarget } from './AliasTarget';
import { PageLink } from './PageLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetRecordSetsStatusResponse extends SdkResponse {
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
    public bundle?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): SetRecordSetsStatusResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SetRecordSetsStatusResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): SetRecordSetsStatusResponse {
        this['description'] = description;
        return this;
    }
    public withZoneId(zoneId: string): SetRecordSetsStatusResponse {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId() {
        return this['zone_id'];
    }
    public withZoneName(zoneName: string): SetRecordSetsStatusResponse {
        this['zone_name'] = zoneName;
        return this;
    }
    public set zoneName(zoneName: string | undefined) {
        this['zone_name'] = zoneName;
    }
    public get zoneName() {
        return this['zone_name'];
    }
    public withType(type: string): SetRecordSetsStatusResponse {
        this['type'] = type;
        return this;
    }
    public withTtl(ttl: number): SetRecordSetsStatusResponse {
        this['ttl'] = ttl;
        return this;
    }
    public withRecords(records: Array<string>): SetRecordSetsStatusResponse {
        this['records'] = records;
        return this;
    }
    public withCreatedAt(createdAt: string): SetRecordSetsStatusResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): SetRecordSetsStatusResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withStatus(status: string): SetRecordSetsStatusResponse {
        this['status'] = status;
        return this;
    }
    public withDefault(_default: boolean): SetRecordSetsStatusResponse {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean | undefined) {
        this['default'] = _default;
    }
    public get _default() {
        return this['default'];
    }
    public withProjectId(projectId: string): SetRecordSetsStatusResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withLinks(links: PageLink): SetRecordSetsStatusResponse {
        this['links'] = links;
        return this;
    }
    public withLine(line: string): SetRecordSetsStatusResponse {
        this['line'] = line;
        return this;
    }
    public withWeight(weight: number): SetRecordSetsStatusResponse {
        this['weight'] = weight;
        return this;
    }
    public withHealthCheckId(healthCheckId: string): SetRecordSetsStatusResponse {
        this['health_check_id'] = healthCheckId;
        return this;
    }
    public set healthCheckId(healthCheckId: string | undefined) {
        this['health_check_id'] = healthCheckId;
    }
    public get healthCheckId() {
        return this['health_check_id'];
    }
    public withAliasTarget(aliasTarget: AliasTarget): SetRecordSetsStatusResponse {
        this['alias_target'] = aliasTarget;
        return this;
    }
    public set aliasTarget(aliasTarget: AliasTarget | undefined) {
        this['alias_target'] = aliasTarget;
    }
    public get aliasTarget() {
        return this['alias_target'];
    }
    public withBundle(bundle: string): SetRecordSetsStatusResponse {
        this['bundle'] = bundle;
        return this;
    }
}