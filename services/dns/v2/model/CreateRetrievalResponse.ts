import { RecordInfo } from './RecordInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRetrievalResponse extends SdkResponse {
    public id?: string;
    private 'zone_name'?: string;
    public record?: RecordInfo;
    public status?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateRetrievalResponse {
        this['id'] = id;
        return this;
    }
    public withZoneName(zoneName: string): CreateRetrievalResponse {
        this['zone_name'] = zoneName;
        return this;
    }
    public set zoneName(zoneName: string  | undefined) {
        this['zone_name'] = zoneName;
    }
    public get zoneName(): string | undefined {
        return this['zone_name'];
    }
    public withRecord(record: RecordInfo): CreateRetrievalResponse {
        this['record'] = record;
        return this;
    }
    public withStatus(status: string): CreateRetrievalResponse {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): CreateRetrievalResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): CreateRetrievalResponse {
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