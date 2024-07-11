

export class DeploymentHostListEntity {
    private 'host_id_list'?: Array<string>;
    public constructor() { 
    }
    public withHostIdList(hostIdList: Array<string>): DeploymentHostListEntity {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
}