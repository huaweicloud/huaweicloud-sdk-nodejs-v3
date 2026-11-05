

export class SupabaseApplicationApiKeyRecord {
    public id?: string;
    public name?: string;
    public remark?: string;
    public status?: SupabaseApplicationApiKeyRecordStatusEnum | string;
    public type?: SupabaseApplicationApiKeyRecordTypeEnum | string;
    private 'created_user'?: string;
    private 'updated_user'?: string;
    private 'created_time'?: number;
    private 'updated_time'?: number;
    public constructor() { 
    }
    public withId(id: string): SupabaseApplicationApiKeyRecord {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SupabaseApplicationApiKeyRecord {
        this['name'] = name;
        return this;
    }
    public withRemark(remark: string): SupabaseApplicationApiKeyRecord {
        this['remark'] = remark;
        return this;
    }
    public withStatus(status: SupabaseApplicationApiKeyRecordStatusEnum | string): SupabaseApplicationApiKeyRecord {
        this['status'] = status;
        return this;
    }
    public withType(type: SupabaseApplicationApiKeyRecordTypeEnum | string): SupabaseApplicationApiKeyRecord {
        this['type'] = type;
        return this;
    }
    public withCreatedUser(createdUser: string): SupabaseApplicationApiKeyRecord {
        this['created_user'] = createdUser;
        return this;
    }
    public set createdUser(createdUser: string  | undefined) {
        this['created_user'] = createdUser;
    }
    public get createdUser(): string | undefined {
        return this['created_user'];
    }
    public withUpdatedUser(updatedUser: string): SupabaseApplicationApiKeyRecord {
        this['updated_user'] = updatedUser;
        return this;
    }
    public set updatedUser(updatedUser: string  | undefined) {
        this['updated_user'] = updatedUser;
    }
    public get updatedUser(): string | undefined {
        return this['updated_user'];
    }
    public withCreatedTime(createdTime: number): SupabaseApplicationApiKeyRecord {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: number  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): number | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: number): SupabaseApplicationApiKeyRecord {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: number  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): number | undefined {
        return this['updated_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SupabaseApplicationApiKeyRecordStatusEnum {
    NORMAL = 'normal',
    CREATING = 'creating',
    CREATEFAIL = 'createfail',
    DELETED = 'deleted'
}
/**
    * @export
    * @enum {string}
    */
export enum SupabaseApplicationApiKeyRecordTypeEnum {
    PUBLISHABLE = 'publishable',
    SECRET = 'secret',
    ANON = 'anon',
    SERVICE_ROLE = 'service_role'
}
