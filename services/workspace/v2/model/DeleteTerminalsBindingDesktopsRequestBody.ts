

export class DeleteTerminalsBindingDesktopsRequestBody {
    private 'id_list'?: Array<string>;
    public constructor() { 
    }
    public withIdList(idList: Array<string>): DeleteTerminalsBindingDesktopsRequestBody {
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