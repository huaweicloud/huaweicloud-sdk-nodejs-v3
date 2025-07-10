import { ShareCacheGroupsRecord } from './ShareCacheGroupsRecord';


export class UpdateShareCacheGroupsRequstBody {
    private 'share_cache_records'?: Array<ShareCacheGroupsRecord>;
    public constructor() { 
    }
    public withShareCacheRecords(shareCacheRecords: Array<ShareCacheGroupsRecord>): UpdateShareCacheGroupsRequstBody {
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