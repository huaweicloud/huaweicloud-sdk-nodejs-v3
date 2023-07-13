

export class ListRocketMqMigrationTaskRequest {
    private 'instance_id': string | undefined;
    public id?: string;
    public type?: ListRocketMqMigrationTaskRequestTypeEnum;
    public offset?: string;
    public limit?: string;
    public name?: string;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListRocketMqMigrationTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withId(id: string): ListRocketMqMigrationTaskRequest {
        this['id'] = id;
        return this;
    }
    public withType(type: ListRocketMqMigrationTaskRequestTypeEnum): ListRocketMqMigrationTaskRequest {
        this['type'] = type;
        return this;
    }
    public withOffset(offset: string): ListRocketMqMigrationTaskRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListRocketMqMigrationTaskRequest {
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
