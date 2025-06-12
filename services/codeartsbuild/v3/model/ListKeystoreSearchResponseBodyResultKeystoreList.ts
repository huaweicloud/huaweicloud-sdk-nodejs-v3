import { ListKeystoreSearchResponseBodyResultPermission } from './ListKeystoreSearchResponseBodyResultPermission';


export class ListKeystoreSearchResponseBodyResultKeystoreList {
    public id?: string;
    public permission?: ListKeystoreSearchResponseBodyResultPermission;
    private 'create_time_stamp'?: string;
    private 'update_time_stamp'?: string;
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    private 'keystore_name'?: string;
    private 'create_user_id'?: string;
    private 'create_user_name'?: string;
    private 'update_user_id'?: string;
    private 'update_user_name'?: string;
    public share?: number;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): ListKeystoreSearchResponseBodyResultKeystoreList {
        this['id'] = id;
        return this;
    }
    public withPermission(permission: ListKeystoreSearchResponseBodyResultPermission): ListKeystoreSearchResponseBodyResultKeystoreList {
        this['permission'] = permission;
        return this;
    }
    public withCreateTimeStamp(createTimeStamp: string): ListKeystoreSearchResponseBodyResultKeystoreList {
        this['create_time_stamp'] = createTimeStamp;
        return this;
    }
    public set createTimeStamp(createTimeStamp: string  | undefined) {
        this['create_time_stamp'] = createTimeStamp;
    }
    public get createTimeStamp(): string | undefined {
        return this['create_time_stamp'];
    }
    public withUpdateTimeStamp(updateTimeStamp: string): ListKeystoreSearchResponseBodyResultKeystoreList {
        this['update_time_stamp'] = updateTimeStamp;
        return this;
    }
    public set updateTimeStamp(updateTimeStamp: string  | undefined) {
        this['update_time_stamp'] = updateTimeStamp;
    }
    public get updateTimeStamp(): string | undefined {
        return this['update_time_stamp'];
    }
    public withDomainId(domainId: string): ListKeystoreSearchResponseBodyResultKeystoreList {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): ListKeystoreSearchResponseBodyResultKeystoreList {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withKeystoreName(keystoreName: string): ListKeystoreSearchResponseBodyResultKeystoreList {
        this['keystore_name'] = keystoreName;
        return this;
    }
    public set keystoreName(keystoreName: string  | undefined) {
        this['keystore_name'] = keystoreName;
    }
    public get keystoreName(): string | undefined {
        return this['keystore_name'];
    }
    public withCreateUserId(createUserId: string): ListKeystoreSearchResponseBodyResultKeystoreList {
        this['create_user_id'] = createUserId;
        return this;
    }
    public set createUserId(createUserId: string  | undefined) {
        this['create_user_id'] = createUserId;
    }
    public get createUserId(): string | undefined {
        return this['create_user_id'];
    }
    public withCreateUserName(createUserName: string): ListKeystoreSearchResponseBodyResultKeystoreList {
        this['create_user_name'] = createUserName;
        return this;
    }
    public set createUserName(createUserName: string  | undefined) {
        this['create_user_name'] = createUserName;
    }
    public get createUserName(): string | undefined {
        return this['create_user_name'];
    }
    public withUpdateUserId(updateUserId: string): ListKeystoreSearchResponseBodyResultKeystoreList {
        this['update_user_id'] = updateUserId;
        return this;
    }
    public set updateUserId(updateUserId: string  | undefined) {
        this['update_user_id'] = updateUserId;
    }
    public get updateUserId(): string | undefined {
        return this['update_user_id'];
    }
    public withUpdateUserName(updateUserName: string): ListKeystoreSearchResponseBodyResultKeystoreList {
        this['update_user_name'] = updateUserName;
        return this;
    }
    public set updateUserName(updateUserName: string  | undefined) {
        this['update_user_name'] = updateUserName;
    }
    public get updateUserName(): string | undefined {
        return this['update_user_name'];
    }
    public withShare(share: number): ListKeystoreSearchResponseBodyResultKeystoreList {
        this['share'] = share;
        return this;
    }
    public withCreateTime(createTime: string): ListKeystoreSearchResponseBodyResultKeystoreList {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ListKeystoreSearchResponseBodyResultKeystoreList {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withDescription(description: string): ListKeystoreSearchResponseBodyResultKeystoreList {
        this['description'] = description;
        return this;
    }
}