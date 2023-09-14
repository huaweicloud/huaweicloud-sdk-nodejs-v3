

export class Secret {
    public id?: string;
    public name?: string;
    public state?: string;
    private 'kms_key_id'?: string;
    public description?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'scheduled_delete_time'?: number;
    private 'secret_type'?: string;
    private 'auto_rotation'?: boolean;
    private 'rotation_period'?: string;
    private 'rotation_config'?: string;
    private 'rotation_time'?: number;
    private 'next_rotation_time'?: number;
    private 'event_subscriptions'?: Array<string>;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withId(id: string): Secret {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Secret {
        this['name'] = name;
        return this;
    }
    public withState(state: string): Secret {
        this['state'] = state;
        return this;
    }
    public withKmsKeyId(kmsKeyId: string): Secret {
        this['kms_key_id'] = kmsKeyId;
        return this;
    }
    public set kmsKeyId(kmsKeyId: string  | undefined) {
        this['kms_key_id'] = kmsKeyId;
    }
    public get kmsKeyId(): string | undefined {
        return this['kms_key_id'];
    }
    public withDescription(description: string): Secret {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: number): Secret {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): Secret {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withScheduledDeleteTime(scheduledDeleteTime: number): Secret {
        this['scheduled_delete_time'] = scheduledDeleteTime;
        return this;
    }
    public set scheduledDeleteTime(scheduledDeleteTime: number  | undefined) {
        this['scheduled_delete_time'] = scheduledDeleteTime;
    }
    public get scheduledDeleteTime(): number | undefined {
        return this['scheduled_delete_time'];
    }
    public withSecretType(secretType: string): Secret {
        this['secret_type'] = secretType;
        return this;
    }
    public set secretType(secretType: string  | undefined) {
        this['secret_type'] = secretType;
    }
    public get secretType(): string | undefined {
        return this['secret_type'];
    }
    public withAutoRotation(autoRotation: boolean): Secret {
        this['auto_rotation'] = autoRotation;
        return this;
    }
    public set autoRotation(autoRotation: boolean  | undefined) {
        this['auto_rotation'] = autoRotation;
    }
    public get autoRotation(): boolean | undefined {
        return this['auto_rotation'];
    }
    public withRotationPeriod(rotationPeriod: string): Secret {
        this['rotation_period'] = rotationPeriod;
        return this;
    }
    public set rotationPeriod(rotationPeriod: string  | undefined) {
        this['rotation_period'] = rotationPeriod;
    }
    public get rotationPeriod(): string | undefined {
        return this['rotation_period'];
    }
    public withRotationConfig(rotationConfig: string): Secret {
        this['rotation_config'] = rotationConfig;
        return this;
    }
    public set rotationConfig(rotationConfig: string  | undefined) {
        this['rotation_config'] = rotationConfig;
    }
    public get rotationConfig(): string | undefined {
        return this['rotation_config'];
    }
    public withRotationTime(rotationTime: number): Secret {
        this['rotation_time'] = rotationTime;
        return this;
    }
    public set rotationTime(rotationTime: number  | undefined) {
        this['rotation_time'] = rotationTime;
    }
    public get rotationTime(): number | undefined {
        return this['rotation_time'];
    }
    public withNextRotationTime(nextRotationTime: number): Secret {
        this['next_rotation_time'] = nextRotationTime;
        return this;
    }
    public set nextRotationTime(nextRotationTime: number  | undefined) {
        this['next_rotation_time'] = nextRotationTime;
    }
    public get nextRotationTime(): number | undefined {
        return this['next_rotation_time'];
    }
    public withEventSubscriptions(eventSubscriptions: Array<string>): Secret {
        this['event_subscriptions'] = eventSubscriptions;
        return this;
    }
    public set eventSubscriptions(eventSubscriptions: Array<string>  | undefined) {
        this['event_subscriptions'] = eventSubscriptions;
    }
    public get eventSubscriptions(): Array<string> | undefined {
        return this['event_subscriptions'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Secret {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}