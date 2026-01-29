

export class UnsubscribeParam {
    private 'resource_ids'?: Array<string>;
    public constructor() { 
    }
    public withResourceIds(resourceIds: Array<string>): UnsubscribeParam {
        this['resource_ids'] = resourceIds;
        return this;
    }
    public set resourceIds(resourceIds: Array<string>  | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds(): Array<string> | undefined {
        return this['resource_ids'];
    }
}