import { TagsBody } from './TagsBody';


export class UpdateLogStreamParams {
    private 'ttl_in_days'?: UpdateLogStreamParamsTtlInDaysEnum | number;
    public tags?: Array<TagsBody>;
    public constructor(ttlInDays?: number) { 
        this['ttl_in_days'] = ttlInDays;
    }
    public withTtlInDays(ttlInDays: UpdateLogStreamParamsTtlInDaysEnum | number): UpdateLogStreamParams {
        this['ttl_in_days'] = ttlInDays;
        return this;
    }
    public set ttlInDays(ttlInDays: UpdateLogStreamParamsTtlInDaysEnum | number  | undefined) {
        this['ttl_in_days'] = ttlInDays;
    }
    public get ttlInDays(): UpdateLogStreamParamsTtlInDaysEnum | number | undefined {
        return this['ttl_in_days'];
    }
    public withTags(tags: Array<TagsBody>): UpdateLogStreamParams {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateLogStreamParamsTtlInDaysEnum {
    NUMBER_7 = 7
}
