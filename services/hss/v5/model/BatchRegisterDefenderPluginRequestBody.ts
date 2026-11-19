

export class BatchRegisterDefenderPluginRequestBody {
    public opt?: BatchRegisterDefenderPluginRequestBodyOptEnum | string;
    private 'instance_ids'?: Array<string>;
    public constructor(opt?: string, instanceIds?: Array<string>) { 
        this['opt'] = opt;
        this['instance_ids'] = instanceIds;
    }
    public withOpt(opt: BatchRegisterDefenderPluginRequestBodyOptEnum | string): BatchRegisterDefenderPluginRequestBody {
        this['opt'] = opt;
        return this;
    }
    public withInstanceIds(instanceIds: Array<string>): BatchRegisterDefenderPluginRequestBody {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchRegisterDefenderPluginRequestBodyOptEnum {
    INSTALL = 'install',
    UNINSTALL = 'uninstall'
}
