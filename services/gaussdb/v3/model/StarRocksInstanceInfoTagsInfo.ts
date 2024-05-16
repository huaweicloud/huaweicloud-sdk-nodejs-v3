import { StarRocksInstanceInfoTagsInfoSysTags } from './StarRocksInstanceInfoTagsInfoSysTags';
import { StarRocksInstanceInfoTagsInfoTags } from './StarRocksInstanceInfoTagsInfoTags';


export class StarRocksInstanceInfoTagsInfo {
    public tags?: Array<StarRocksInstanceInfoTagsInfoTags>;
    private 'sys_tags'?: Array<StarRocksInstanceInfoTagsInfoSysTags>;
    public constructor() { 
    }
    public withTags(tags: Array<StarRocksInstanceInfoTagsInfoTags>): StarRocksInstanceInfoTagsInfo {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<StarRocksInstanceInfoTagsInfoSysTags>): StarRocksInstanceInfoTagsInfo {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<StarRocksInstanceInfoTagsInfoSysTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<StarRocksInstanceInfoTagsInfoSysTags> | undefined {
        return this['sys_tags'];
    }
}