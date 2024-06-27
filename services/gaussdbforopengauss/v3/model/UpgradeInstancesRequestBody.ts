

export class UpgradeInstancesRequestBody {
    private 'instance_ids'?: Array<string>;
    public constructor() { 
    }
    public withInstanceIds(instanceIds: Array<string>): UpgradeInstancesRequestBody {
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