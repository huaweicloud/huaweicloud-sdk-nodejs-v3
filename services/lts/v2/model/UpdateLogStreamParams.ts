import { TagsBody } from './TagsBody';


export class UpdateLogStreamParams {
    private 'ttl_in_days'?: number;
    public tags?: Array<TagsBody>;
    private 'whether_log_storage'?: boolean;
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
}