import { UserRespGroupPerms } from './UserRespGroupPerms';
import { UserTopicPerms } from './UserTopicPerms';


export class UserResp {
    private 'access_key'?: string;
    private 'secret_key'?: string;
    private 'white_remote_address'?: string;
    public admin?: boolean;
    private 'default_topic_perm'?: UserRespDefaultTopicPermEnum | string;
    private 'default_group_perm'?: UserRespDefaultGroupPermEnum | string;
    private 'topic_perms'?: Array<UserTopicPerms>;
    private 'group_perms'?: Array<UserRespGroupPerms>;
    public constructor() { 
    }
    public withAccessKey(accessKey: string): UserResp {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withSecretKey(secretKey: string): UserResp {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string  | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey(): string | undefined {
        return this['secret_key'];
    }
    public withWhiteRemoteAddress(whiteRemoteAddress: string): UserResp {
        this['white_remote_address'] = whiteRemoteAddress;
        return this;
    }
    public set whiteRemoteAddress(whiteRemoteAddress: string  | undefined) {
        this['white_remote_address'] = whiteRemoteAddress;
    }
    public get whiteRemoteAddress(): string | undefined {
        return this['white_remote_address'];
    }
    public withAdmin(admin: boolean): UserResp {
        this['admin'] = admin;
        return this;
    }
    public withDefaultTopicPerm(defaultTopicPerm: UserRespDefaultTopicPermEnum | string): UserResp {
        this['default_topic_perm'] = defaultTopicPerm;
        return this;
    }
    public set defaultTopicPerm(defaultTopicPerm: UserRespDefaultTopicPermEnum | string  | undefined) {
        this['default_topic_perm'] = defaultTopicPerm;
    }
    public get defaultTopicPerm(): UserRespDefaultTopicPermEnum | string | undefined {
        return this['default_topic_perm'];
    }
    public withDefaultGroupPerm(defaultGroupPerm: UserRespDefaultGroupPermEnum | string): UserResp {
        this['default_group_perm'] = defaultGroupPerm;
        return this;
    }
    public set defaultGroupPerm(defaultGroupPerm: UserRespDefaultGroupPermEnum | string  | undefined) {
        this['default_group_perm'] = defaultGroupPerm;
    }
    public get defaultGroupPerm(): UserRespDefaultGroupPermEnum | string | undefined {
        return this['default_group_perm'];
    }
    public withTopicPerms(topicPerms: Array<UserTopicPerms>): UserResp {
        this['topic_perms'] = topicPerms;
        return this;
    }
    public set topicPerms(topicPerms: Array<UserTopicPerms>  | undefined) {
        this['topic_perms'] = topicPerms;
    }
    public get topicPerms(): Array<UserTopicPerms> | undefined {
        return this['topic_perms'];
    }
    public withGroupPerms(groupPerms: Array<UserRespGroupPerms>): UserResp {
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
export enum UserRespDefaultTopicPermEnum {
    PUB = 'PUB',
    SUB = 'SUB',
    PUB_SUB = 'PUB|SUB',
    DENY = 'DENY'
}
/**
    * @export
    * @enum {string}
    */
export enum UserRespDefaultGroupPermEnum {
    SUB = 'SUB',
    DENY = 'DENY'
}
