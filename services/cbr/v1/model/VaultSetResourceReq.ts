

export class VaultSetResourceReq {
    private 'resource_ids': Array<string> | undefined;
    public action: VaultSetResourceReqActionEnum;
    public constructor(resourceIds?: any, action?: any) { 
        this['resource_ids'] = resourceIds;
        this['action'] = action;
    }
    public withResourceIds(resourceIds: Array<string>): VaultSetResourceReq {
        this['resource_ids'] = resourceIds;
        return this;
    }
    public set resourceIds(resourceIds: Array<string> | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds() {
        return this['resource_ids'];
    }
    public withAction(action: VaultSetResourceReqActionEnum): VaultSetResourceReq {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VaultSetResourceReqActionEnum {
    SUSPEND = 'suspend',
    UNSUSPEND = 'unsuspend'
}
