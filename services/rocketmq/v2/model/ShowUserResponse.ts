import { UserGroupPerms } from './UserGroupPerms';
import { UserTopicPerms } from './UserTopicPerms';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserResponse extends SdkResponse {
    private 'access_key'?: string | undefined;
    private 'secret_key'?: string | undefined;
    private 'white_remote_address'?: string | undefined;
    public admin?: boolean;
    private 'default_topic_perm'?: ShowUserResponseDefaultTopicPermEnum | undefined;
    private 'default_group_perm'?: ShowUserResponseDefaultGroupPermEnum | undefined;
    private 'topic_perms'?: Array<UserTopicPerms> | undefined;
    private 'group_perms'?: Array<UserGroupPerms> | undefined;
    public constructor() { 
        super();
    }
    public withAccessKey(accessKey: string): ShowUserResponse {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey() {
        return this['access_key'];
    }
    public withSecretKey(secretKey: string): ShowUserResponse {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey() {
        return this['secret_key'];
    }
    public withWhiteRemoteAddress(whiteRemoteAddress: string): ShowUserResponse {
        this['white_remote_address'] = whiteRemoteAddress;
        return this;
    }
    public set whiteRemoteAddress(whiteRemoteAddress: string | undefined) {
        this['white_remote_address'] = whiteRemoteAddress;
    }
    public get whiteRemoteAddress() {
        return this['white_remote_address'];
    }
    public withAdmin(admin: boolean): ShowUserResponse {
        this['admin'] = admin;
        return this;
    }
    public withDefaultTopicPerm(defaultTopicPerm: ShowUserResponseDefaultTopicPermEnum): ShowUserResponse {
        this['default_topic_perm'] = defaultTopicPerm;
        return this;
    }
    public set defaultTopicPerm(defaultTopicPerm: ShowUserResponseDefaultTopicPermEnum | undefined) {
        this['default_topic_perm'] = defaultTopicPerm;
    }
    public get defaultTopicPerm() {
        return this['default_topic_perm'];
    }
    public withDefaultGroupPerm(defaultGroupPerm: ShowUserResponseDefaultGroupPermEnum): ShowUserResponse {
        this['default_group_perm'] = defaultGroupPerm;
        return this;
    }
    public set defaultGroupPerm(defaultGroupPerm: ShowUserResponseDefaultGroupPermEnum | undefined) {
        this['default_group_perm'] = defaultGroupPerm;
    }
    public get defaultGroupPerm() {
        return this['default_group_perm'];
    }
    public withTopicPerms(topicPerms: Array<UserTopicPerms>): ShowUserResponse {
        this['topic_perms'] = topicPerms;
        return this;
    }
    public set topicPerms(topicPerms: Array<UserTopicPerms> | undefined) {
        this['topic_perms'] = topicPerms;
    }
    public get topicPerms() {
        return this['topic_perms'];
    }
    public withGroupPerms(groupPerms: Array<UserGroupPerms>): ShowUserResponse {
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
export enum ShowUserResponseDefaultTopicPermEnum {
    PUB = 'PUB',
    SUB = 'SUB',
    PUB_SUB = 'PUB|SUB',
    DENY = 'DENY'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowUserResponseDefaultGroupPermEnum {
    SUB = 'SUB',
    DENY = 'DENY'
}
