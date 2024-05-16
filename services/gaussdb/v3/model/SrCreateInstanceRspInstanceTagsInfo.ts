import { SrCreateInstanceRspInstanceTagsInfoSysTags } from './SrCreateInstanceRspInstanceTagsInfoSysTags';
import { SrCreateInstanceRspInstanceTagsInfoTags } from './SrCreateInstanceRspInstanceTagsInfoTags';


export class SrCreateInstanceRspInstanceTagsInfo {
    public tags?: Array<SrCreateInstanceRspInstanceTagsInfoTags>;
    private 'sys_tags'?: Array<SrCreateInstanceRspInstanceTagsInfoSysTags>;
    public constructor() { 
    }
    public withTags(tags: Array<SrCreateInstanceRspInstanceTagsInfoTags>): SrCreateInstanceRspInstanceTagsInfo {
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