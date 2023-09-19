

export class ConfigListRsp {
    public id?: string;
    public clusterId?: string;
    public createAt?: string;
    public status?: string;
    public finishedAt?: string;
    public modifyDeleteReset?: string;
    public failedMsg?: string;
    public constructor() { 
    }
    public withId(id: string): ConfigListRsp {
        this['id'] = id;
        return this;
    }
    public withClusterId(clusterId: string): ConfigListRsp {
        this['clusterId'] = clusterId;
        return this;
    }
    public withCreateAt(createAt: string): ConfigListRsp {
        this['createAt'] = createAt;
        return this;
    }
    public withStatus(status: string): ConfigListRsp {
        this['status'] = status;
        return this;
    }
    public withFinishedAt(finishedAt: string): ConfigListRsp {
        this['finishedAt'] = finishedAt;
        return this;
    }
    public withModifyDeleteReset(modifyDeleteReset: string): ConfigListRsp {
        this['modifyDeleteReset'] = modifyDeleteReset;
        return this;
    }
    public withFailedMsg(failedMsg: string): ConfigListRsp {
        this['failedMsg'] = failedMsg;
        return this;
    }
}