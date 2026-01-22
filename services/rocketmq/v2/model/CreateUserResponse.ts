import { UserRespGroupPerms } from './UserRespGroupPerms';
import { UserTopicPerms } from './UserTopicPerms';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateUserResponse extends SdkResponse {
    private 'access_key'?: string;
    private 'secret_key'?: string;
    private 'white_remote_address'?: string;
    public admin?: boolean;
    private 'default_topic_perm'?: CreateUserResponseDefaultTopicPermEnum | string;
    private 'default_group_perm'?: CreateUserResponseDefaultGroupPermEnum | string;
    private 'topic_perms'?: Array<UserTopicPerms>;
    private 'group_perms'?: Array<UserRespGroupPerms>;
    public constructor() { 
        super();
    }
    public withAccessKey(accessKey: string): CreateUserResponse {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withSecretKey(secretKey: string): CreateUserResponse {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string  | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey(): string | undefined {
        return this['secret_key'];
    }
    public withWhiteRemoteAddress(whiteRemoteAddress: string): CreateUserResponse {
        this['white_remote_address'] = whiteRemoteAddress;
        return this;
    }
    public set whiteRemoteAddress(whiteRemoteAddress: string  | undefined) {
        this['white_remote_address'] = whiteRemoteAddress;
    }
    public get whiteRemoteAddress(): string | undefined {
        return this['white_remote_address'];
    }
    public withAdmin(admin: boolean): CreateUserResponse {
        this['admin'] = admin;
        return this;
    }
    public withDefaultTopicPerm(defaultTopicPerm: CreateUserResponseDefaultTopicPermEnum | string): CreateUserResponse {
        this['default_topic_perm'] = defaultTopicPerm;
        return this;
    }
    public set defaultTopicPerm(defaultTopicPerm: CreateUserResponseDefaultTopicPermEnum | string  | undefined) {
        this['default_topic_perm'] = defaultTopicPerm;
    }
    public get defaultTopicPerm(): CreateUserResponseDefaultTopicPermEnum | string | undefined {
        return this['default_topic_perm'];
    }
    public withDefaultGroupPerm(defaultGroupPerm: CreateUserResponseDefaultGroupPermEnum | string): CreateUserResponse {
        this['default_group_perm'] = defaultGroupPerm;
        return this;
    }
    public set defaultGroupPerm(defaultGroupPerm: CreateUserResponseDefaultGroupPermEnum | string  | undefined) {
        this['default_group_perm'] = defaultGroupPerm;
    }
    public get defaultGroupPerm(): CreateUserResponseDefaultGroupPermEnum | string | undefined {
        return this['default_group_perm'];
    }
    public withTopicPerms(topicPerms: Array<UserTopicPerms>): CreateUserResponse {
        this['topic_perms'] = topicPerms;
        return this;
    }
    public set topicPerms(topicPerms: Array<UserTopicPerms>  | undefined) {
        this['topic_perms'] = topicPerms;
    }
    public get topicPerms(): Array<UserTopicPerms> | undefined {
        return this['topic_perms'];
    }
    public withGroupPerms(groupPerms: Array<UserRespGroupPerms>): CreateUserResponse {
        this['group_perms'] = groupPerms;
        return this;
    }
    public set groupPerms(groupPerms: Array<UserRespGroupPerms>  | undefined) {
        this['group_perms'] = groupPerms;
    }
    public get groupPerms(): Array<UserRespGroupPerms> | undefined {
        return this['group_perms'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateUserResponseDefaultTopicPermEnum {
    PUB = 'PUB',
    SUB = 'SUB',
    PUB_SUB = 'PUB|SUB',
    DENY = 'DENY'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateUserResponseDefaultGroupPermEnum {
    SUB = 'SUB',
    DENY = 'DENY'
}
