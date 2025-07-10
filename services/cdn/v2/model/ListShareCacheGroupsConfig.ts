import { ListShareCacheGroupsRecord } from './ListShareCacheGroupsRecord';


export class ListShareCacheGroupsConfig {
    public id?: string;
    private 'group_name'?: string;
    private 'create_time'?: number;
    private 'share_cache_records'?: Array<ListShareCacheGroupsRecord>;
    private 'primary_domain'?: string;
    public constructor() { 
    }
    public withId(id: string): ListShareCacheGroupsConfig {
        this['id'] = id;
        return this;
    }
    public withGroupName(groupName: string): ListShareCacheGroupsConfig {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withCreateTime(createTime: number): ListShareCacheGroupsConfig {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withShareCacheRecords(shareCacheRecords: Array<ListShareCacheGroupsRecord>): ListShareCacheGroupsConfig {
        this['share_cache_records'] = shareCacheRecords;
        return this;
    }
    public set shareCacheRecords(shareCacheRecords: Array<ListShareCacheGroupsRecord>  | undefined) {
        this['share_cache_records'] = shareCacheRecords;
    }
    public get shareCacheRecords(): Array<ListShareCacheGroupsRecord> | undefined {
        return this['share_cache_records'];
    }
    public withPrimaryDomain(primaryDomain: string): ListShareCacheGroupsConfig {
        this['primary_domain'] = primaryDomain;
        return this;
    }
    public set primaryDomain(primaryDomain: string  | undefined) {
        this['primary_domain'] = primaryDomain;
    }
    public get primaryDomain(): string | undefined {
        return this['primary_domain'];
    }
}