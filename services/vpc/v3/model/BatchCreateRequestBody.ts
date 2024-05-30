import { BatchCreateRequestBodySysTags } from './BatchCreateRequestBodySysTags';
import { BatchCreateRequestBodyTags } from './BatchCreateRequestBodyTags';


export class BatchCreateRequestBody {
    public tags?: Array<BatchCreateRequestBodyTags>;
    private 'sys_tags'?: Array<BatchCreateRequestBodySysTags>;
    public constructor(tags?: Array<BatchCreateRequestBodyTags>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<BatchCreateRequestBodyTags>): BatchCreateRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<BatchCreateRequestBodySysTags>): BatchCreateRequestBody {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<BatchCreateRequestBodySysTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<BatchCreateRequestBodySysTags> | undefined {
        return this['sys_tags'];
    }
}