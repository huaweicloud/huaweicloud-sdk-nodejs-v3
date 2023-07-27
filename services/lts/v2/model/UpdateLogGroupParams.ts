import { TagsBody } from './TagsBody';


export class UpdateLogGroupParams {
    private 'ttl_in_days'?: number;
    public tags?: Array<TagsBody>;
    public constructor(ttlInDays?: number) { 
        this['ttl_in_days'] = ttlInDays;
    }
    public withTtlInDays(ttlInDays: number): UpdateLogGroupParams {
        this['ttl_in_days'] = ttlInDays;
        return this;
    }
    public set ttlInDays(ttlInDays: number  | undefined) {
        this['ttl_in_days'] = ttlInDays;
    }
    public get ttlInDays(): number | undefined {
        return this['ttl_in_days'];
    }
    public withTags(tags: Array<TagsBody>): UpdateLogGroupParams {
        this['tags'] = tags;
        return this;
    }
}