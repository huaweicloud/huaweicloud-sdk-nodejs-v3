import { CreateChInstanceInfoTagsInfoTags } from './CreateChInstanceInfoTagsInfoTags';
import { SrCreateInstanceRspInstanceTagsInfoSysTags } from './SrCreateInstanceRspInstanceTagsInfoSysTags';


export class SrCreateInstanceRspInstanceTagsInfo {
    public tags?: Array<CreateChInstanceInfoTagsInfoTags>;
    private 'sys_tags'?: Array<SrCreateInstanceRspInstanceTagsInfoSysTags>;
    public constructor() { 
    }
    public withTags(tags: Array<CreateChInstanceInfoTagsInfoTags>): SrCreateInstanceRspInstanceTagsInfo {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<SrCreateInstanceRspInstanceTagsInfoSysTags>): SrCreateInstanceRspInstanceTagsInfo {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<SrCreateInstanceRspInstanceTagsInfoSysTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<SrCreateInstanceRspInstanceTagsInfoSysTags> | undefined {
        return this['sys_tags'];
    }
}