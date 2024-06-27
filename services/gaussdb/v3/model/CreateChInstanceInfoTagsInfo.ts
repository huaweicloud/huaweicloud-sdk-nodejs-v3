import { CreateChInstanceInfoTagsInfoTags } from './CreateChInstanceInfoTagsInfoTags';


export class CreateChInstanceInfoTagsInfo {
    public tags?: Array<CreateChInstanceInfoTagsInfoTags>;
    private 'sys_tags'?: Array<CreateChInstanceInfoTagsInfoTags>;
    public constructor() { 
    }
    public withTags(tags: Array<CreateChInstanceInfoTagsInfoTags>): CreateChInstanceInfoTagsInfo {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<CreateChInstanceInfoTagsInfoTags>): CreateChInstanceInfoTagsInfo {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<CreateChInstanceInfoTagsInfoTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<CreateChInstanceInfoTagsInfoTags> | undefined {
        return this['sys_tags'];
    }
}