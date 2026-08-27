

export class ExportUserGroupsNewReq {
    public name?: string;
    private 'group_ids'?: Array<string>;
    public language?: ExportUserGroupsNewReqLanguageEnum | string;
    public constructor() { 
    }
    public withName(name: string): ExportUserGroupsNewReq {
        this['name'] = name;
        return this;
    }
    public withGroupIds(groupIds: Array<string>): ExportUserGroupsNewReq {
        this['group_ids'] = groupIds;
        return this;
    }
    public set groupIds(groupIds: Array<string>  | undefined) {
        this['group_ids'] = groupIds;
    }
    public get groupIds(): Array<string> | undefined {
        return this['group_ids'];
    }
    public withLanguage(language: ExportUserGroupsNewReqLanguageEnum | string): ExportUserGroupsNewReq {
        this['language'] = language;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportUserGroupsNewReqLanguageEnum {
    ZH_CN = 'zh_CN',
    EN_US = 'en_US'
}
