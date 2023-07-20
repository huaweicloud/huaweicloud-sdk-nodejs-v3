import { PageLink } from './PageLink';
import { RouterWithStatus } from './RouterWithStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeletePrivateZoneResponse extends SdkResponse {
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
    public routers?: Array<RouterWithStatus>;
    public constructor() { 
        super();
    }
    public withId(id: string): DeletePrivateZoneResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DeletePrivateZoneResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): DeletePrivateZoneResponse {
        this['description'] = description;
        return this;
    }
    public withEmail(email: string): DeletePrivateZoneResponse {
        this['email'] = email;
        return this;
    }
    public withZoneType(zoneType: string): DeletePrivateZoneResponse {
        this['zone_type'] = zoneType;
        return this;
    }
    public set zoneType(zoneType: string  | undefined) {
        this['zone_type'] = zoneType;
    }
    public get zoneType(): string | undefined {
        return this['zone_type'];
    }
    public withTtl(ttl: number): DeletePrivateZoneResponse {
        this['ttl'] = ttl;
        return this;
    }
    public withSerial(serial: number): DeletePrivateZoneResponse {
        this['serial'] = serial;
        return this;
    }
    public withStatus(status: string): DeletePrivateZoneResponse {
        this['status'] = status;
        return this;
    }
    public withRecordNum(recordNum: number): DeletePrivateZoneResponse {
        this['record_num'] = recordNum;
        return this;
    }
    public set recordNum(recordNum: number  | undefined) {
        this['record_num'] = recordNum;
    }
    public get recordNum(): number | undefined {
        return this['record_num'];
    }
    public withPoolId(poolId: string): DeletePrivateZoneResponse {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withProjectId(projectId: string): DeletePrivateZoneResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: string): DeletePrivateZoneResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): DeletePrivateZoneResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withLinks(links: PageLink): DeletePrivateZoneResponse {
        this['links'] = links;
        return this;
    }
    public withMasters(masters: Array<string>): DeletePrivateZoneResponse {
        this['masters'] = masters;
        return this;
    }
    public withRouters(routers: Array<RouterWithStatus>): DeletePrivateZoneResponse {
        this['routers'] = routers;
        return this;
    }
}