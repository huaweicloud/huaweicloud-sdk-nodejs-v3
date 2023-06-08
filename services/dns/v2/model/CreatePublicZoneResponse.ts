import { PageLink } from './PageLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePublicZoneResponse extends SdkResponse {
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
    public links?: PageLink;
    private 'enterprise_project_id'?: string | undefined;
    public masters?: Array<string>;
    public constructor() { 
        super();
    }
    public withId(id: string): CreatePublicZoneResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreatePublicZoneResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreatePublicZoneResponse {
        this['description'] = description;
        return this;
    }
    public withEmail(email: string): CreatePublicZoneResponse {
        this['email'] = email;
        return this;
    }
    public withZoneType(zoneType: string): CreatePublicZoneResponse {
        this['zone_type'] = zoneType;
        return this;
    }
    public set zoneType(zoneType: string | undefined) {
        this['zone_type'] = zoneType;
    }
    public get zoneType() {
        return this['zone_type'];
    }
    public withTtl(ttl: number): CreatePublicZoneResponse {
        this['ttl'] = ttl;
        return this;
    }
    public withSerial(serial: number): CreatePublicZoneResponse {
        this['serial'] = serial;
        return this;
    }
    public withStatus(status: string): CreatePublicZoneResponse {
        this['status'] = status;
        return this;
    }
    public withRecordNum(recordNum: number): CreatePublicZoneResponse {
        this['record_num'] = recordNum;
        return this;
    }
    public set recordNum(recordNum: number | undefined) {
        this['record_num'] = recordNum;
    }
    public get recordNum() {
        return this['record_num'];
    }
    public withPoolId(poolId: string): CreatePublicZoneResponse {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId() {
        return this['pool_id'];
    }
    public withProjectId(projectId: string): CreatePublicZoneResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: string): CreatePublicZoneResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): CreatePublicZoneResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withLinks(links: PageLink): CreatePublicZoneResponse {
        this['links'] = links;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreatePublicZoneResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withMasters(masters: Array<string>): CreatePublicZoneResponse {
        this['masters'] = masters;
        return this;
    }
}