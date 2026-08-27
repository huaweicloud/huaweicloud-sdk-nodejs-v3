

export class ApplyConfigurationRequestBody {
    private 'instance_ids'?: Array<string>;
    private 'is_update_param_group_version'?: boolean;
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
    public withIsUpdateParamGroupVersion(isUpdateParamGroupVersion: boolean): ApplyConfigurationRequestBody {
        this['is_update_param_group_version'] = isUpdateParamGroupVersion;
        return this;
    }
    public set isUpdateParamGroupVersion(isUpdateParamGroupVersion: boolean  | undefined) {
        this['is_update_param_group_version'] = isUpdateParamGroupVersion;
    }
    public get isUpdateParamGroupVersion(): boolean | undefined {
        return this['is_update_param_group_version'];
    }
}