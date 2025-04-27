import { PageLink } from './PageLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePrivateZoneStatusResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public email?: string;
    private 'zone_type'?: string;
    public ttl?: number;
    public serial?: number;
    public status?: string;
    private 'record_num'?: number;
    private 'pool_id'?: string;
    private 'project_id'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public links?: PageLink;
    public masters?: Array<string>;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdatePrivateZoneStatusResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdatePrivateZoneStatusResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdatePrivateZoneStatusResponse {
        this['description'] = description;
        return this;
    }
    public withEmail(email: string): UpdatePrivateZoneStatusResponse {
        this['email'] = email;
        return this;
    }
    public withZoneType(zoneType: string): UpdatePrivateZoneStatusResponse {
        this['zone_type'] = zoneType;
        return this;
    }
    public set zoneType(zoneType: string  | undefined) {
        this['zone_type'] = zoneType;
    }
    public get zoneType(): string | undefined {
        return this['zone_type'];
    }
    public withTtl(ttl: number): UpdatePrivateZoneStatusResponse {
        this['ttl'] = ttl;
        return this;
    }
    public withSerial(serial: number): UpdatePrivateZoneStatusResponse {
        this['serial'] = serial;
        return this;
    }
    public withStatus(status: string): UpdatePrivateZoneStatusResponse {
        this['status'] = status;
        return this;
    }
    public withRecordNum(recordNum: number): UpdatePrivateZoneStatusResponse {
        this['record_num'] = recordNum;
        return this;
    }
    public set recordNum(recordNum: number  | undefined) {
        this['record_num'] = recordNum;
    }
    public get recordNum(): number | undefined {
        return this['record_num'];
    }
    public withPoolId(poolId: string): UpdatePrivateZoneStatusResponse {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withProjectId(projectId: string): UpdatePrivateZoneStatusResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: string): UpdatePrivateZoneStatusResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): UpdatePrivateZoneStatusResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withLinks(links: PageLink): UpdatePrivateZoneStatusResponse {
        this['links'] = links;
        return this;
    }
    public withMasters(masters: Array<string>): UpdatePrivateZoneStatusResponse {
        this['masters'] = masters;
        return this;
    }
}