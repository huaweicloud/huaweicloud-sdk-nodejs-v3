

export class DeletePolicyGroupRequestInfo {
    private 'id_list'?: Array<string>;
    public constructor(idList?: Array<string>) { 
        this['id_list'] = idList;
    }
    public withIdList(idList: Array<string>): DeletePolicyGroupRequestInfo {
        this['id_list'] = idList;
        return this;
    }
    public set idList(idList: Array<string>  | undefined) {
        this['id_list'] = idList;
    }
    public get idList(): Array<string> | undefined {
        return this['id_list'];
    }
}