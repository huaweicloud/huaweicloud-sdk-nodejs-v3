import { HostGroupTag } from './HostGroupTag';


export class GetHostGroupListTag {
    private 'tag_type'?: GetHostGroupListTagTagTypeEnum | string;
    private 'tag_list'?: Array<HostGroupTag>;
    public constructor() { 
    }
    public withTagType(tagType: GetHostGroupListTagTagTypeEnum | string): GetHostGroupListTag {
        this['tag_type'] = tagType;
        return this;
    }
    public set tagType(tagType: GetHostGroupListTagTagTypeEnum | string  | undefined) {
        this['tag_type'] = tagType;
    }
    public get tagType(): GetHostGroupListTagTagTypeEnum | string | undefined {
        return this['tag_type'];
    }
    public withTagList(tagList: Array<HostGroupTag>): GetHostGroupListTag {
        this['tag_list'] = tagList;
        return this;
    }
    public set tagList(tagList: Array<HostGroupTag>  | undefined) {
        this['tag_list'] = tagList;
    }
    public get tagList(): Array<HostGroupTag> | undefined {
        return this['tag_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetHostGroupListTagTagTypeEnum {
    AND = 'AND',
    OR = 'OR'
}
