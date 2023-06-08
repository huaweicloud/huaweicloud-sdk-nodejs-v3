import { PageLink } from './PageLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeletePublicZoneResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public email?: string;
    private 'zone_type'?: string | undefined;
    public ttl?: number;
    public serial?: number;
    public status?: string;
    private 'record_num'?: number | undefined;
    private 'pool_id'?: string | undefined;
    private 'project_id'?: string | undefined;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    public masters?: Array<string>;
    public links?: PageLink;
    public constructor() { 
        super();
    }
    public withId(id: string): DeletePublicZoneResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DeletePublicZoneResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): DeletePublicZoneResponse {
        this['description'] = description;
        return this;
    }
    public withEmail(email: string): DeletePublicZoneResponse {
        this['email'] = email;
        return this;
    }
    public withZoneType(zoneType: string): DeletePublicZoneResponse {
        this['zone_type'] = zoneType;
        return this;
    }
    public set zoneType(zoneType: string | undefined) {
        this['zone_type'] = zoneType;
    }
    public get zoneType() {
        return this['zone_type'];
    }
    public withTtl(ttl: number): DeletePublicZoneResponse {
        this['ttl'] = ttl;
        return this;
    }
    public withSerial(serial: number): DeletePublicZoneResponse {
        this['serial'] = serial;
        return this;
    }
    public withStatus(status: string): DeletePublicZoneResponse {
        this['status'] = status;
        return this;
    }
    public withRecordNum(recordNum: number): DeletePublicZoneResponse {
        this['record_num'] = recordNum;
        return this;
    }
    public set recordNum(recordNum: number | undefined) {
        this['record_num'] = recordNum;
    }
    public get recordNum() {
        return this['record_num'];
    }
    public withPoolId(poolId: string): DeletePublicZoneResponse {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId() {
        return this['pool_id'];
    }
    public withProjectId(projectId: string): DeletePublicZoneResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: string): DeletePublicZoneResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): DeletePublicZoneResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withMasters(masters: Array<string>): DeletePublicZoneResponse {
        this['masters'] = masters;
        return this;
    }
    public withLinks(links: PageLink): DeletePublicZoneResponse {
        this['links'] = links;
        return this;
    }
}