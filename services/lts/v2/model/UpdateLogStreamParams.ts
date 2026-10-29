import { TagsBody } from './TagsBody';


export class UpdateLogStreamParams {
    private 'ttl_in_days'?: number;
    public tags?: Array<TagsBody>;
    private 'whether_log_storage'?: boolean;
    private 'hot_cold_separation'?: boolean;
    private 'hot_storage_days'?: number;
    public constructor(ttlInDays?: number) { 
        this['ttl_in_days'] = ttlInDays;
    }
    public withTtlInDays(ttlInDays: number): UpdateLogStreamParams {
        this['ttl_in_days'] = ttlInDays;
        return this;
    }
    public set ttlInDays(ttlInDays: number  | undefined) {
        this['ttl_in_days'] = ttlInDays;
    }
    public get ttlInDays(): number | undefined {
        return this['ttl_in_days'];
    }
    public withTags(tags: Array<TagsBody>): UpdateLogStreamParams {
        this['tags'] = tags;
        return this;
    }
    public withWhetherLogStorage(whetherLogStorage: boolean): UpdateLogStreamParams {
        this['whether_log_storage'] = whetherLogStorage;
        return this;
    }
    public set whetherLogStorage(whetherLogStorage: boolean  | undefined) {
        this['whether_log_storage'] = whetherLogStorage;
    }
    public get whetherLogStorage(): boolean | undefined {
        return this['whether_log_storage'];
    }
    public withHotColdSeparation(hotColdSeparation: boolean): UpdateLogStreamParams {
        this['hot_cold_separation'] = hotColdSeparation;
        return this;
    }
    public set hotColdSeparation(hotColdSeparation: boolean  | undefined) {
        this['hot_cold_separation'] = hotColdSeparation;
    }
    public get hotColdSeparation(): boolean | undefined {
        return this['hot_cold_separation'];
    }
    public withHotStorageDays(hotStorageDays: number): UpdateLogStreamParams {
        this['hot_storage_days'] = hotStorageDays;
        return this;
    }
    public set hotStorageDays(hotStorageDays: number  | undefined) {
        this['hot_storage_days'] = hotStorageDays;
    }
    public get hotStorageDays(): number | undefined {
        return this['hot_storage_days'];
    }
}