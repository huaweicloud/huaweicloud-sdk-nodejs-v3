

export class IpsWhitelistRespData {
    private 'list_ids'?: Array<string>;
    public constructor() { 
    }
    public withListIds(listIds: Array<string>): IpsWhitelistRespData {
        this['list_ids'] = listIds;
        return this;
    }
    public set listIds(listIds: Array<string>  | undefined) {
        this['list_ids'] = listIds;
    }
    public get listIds(): Array<string> | undefined {
        return this['list_ids'];
    }
}