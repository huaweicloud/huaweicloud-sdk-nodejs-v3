

export class CreateRocketMqMigrationTaskRequest {
    private 'instance_id'?: string;
    public overwrite?: CreateRocketMqMigrationTaskRequestOverwriteEnum | string;
    public name?: string;
    public type?: CreateRocketMqMigrationTaskRequestTypeEnum | string;
    public body?: string;
    public constructor(instanceId?: string, overwrite?: string, name?: string, type?: string) { 
        this['instance_id'] = instanceId;
        this['overwrite'] = overwrite;
        this['name'] = name;
        this['type'] = type;
    }
    public withInstanceId(instanceId: string): CreateRocketMqMigrationTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOverwrite(overwrite: CreateRocketMqMigrationTaskRequestOverwriteEnum | string): CreateRocketMqMigrationTaskRequest {
        this['overwrite'] = overwrite;
        return this;
    }
    public withName(name: string): CreateRocketMqMigrationTaskRequest {
        this['name'] = name;
        return this;
    }
    public withType(type: CreateRocketMqMigrationTaskRequestTypeEnum | string): CreateRocketMqMigrationTaskRequest {
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
