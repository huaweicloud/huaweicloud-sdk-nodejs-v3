

export class ApplyConfigurationRequestBody {
    private 'instance_ids'?: Array<string>;
    public constructor(instanceIds?: Array<string>) { 
        this['instance_ids'] = instanceIds;
    }
    public withInstanceIds(instanceIds: Array<string>): ApplyConfigurationRequestBody {
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