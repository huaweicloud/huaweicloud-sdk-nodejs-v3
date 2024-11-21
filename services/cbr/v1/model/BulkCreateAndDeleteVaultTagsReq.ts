import { SysTag } from './SysTag';
import { Tag } from './Tag';


export class BulkCreateAndDeleteVaultTagsReq {
    public tags?: Array<Tag>;
    private 'sys_tags'?: Array<SysTag>;
    public action?: BulkCreateAndDeleteVaultTagsReqActionEnum | string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withTags(tags: Array<Tag>): BulkCreateAndDeleteVaultTagsReq {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<SysTag>): BulkCreateAndDeleteVaultTagsReq {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<SysTag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<SysTag> | undefined {
        return this['sys_tags'];
    }
    public withAction(action: BulkCreateAndDeleteVaultTagsReqActionEnum | string): BulkCreateAndDeleteVaultTagsReq {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BulkCreateAndDeleteVaultTagsReqActionEnum {
    CREATE = 'create',
    DELETE = 'delete'
}
