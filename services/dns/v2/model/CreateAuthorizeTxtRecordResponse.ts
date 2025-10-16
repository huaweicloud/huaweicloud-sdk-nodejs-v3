import { RecordInfo } from './RecordInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAuthorizeTxtRecordResponse extends SdkResponse {
    public id?: string;
    private 'zone_name'?: string;
    public record?: RecordInfo;
    public status?: string;
    private 'second_level_zone_name'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateAuthorizeTxtRecordResponse {
        this['id'] = id;
        return this;
    }
    public withZoneName(zoneName: string): CreateAuthorizeTxtRecordResponse {
        this['zone_name'] = zoneName;
        return this;
    }
    public set zoneName(zoneName: string  | undefined) {
        this['zone_name'] = zoneName;
    }
    public get zoneName(): string | undefined {
        return this['zone_name'];
    }
    public withRecord(record: RecordInfo): CreateAuthorizeTxtRecordResponse {
        this['record'] = record;
        return this;
    }
    public withStatus(status: string): CreateAuthorizeTxtRecordResponse {
        this['status'] = status;
        return this;
    }
    public withSecondLevelZoneName(secondLevelZoneName: string): CreateAuthorizeTxtRecordResponse {
        this['second_level_zone_name'] = secondLevelZoneName;
        return this;
    }
    public set secondLevelZoneName(secondLevelZoneName: string  | undefined) {
        this['second_level_zone_name'] = secondLevelZoneName;
    }
    public get secondLevelZoneName(): string | undefined {
        return this['second_level_zone_name'];
    }
    public withCreatedAt(createdAt: string): CreateAuthorizeTxtRecordResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): CreateAuthorizeTxtRecordResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}