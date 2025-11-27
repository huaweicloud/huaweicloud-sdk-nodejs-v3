

export class EnterpriseProjectCollectQueryResponseData {
    public id?: string;
    private 'user_id'?: string;
    private 'ep_id_list'?: Array<string>;
    public constructor() { 
    }
    public withId(id: string): EnterpriseProjectCollectQueryResponseData {
        this['id'] = id;
        return this;
    }
    public withUserId(userId: string): EnterpriseProjectCollectQueryResponseData {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withEpIdList(epIdList: Array<string>): EnterpriseProjectCollectQueryResponseData {
        this['ep_id_list'] = epIdList;
        return this;
    }
    public set epIdList(epIdList: Array<string>  | undefined) {
        this['ep_id_list'] = epIdList;
    }
    public get epIdList(): Array<string> | undefined {
        return this['ep_id_list'];
    }
}