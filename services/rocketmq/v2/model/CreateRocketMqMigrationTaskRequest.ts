

export class CreateRocketMqMigrationTaskRequest {
    private 'instance_id': string | undefined;
    public overwrite: CreateRocketMqMigrationTaskRequestOverwriteEnum;
    public name: string;
    public type: CreateRocketMqMigrationTaskRequestTypeEnum;
    public body?: string;
    public constructor(instanceId?: any, overwrite?: any, name?: any, type?: any) { 
        this['instance_id'] = instanceId;
        this['overwrite'] = overwrite;
        this['name'] = name;
        this['type'] = type;
    }
    public withInstanceId(instanceId: string): CreateRocketMqMigrationTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withOverwrite(overwrite: CreateRocketMqMigrationTaskRequestOverwriteEnum): CreateRocketMqMigrationTaskRequest {
        this['overwrite'] = overwrite;
        return this;
    }
    public withName(name: string): CreateRocketMqMigrationTaskRequest {
        this['name'] = name;
        return this;
    }
    public withType(type: CreateRocketMqMigrationTaskRequestTypeEnum): CreateRocketMqMigrationTaskRequest {
        this['type'] = type;
        return this;
    }
    public withBody(body: string): CreateRocketMqMigrationTaskRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateRocketMqMigrationTaskRequestOverwriteEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateRocketMqMigrationTaskRequestTypeEnum {
    ROCKETMQ = 'rocketmq',
    RABBITTOROCKET = 'rabbitToRocket'
}
