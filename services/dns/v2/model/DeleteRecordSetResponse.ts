import { PageLink } from './PageLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteRecordSetResponse extends SdkResponse {
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
    public constructor() { 
        super();
    }
    public withId(id: string): DeleteRecordSetResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DeleteRecordSetResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): DeleteRecordSetResponse {
        this['description'] = description;
        return this;
    }
    public withZoneId(zoneId: string): DeleteRecordSetResponse {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId() {
        return this['zone_id'];
    }
    public withZoneName(zoneName: string): DeleteRecordSetResponse {
        this['zone_name'] = zoneName;
        return this;
    }
    public set zoneName(zoneName: string | undefined) {
        this['zone_name'] = zoneName;
    }
    public get zoneName() {
        return this['zone_name'];
    }
    public withType(type: string): DeleteRecordSetResponse {
        this['type'] = type;
        return this;
    }
    public withTtl(ttl: number): DeleteRecordSetResponse {
        this['ttl'] = ttl;
        return this;
    }
    public withRecords(records: Array<string>): DeleteRecordSetResponse {
        this['records'] = records;
        return this;
    }
    public withCreateAt(createAt: string): DeleteRecordSetResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt() {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: string): DeleteRecordSetResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt() {
        return this['update_at'];
    }
    public withStatus(status: string): DeleteRecordSetResponse {
        this['status'] = status;
        return this;
    }
    public withDefault(_default: boolean): DeleteRecordSetResponse {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean | undefined) {
        this['default'] = _default;
    }
    public get _default() {
        return this['default'];
    }
    public withProjectId(projectId: string): DeleteRecordSetResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withLinks(links: PageLink): DeleteRecordSetResponse {
        this['links'] = links;
        return this;
    }
}