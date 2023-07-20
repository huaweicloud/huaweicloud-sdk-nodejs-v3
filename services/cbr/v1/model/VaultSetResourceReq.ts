

export class VaultSetResourceReq {
    private 'resource_ids'?: Array<string>;
    public action?: VaultSetResourceReqActionEnum | string;
    public constructor(resourceIds?: Array<string>, action?: string) { 
        this['resource_ids'] = resourceIds;
        this['action'] = action;
    }
    public withResourceIds(resourceIds: Array<string>): VaultSetResourceReq {
        this['resource_ids'] = resourceIds;
        return this;
    }
    public set resourceIds(resourceIds: Array<string>  | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds(): Array<string> | undefined {
        return this['resource_ids'];
    }
    public withAction(action: VaultSetResourceReqActionEnum | string): VaultSetResourceReq {
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
