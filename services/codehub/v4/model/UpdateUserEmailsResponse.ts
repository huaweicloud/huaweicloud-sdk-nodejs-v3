
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateUserEmailsResponse extends SdkResponse {
    public id?: number;
    public name?: string;
    public username?: string;
    public state?: UpdateUserEmailsResponseStateEnum | string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'last_activity_on'?: string;
    private 'commit_email'?: string;
    public constructor() { 
        super();
    }
    public withId(id: number): UpdateUserEmailsResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateUserEmailsResponse {
        this['name'] = name;
        return this;
    }
    public withUsername(username: string): UpdateUserEmailsResponse {
        this['username'] = username;
        return this;
    }
    public withState(state: UpdateUserEmailsResponseStateEnum | string): UpdateUserEmailsResponse {
        this['state'] = state;
        return this;
    }
    public withCreatedAt(createdAt: string): UpdateUserEmailsResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): UpdateUserEmailsResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withLastActivityOn(lastActivityOn: string): UpdateUserEmailsResponse {
        this['last_activity_on'] = lastActivityOn;
        return this;
    }
    public set lastActivityOn(lastActivityOn: string  | undefined) {
        this['last_activity_on'] = lastActivityOn;
    }
    public get lastActivityOn(): string | undefined {
        return this['last_activity_on'];
    }
    public withCommitEmail(commitEmail: string): UpdateUserEmailsResponse {
        this['commit_email'] = commitEmail;
        return this;
    }
    public set commitEmail(commitEmail: string  | undefined) {
        this['commit_email'] = commitEmail;
    }
    public get commitEmail(): string | undefined {
        return this['commit_email'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateUserEmailsResponseStateEnum {
    ACTIVE = 'active',
    BLOCKED = 'blocked'
}
