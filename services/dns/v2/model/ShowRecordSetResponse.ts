import { PageLink } from './PageLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRecordSetResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'zone_id'?: string;
    private 'zone_name'?: string;
    public type?: string;
    public ttl?: number;
    public records?: Array<string>;
    private 'create_at'?: string;
    private 'update_at'?: string;
    public status?: string;
    private 'default'?: boolean;
    private 'project_id'?: string;
    public links?: PageLink;
    public bundle?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowRecordSetResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowRecordSetResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowRecordSetResponse {
        this['description'] = description;
        return this;
    }
    public withZoneId(zoneId: string): ShowRecordSetResponse {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): string | undefined {
        return this['zone_id'];
    }
    public withZoneName(zoneName: string): ShowRecordSetResponse {
        this['zone_name'] = zoneName;
        return this;
    }
    public set zoneName(zoneName: string  | undefined) {
        this['zone_name'] = zoneName;
    }
    public get zoneName(): string | undefined {
        return this['zone_name'];
    }
    public withType(type: string): ShowRecordSetResponse {
        this['type'] = type;
        return this;
    }
    public withTtl(ttl: number): ShowRecordSetResponse {
        this['ttl'] = ttl;
        return this;
    }
    public withRecords(records: Array<string>): ShowRecordSetResponse {
        this['records'] = records;
        return this;
    }
    public withCreateAt(createAt: string): ShowRecordSetResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): string | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: string): ShowRecordSetResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): string | undefined {
        return this['update_at'];
    }
    public withStatus(status: string): ShowRecordSetResponse {
        this['status'] = status;
        return this;
    }
    public withDefault(_default: boolean): ShowRecordSetResponse {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean  | undefined) {
        this['default'] = _default;
    }
    public get _default(): boolean | undefined {
        return this['default'];
    }
    public withProjectId(projectId: string): ShowRecordSetResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withLinks(links: PageLink): ShowRecordSetResponse {
        this['links'] = links;
        return this;
    }
    public withBundle(bundle: string): ShowRecordSetResponse {
        this['bundle'] = bundle;
        return this;
    }
}