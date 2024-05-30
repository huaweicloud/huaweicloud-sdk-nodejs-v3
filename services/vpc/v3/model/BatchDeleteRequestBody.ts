import { BatchDeleteRequestBodySysTags } from './BatchDeleteRequestBodySysTags';
import { BatchDeleteRequestBodyTags } from './BatchDeleteRequestBodyTags';


export class BatchDeleteRequestBody {
    public tags?: Array<BatchDeleteRequestBodyTags>;
    private 'sys_tags'?: Array<BatchDeleteRequestBodySysTags>;
    public constructor(tags?: Array<BatchDeleteRequestBodyTags>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<BatchDeleteRequestBodyTags>): BatchDeleteRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<BatchDeleteRequestBodySysTags>): BatchDeleteRequestBody {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<BatchDeleteRequestBodySysTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<BatchDeleteRequestBodySysTags> | undefined {
        return this['sys_tags'];
    }
}