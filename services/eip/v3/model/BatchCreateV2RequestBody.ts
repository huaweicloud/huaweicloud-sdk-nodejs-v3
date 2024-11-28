import { CreateGlobalEipRequestBodyGlobalEipTags } from './CreateGlobalEipRequestBodyGlobalEipTags';


export class BatchCreateV2RequestBody {
    public tags?: Array<CreateGlobalEipRequestBodyGlobalEipTags>;
    private 'sys_tags'?: Array<CreateGlobalEipRequestBodyGlobalEipTags>;
    public constructor(tags?: Array<CreateGlobalEipRequestBodyGlobalEipTags>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<CreateGlobalEipRequestBodyGlobalEipTags>): BatchCreateV2RequestBody {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<CreateGlobalEipRequestBodyGlobalEipTags>): BatchCreateV2RequestBody {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<CreateGlobalEipRequestBodyGlobalEipTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<CreateGlobalEipRequestBodyGlobalEipTags> | undefined {
        return this['sys_tags'];
    }
}