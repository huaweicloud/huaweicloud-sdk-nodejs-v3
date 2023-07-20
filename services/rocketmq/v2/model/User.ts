import { UserGroupPerms } from './UserGroupPerms';
import { UserTopicPerms } from './UserTopicPerms';


export class User {
    private 'access_key'?: string;
    private 'secret_key'?: string;
    private 'white_remote_address'?: string;
    public admin?: boolean;
    private 'default_topic_perm'?: UserDefaultTopicPermEnum | string;
    private 'default_group_perm'?: UserDefaultGroupPermEnum | string;
    private 'topic_perms'?: Array<UserTopicPerms>;
    private 'group_perms'?: Array<UserGroupPerms>;
    public constructor() { 
    }
    public withAccessKey(accessKey: string): User {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withSecretKey(secretKey: string): User {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string  | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey(): string | undefined {
        return this['secret_key'];
    }
    public withWhiteRemoteAddress(whiteRemoteAddress: string): User {
        this['white_remote_address'] = whiteRemoteAddress;
        return this;
    }
    public set whiteRemoteAddress(whiteRemoteAddress: string  | undefined) {
        this['white_remote_address'] = whiteRemoteAddress;
    }
    public get whiteRemoteAddress(): string | undefined {
        return this['white_remote_address'];
    }
    public withAdmin(admin: boolean): User {
        this['admin'] = admin;
        return this;
    }
    public withDefaultTopicPerm(defaultTopicPerm: UserDefaultTopicPermEnum | string): User {
        this['default_topic_perm'] = defaultTopicPerm;
        return this;
    }
    public set defaultTopicPerm(defaultTopicPerm: UserDefaultTopicPermEnum | string  | undefined) {
        this['default_topic_perm'] = defaultTopicPerm;
    }
    public get defaultTopicPerm(): UserDefaultTopicPermEnum | string | undefined {
        return this['default_topic_perm'];
    }
    public withDefaultGroupPerm(defaultGroupPerm: UserDefaultGroupPermEnum | string): User {
        this['default_group_perm'] = defaultGroupPerm;
        return this;
    }
    public set defaultGroupPerm(defaultGroupPerm: UserDefaultGroupPermEnum | string  | undefined) {
        this['default_group_perm'] = defaultGroupPerm;
    }
    public get defaultGroupPerm(): UserDefaultGroupPermEnum | string | undefined {
        return this['default_group_perm'];
    }
    public withTopicPerms(topicPerms: Array<UserTopicPerms>): User {
        this['topic_perms'] = topicPerms;
        return this;
    }
    public set topicPerms(topicPerms: Array<UserTopicPerms>  | undefined) {
        this['topic_perms'] = topicPerms;
    }
    public get topicPerms(): Array<UserTopicPerms> | undefined {
        return this['topic_perms'];
    }
    public withGroupPerms(groupPerms: Array<UserGroupPerms>): User {
        this['group_perms'] = groupPerms;
        return this;
    }
    public set groupPerms(groupPerms: Array<UserGroupPerms>  | undefined) {
        this['group_perms'] = groupPerms;
    }
    public get groupPerms(): Array<UserGroupPerms> | undefined {
        return this['group_perms'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UserDefaultTopicPermEnum {
    PUB = 'PUB',
    SUB = 'SUB',
    PUB_SUB = 'PUB|SUB',
    DENY = 'DENY'
}
/**
    * @export
    * @enum {string}
    */
export enum UserDefaultGroupPermEnum {
    SUB = 'SUB',
    DENY = 'DENY'
}
