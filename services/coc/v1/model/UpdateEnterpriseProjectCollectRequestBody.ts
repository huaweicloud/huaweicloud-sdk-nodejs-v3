

export class UpdateEnterpriseProjectCollectRequestBody {
    public id?: string;
    private 'ep_id_list'?: Array<string>;
    private 'user_id'?: string;
    public constructor(id?: string, epIdList?: Array<string>) { 
        this['id'] = id;
        this['ep_id_list'] = epIdList;
    }
    public withId(id: string): UpdateEnterpriseProjectCollectRequestBody {
        this['id'] = id;
        return this;
    }
    public withEpIdList(epIdList: Array<string>): UpdateEnterpriseProjectCollectRequestBody {
        this['ep_id_list'] = epIdList;
        return this;
    }
    public set epIdList(epIdList: Array<string>  | undefined) {
        this['ep_id_list'] = epIdList;
    }
    public get epIdList(): Array<string> | undefined {
        return this['ep_id_list'];
    }
    public withUserId(userId: string): UpdateEnterpriseProjectCollectRequestBody {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
}