

export class StartManualSecurityCheckRequestInfo {
    public content?: Array<string>;
    private 'host_id_list'?: Array<string>;
    private 'operate_all'?: boolean;
    public constructor() { 
    }
    public withContent(content: Array<string>): StartManualSecurityCheckRequestInfo {
        this['content'] = content;
        return this;
    }
    public withHostIdList(hostIdList: Array<string>): StartManualSecurityCheckRequestInfo {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
    public withOperateAll(operateAll: boolean): StartManualSecurityCheckRequestInfo {
        this['operate_all'] = operateAll;
        return this;
    }
    public set operateAll(operateAll: boolean  | undefined) {
        this['operate_all'] = operateAll;
    }
    public get operateAll(): boolean | undefined {
        return this['operate_all'];
    }
}