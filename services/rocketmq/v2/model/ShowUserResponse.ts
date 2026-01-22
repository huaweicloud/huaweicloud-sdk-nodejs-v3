import { UserRespGroupPerms } from './UserRespGroupPerms';
import { UserTopicPerms } from './UserTopicPerms';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserResponse extends SdkResponse {
    private 'access_key'?: string;
    private 'secret_key'?: string;
    private 'white_remote_address'?: string;
    public admin?: boolean;
    private 'default_topic_perm'?: ShowUserResponseDefaultTopicPermEnum | string;
    private 'default_group_perm'?: ShowUserResponseDefaultGroupPermEnum | string;
    private 'topic_perms'?: Array<UserTopicPerms>;
    private 'group_perms'?: Array<UserRespGroupPerms>;
    public constructor() { 
        super();
    }
    public withAccessKey(accessKey: string): ShowUserResponse {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withSecretKey(secretKey: string): ShowUserResponse {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string  | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey(): string | undefined {
        return this['secret_key'];
    }
    public withWhiteRemoteAddress(whiteRemoteAddress: string): ShowUserResponse {
        this['white_remote_address'] = whiteRemoteAddress;
        return this;
    }
    public set whiteRemoteAddress(whiteRemoteAddress: string  | undefined) {
        this['white_remote_address'] = whiteRemoteAddress;
    }
    public get whiteRemoteAddress(): string | undefined {
        return this['white_remote_address'];
    }
    public withAdmin(admin: boolean): ShowUserResponse {
        this['admin'] = admin;
        return this;
    }
    public withDefaultTopicPerm(defaultTopicPerm: ShowUserResponseDefaultTopicPermEnum | string): ShowUserResponse {
        this['default_topic_perm'] = defaultTopicPerm;
        return this;
    }
    public set defaultTopicPerm(defaultTopicPerm: ShowUserResponseDefaultTopicPermEnum | string  | undefined) {
        this['default_topic_perm'] = defaultTopicPerm;
    }
    public get defaultTopicPerm(): ShowUserResponseDefaultTopicPermEnum | string | undefined {
        return this['default_topic_perm'];
    }
    public withDefaultGroupPerm(defaultGroupPerm: ShowUserResponseDefaultGroupPermEnum | string): ShowUserResponse {
        this['default_group_perm'] = defaultGroupPerm;
        return this;
    }
    public set defaultGroupPerm(defaultGroupPerm: ShowUserResponseDefaultGroupPermEnum | string  | undefined) {
        this['default_group_perm'] = defaultGroupPerm;
    }
    public get defaultGroupPerm(): ShowUserResponseDefaultGroupPermEnum | string | undefined {
        return this['default_group_perm'];
    }
    public withTopicPerms(topicPerms: Array<UserTopicPerms>): ShowUserResponse {
        this['topic_perms'] = topicPerms;
        return this;
    }
    public set topicPerms(topicPerms: Array<UserTopicPerms>  | undefined) {
        this['topic_perms'] = topicPerms;
    }
    public get topicPerms(): Array<UserTopicPerms> | undefined {
        return this['topic_perms'];
    }
    public withGroupPerms(groupPerms: Array<UserRespGroupPerms>): ShowUserResponse {
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
