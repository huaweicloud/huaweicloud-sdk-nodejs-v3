
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEventSchemaVersionResponse extends SdkResponse {
    public id?: string;
    private 'schema_id'?: string;
    public version?: number;
    public format?: string;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    public definition?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateEventSchemaVersionResponse {
        this['id'] = id;
        return this;
    }
    public withSchemaId(schemaId: string): CreateEventSchemaVersionResponse {
        this['schema_id'] = schemaId;
        return this;
    }
    public set schemaId(schemaId: string  | undefined) {
        this['schema_id'] = schemaId;
    }
    public get schemaId(): string | undefined {
        return this['schema_id'];
    }
    public withVersion(version: number): CreateEventSchemaVersionResponse {
        this['version'] = version;
        return this;
    }
    public withFormat(format: string): CreateEventSchemaVersionResponse {
        this['format'] = format;
        return this;
    }
    public withCreatedTime(createdTime: string): CreateEventSchemaVersionResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): CreateEventSchemaVersionResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withDefinition(definition: string): CreateEventSchemaVersionResponse {
        this['definition'] = definition;
        return this;
    }
    public withXRequestId(xRequestId: string): CreateEventSchemaVersionResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}