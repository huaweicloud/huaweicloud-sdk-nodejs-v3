import { HostGroupTag } from './HostGroupTag';


export class GetHostGroupListTag {
    private 'tag_type'?: GetHostGroupListTagTagTypeEnum | undefined;
    private 'tag_list'?: Array<HostGroupTag> | undefined;
    public constructor() { 
    }
    public withTagType(tagType: GetHostGroupListTagTagTypeEnum): GetHostGroupListTag {
        this['tag_type'] = tagType;
        return this;
    }
    public set tagType(tagType: GetHostGroupListTagTagTypeEnum | undefined) {
        this['tag_type'] = tagType;
    }
    public get tagType() {
        return this['tag_type'];
    }
    public withTagList(tagList: Array<HostGroupTag>): GetHostGroupListTag {
        this['tag_list'] = tagList;
        return this;
    }
    public set tagList(tagList: Array<HostGroupTag> | undefined) {
        this['tag_list'] = tagList;
    }
    public get tagList() {
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
