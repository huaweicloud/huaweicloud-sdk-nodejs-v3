import { CreateChInstanceRequestBodyTagsInfoSysTags } from './CreateChInstanceRequestBodyTagsInfoSysTags';


export class CreateChInstanceRequestBodyTagsInfo {
    private 'sys_tags'?: Array<CreateChInstanceRequestBodyTagsInfoSysTags>;
    public constructor(sysTags?: Array<CreateChInstanceRequestBodyTagsInfoSysTags>) { 
        this['sys_tags'] = sysTags;
    }
    public withSysTags(sysTags: Array<CreateChInstanceRequestBodyTagsInfoSysTags>): CreateChInstanceRequestBodyTagsInfo {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<CreateChInstanceRequestBodyTagsInfoSysTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<CreateChInstanceRequestBodyTagsInfoSysTags> | undefined {
        return this['sys_tags'];
    }
}