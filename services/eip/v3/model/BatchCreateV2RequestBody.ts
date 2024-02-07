import { BatchCreateV2RequestBodySysTags } from './BatchCreateV2RequestBodySysTags';
import { BatchCreateV2RequestBodyTags } from './BatchCreateV2RequestBodyTags';


export class BatchCreateV2RequestBody {
    public tags?: Array<BatchCreateV2RequestBodyTags>;
    private 'sys_tags'?: Array<BatchCreateV2RequestBodySysTags>;
    public constructor(tags?: Array<BatchCreateV2RequestBodyTags>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<BatchCreateV2RequestBodyTags>): BatchCreateV2RequestBody {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<BatchCreateV2RequestBodySysTags>): BatchCreateV2RequestBody {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<BatchCreateV2RequestBodySysTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<BatchCreateV2RequestBodySysTags> | undefined {
        return this['sys_tags'];
    }
}