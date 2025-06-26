

export class DiagnosisTaskSubmitBody {
    private 'resource_ids'?: Array<string>;
    public type?: DiagnosisTaskSubmitBodyTypeEnum | string;
    private 'extra_properties'?: Array<string>;
    public constructor() { 
    }
    public withResourceIds(resourceIds: Array<string>): DiagnosisTaskSubmitBody {
        this['resource_ids'] = resourceIds;
        return this;
    }
    public set resourceIds(resourceIds: Array<string>  | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds(): Array<string> | undefined {
        return this['resource_ids'];
    }
    public withType(type: DiagnosisTaskSubmitBodyTypeEnum | string): DiagnosisTaskSubmitBody {
        this['type'] = type;
        return this;
    }
    public withExtraProperties(extraProperties: Array<string>): DiagnosisTaskSubmitBody {
        this['extra_properties'] = extraProperties;
        return this;
    }
    public set extraProperties(extraProperties: Array<string>  | undefined) {
        this['extra_properties'] = extraProperties;
    }
    public get extraProperties(): Array<string> | undefined {
        return this['extra_properties'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DiagnosisTaskSubmitBodyTypeEnum {
    ECS = 'ECS',
    RDS = 'RDS',
    DCS = 'DCS',
    DMS = 'DMS',
    ELB = 'ELB'
}
