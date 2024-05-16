import { StarRocksCreateRequestTagsInfoSysTags } from './StarRocksCreateRequestTagsInfoSysTags';


export class StarRocksCreateRequestTagsInfo {
    private 'sys_tags'?: Array<StarRocksCreateRequestTagsInfoSysTags>;
    public constructor(sysTags?: Array<StarRocksCreateRequestTagsInfoSysTags>) { 
        this['sys_tags'] = sysTags;
    }
    public withSysTags(sysTags: Array<StarRocksCreateRequestTagsInfoSysTags>): StarRocksCreateRequestTagsInfo {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<StarRocksCreateRequestTagsInfoSysTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<StarRocksCreateRequestTagsInfoSysTags> | undefined {
        return this['sys_tags'];
    }
}