
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDetailOfEventSchemaVersionResponse extends SdkResponse {
    public id?: string;
    private 'schema_id'?: string;
    public version?: number;
    public format?: string;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    public definition?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowDetailOfEventSchemaVersionResponse {
        this['id'] = id;
        return this;
    }
    public withSchemaId(schemaId: string): ShowDetailOfEventSchemaVersionResponse {
        this['schema_id'] = schemaId;
        return this;
    }
    public set schemaId(schemaId: string  | undefined) {
        this['schema_id'] = schemaId;
    }
    public get schemaId(): string | undefined {
        return this['schema_id'];
    }
    public withVersion(version: number): ShowDetailOfEventSchemaVersionResponse {
        this['version'] = version;
        return this;
    }
    public withFormat(format: string): ShowDetailOfEventSchemaVersionResponse {
        this['format'] = format;
        return this;
    }
    public withCreatedTime(createdTime: string): ShowDetailOfEventSchemaVersionResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): ShowDetailOfEventSchemaVersionResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withDefinition(definition: string): ShowDetailOfEventSchemaVersionResponse {
        this['definition'] = definition;
        return this;
    }
}