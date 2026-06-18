
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserEmailsResponse extends SdkResponse {
    public id?: number;
    public name?: string;
    public username?: string;
    public state?: ShowUserEmailsResponseStateEnum | string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'last_activity_on'?: string;
    private 'commit_email'?: string;
    private 'is_default'?: boolean;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowUserEmailsResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowUserEmailsResponse {
        this['name'] = name;
        return this;
    }
    public withUsername(username: string): ShowUserEmailsResponse {
        this['username'] = username;
        return this;
    }
    public withState(state: ShowUserEmailsResponseStateEnum | string): ShowUserEmailsResponse {
        this['state'] = state;
        return this;
    }
    public withCreatedAt(createdAt: string): ShowUserEmailsResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowUserEmailsResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withLastActivityOn(lastActivityOn: string): ShowUserEmailsResponse {
        this['last_activity_on'] = lastActivityOn;
        return this;
    }
    public set lastActivityOn(lastActivityOn: string  | undefined) {
        this['last_activity_on'] = lastActivityOn;
    }
    public get lastActivityOn(): string | undefined {
        return this['last_activity_on'];
    }
    public withCommitEmail(commitEmail: string): ShowUserEmailsResponse {
        this['commit_email'] = commitEmail;
        return this;
    }
    public set commitEmail(commitEmail: string  | undefined) {
        this['commit_email'] = commitEmail;
    }
    public get commitEmail(): string | undefined {
        return this['commit_email'];
    }
    public withIsDefault(isDefault: boolean): ShowUserEmailsResponse {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowUserEmailsResponseStateEnum {
    ACTIVE = 'active',
    BLOCKED = 'blocked'
}
