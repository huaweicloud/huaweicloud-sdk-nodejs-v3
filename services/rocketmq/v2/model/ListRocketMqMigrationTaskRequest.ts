

export class ListRocketMqMigrationTaskRequest {
    private 'instance_id'?: string;
    public id?: string;
    public type?: ListRocketMqMigrationTaskRequestTypeEnum | string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListRocketMqMigrationTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withId(id: string): ListRocketMqMigrationTaskRequest {
        this['id'] = id;
        return this;
    }
    public withType(type: ListRocketMqMigrationTaskRequestTypeEnum | string): ListRocketMqMigrationTaskRequest {
        this['type'] = type;
        return this;
    }
    public withOffset(offset: number): ListRocketMqMigrationTaskRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRocketMqMigrationTaskRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListRocketMqMigrationTaskRequest {
        this['name'] = name;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRocketMqMigrationTaskRequestTypeEnum {
    VHOST = 'vhost',
    EXCHANGE = 'exchange',
    QUEUE = 'queue',
    ALL = 'all'
}
