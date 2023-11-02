

export class L2Statistic {
    private 'subject_area_name'?: string;
    private 'subject_area_guid'?: string;
    public ordinal?: number;
    private 'business_object_count'?: number;
    private 'logic_entity_count'?: number;
    public constructor() { 
    }
    public withSubjectAreaName(subjectAreaName: string): L2Statistic {
        this['subject_area_name'] = subjectAreaName;
        return this;
    }
    public set subjectAreaName(subjectAreaName: string  | undefined) {
        this['subject_area_name'] = subjectAreaName;
    }
    public get subjectAreaName(): string | undefined {
        return this['subject_area_name'];
    }
    public withSubjectAreaGuid(subjectAreaGuid: string): L2Statistic {
        this['subject_area_guid'] = subjectAreaGuid;
        return this;
    }
    public set subjectAreaGuid(subjectAreaGuid: string  | undefined) {
        this['subject_area_guid'] = subjectAreaGuid;
    }
    public get subjectAreaGuid(): string | undefined {
        return this['subject_area_guid'];
    }
    public withOrdinal(ordinal: number): L2Statistic {
        this['ordinal'] = ordinal;
        return this;
    }
    public withBusinessObjectCount(businessObjectCount: number): L2Statistic {
        this['business_object_count'] = businessObjectCount;
        return this;
    }
    public set businessObjectCount(businessObjectCount: number  | undefined) {
        this['business_object_count'] = businessObjectCount;
    }
    public get businessObjectCount(): number | undefined {
        return this['business_object_count'];
    }
    public withLogicEntityCount(logicEntityCount: number): L2Statistic {
        this['logic_entity_count'] = logicEntityCount;
        return this;
    }
    public set logicEntityCount(logicEntityCount: number  | undefined) {
        this['logic_entity_count'] = logicEntityCount;
    }
    public get logicEntityCount(): number | undefined {
        return this['logic_entity_count'];
    }
}