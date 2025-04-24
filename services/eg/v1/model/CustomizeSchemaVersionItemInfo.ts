

export class CustomizeSchemaVersionItemInfo {
    public id?: string;
    public version?: number;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    public constructor() { 
    }
    public withId(id: string): CustomizeSchemaVersionItemInfo {
        this['id'] = id;
        return this;
    }
    public withVersion(version: number): CustomizeSchemaVersionItemInfo {
        this['version'] = version;
        return this;
    }
    public withCreatedTime(createdTime: string): CustomizeSchemaVersionItemInfo {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): CustomizeSchemaVersionItemInfo {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
}