

export class CancelHostsQuotaRequestInfo {
    private 'resource_id_list'?: Array<string>;
    public constructor(resourceIdList?: Array<string>) { 
        this['resource_id_list'] = resourceIdList;
    }
    public withResourceIdList(resourceIdList: Array<string>): CancelHostsQuotaRequestInfo {
        this['resource_id_list'] = resourceIdList;
        return this;
    }
    public set resourceIdList(resourceIdList: Array<string>  | undefined) {
        this['resource_id_list'] = resourceIdList;
    }
    public get resourceIdList(): Array<string> | undefined {
        return this['resource_id_list'];
    }
}