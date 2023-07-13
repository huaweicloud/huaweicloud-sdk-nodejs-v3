import { UserGroupPerms } from './UserGroupPerms';
import { UserTopicPerms } from './UserTopicPerms';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateUserResponse extends SdkResponse {
    private 'access_key'?: string | undefined;
    private 'secret_key'?: string | undefined;
    private 'white_remote_address'?: string | undefined;
    public admin?: boolean;
    private 'default_topic_perm'?: UpdateUserResponseDefaultTopicPermEnum | undefined;
    private 'default_group_perm'?: UpdateUserResponseDefaultGroupPermEnum | undefined;
    private 'topic_perms'?: Array<UserTopicPerms> | undefined;
    private 'group_perms'?: Array<UserGroupPerms> | undefined;
    public constructor() { 
        super();
    }
    public withAccessKey(accessKey: string): UpdateUserResponse {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey() {
        return this['access_key'];
    }
    public withSecretKey(secretKey: string): UpdateUserResponse {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey() {
        return this['secret_key'];
    }
    public withWhiteRemoteAddress(whiteRemoteAddress: string): UpdateUserResponse {
        this['white_remote_address'] = whiteRemoteAddress;
        return this;
    }
    public set whiteRemoteAddress(whiteRemoteAddress: string | undefined) {
        this['white_remote_address'] = whiteRemoteAddress;
    }
    public get whiteRemoteAddress() {
        return this['white_remote_address'];
    }
    public withAdmin(admin: boolean): UpdateUserResponse {
        this['admin'] = admin;
        return this;
    }
    public withDefaultTopicPerm(defaultTopicPerm: UpdateUserResponseDefaultTopicPermEnum): UpdateUserResponse {
        this['default_topic_perm'] = defaultTopicPerm;
        return this;
    }
    public set defaultTopicPerm(defaultTopicPerm: UpdateUserResponseDefaultTopicPermEnum | undefined) {
        this['default_topic_perm'] = defaultTopicPerm;
    }
    public get defaultTopicPerm() {
        return this['default_topic_perm'];
    }
    public withDefaultGroupPerm(defaultGroupPerm: UpdateUserResponseDefaultGroupPermEnum): UpdateUserResponse {
        this['default_group_perm'] = defaultGroupPerm;
        return this;
    }
    public set defaultGroupPerm(defaultGroupPerm: UpdateUserResponseDefaultGroupPermEnum | undefined) {
        this['default_group_perm'] = defaultGroupPerm;
    }
    public get defaultGroupPerm() {
        return this['default_group_perm'];
    }
    public withTopicPerms(topicPerms: Array<UserTopicPerms>): UpdateUserResponse {
        this['topic_perms'] = topicPerms;
        return this;
    }
    public set topicPerms(topicPerms: Array<UserTopicPerms> | undefined) {
        this['topic_perms'] = topicPerms;
    }
    public get topicPerms() {
        return this['topic_perms'];
    }
    public withGroupPerms(groupPerms: Array<UserGroupPerms>): UpdateUserResponse {
        this['group_perms'] = groupPerms;
        return this;
    }
    public set groupPerms(groupPerms: Array<UserGroupPerms> | undefined) {
        this['group_perms'] = groupPerms;
    }
    public get groupPerms() {
        return this['group_perms'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateUserResponseDefaultTopicPermEnum {
    PUB = 'PUB',
    SUB = 'SUB',
    PUB_SUB = 'PUB|SUB',
    DENY = 'DENY'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateUserResponseDefaultGroupPermEnum {
    SUB = 'SUB',
    DENY = 'DENY'
}
