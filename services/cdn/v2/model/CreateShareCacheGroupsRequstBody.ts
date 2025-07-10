import { ShareCacheGroupsRecord } from './ShareCacheGroupsRecord';


export class CreateShareCacheGroupsRequstBody {
    private 'group_name'?: string;
    private 'primary_domain'?: string;
    private 'share_cache_records'?: Array<ShareCacheGroupsRecord>;
    public constructor() { 
    }
    public withGroupName(groupName: string): CreateShareCacheGroupsRequstBody {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withPrimaryDomain(primaryDomain: string): CreateShareCacheGroupsRequstBody {
        this['primary_domain'] = primaryDomain;
        return this;
    }
    public set primaryDomain(primaryDomain: string  | undefined) {
        this['primary_domain'] = primaryDomain;
    }
    public get primaryDomain(): string | undefined {
        return this['primary_domain'];
    }
    public withShareCacheRecords(shareCacheRecords: Array<ShareCacheGroupsRecord>): CreateShareCacheGroupsRequstBody {
        this['share_cache_records'] = shareCacheRecords;
        return this;
    }
    public set shareCacheRecords(shareCacheRecords: Array<ShareCacheGroupsRecord>  | undefined) {
        this['share_cache_records'] = shareCacheRecords;
    }
    public get shareCacheRecords(): Array<ShareCacheGroupsRecord> | undefined {
        return this['share_cache_records'];
    }
}