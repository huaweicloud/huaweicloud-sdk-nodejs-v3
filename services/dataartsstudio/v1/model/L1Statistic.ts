import { L2Statistic } from './L2Statistic';


export class L1Statistic {
    private 'subject_area_group_name'?: string;
    private 'subject_area_group_name_en'?: string;
    private 'subject_area_group_guid'?: string;
    public ordinal?: number;
    private 'subject_area_count'?: number;
    private 'business_object_count'?: number;
    private 'logic_entity_count'?: number;
    private 'subject_area_statistics'?: Array<L2Statistic>;
    public constructor() { 
    }
    public withSubjectAreaGroupName(subjectAreaGroupName: string): L1Statistic {
        this['subject_area_group_name'] = subjectAreaGroupName;
        return this;
    }
    public set subjectAreaGroupName(subjectAreaGroupName: string  | undefined) {
        this['subject_area_group_name'] = subjectAreaGroupName;
    }
    public get subjectAreaGroupName(): string | undefined {
        return this['subject_area_group_name'];
    }
    public withSubjectAreaGroupNameEn(subjectAreaGroupNameEn: string): L1Statistic {
        this['subject_area_group_name_en'] = subjectAreaGroupNameEn;
        return this;
    }
    public set subjectAreaGroupNameEn(subjectAreaGroupNameEn: string  | undefined) {
        this['subject_area_group_name_en'] = subjectAreaGroupNameEn;
    }
    public get subjectAreaGroupNameEn(): string | undefined {
        return this['subject_area_group_name_en'];
    }
    public withSubjectAreaGroupGuid(subjectAreaGroupGuid: string): L1Statistic {
        this['subject_area_group_guid'] = subjectAreaGroupGuid;
        return this;
    }
    public set subjectAreaGroupGuid(subjectAreaGroupGuid: string  | undefined) {
        this['subject_area_group_guid'] = subjectAreaGroupGuid;
    }
    public get subjectAreaGroupGuid(): string | undefined {
        return this['subject_area_group_guid'];
    }
    public withOrdinal(ordinal: number): L1Statistic {
        this['ordinal'] = ordinal;
        return this;
    }
    public withSubjectAreaCount(subjectAreaCount: number): L1Statistic {
        this['subject_area_count'] = subjectAreaCount;
        return this;
    }
    public set subjectAreaCount(subjectAreaCount: number  | undefined) {
        this['subject_area_count'] = subjectAreaCount;
    }
    public get subjectAreaCount(): number | undefined {
        return this['subject_area_count'];
    }
    public withBusinessObjectCount(businessObjectCount: number): L1Statistic {
        this['business_object_count'] = businessObjectCount;
        return this;
    }
    public set businessObjectCount(businessObjectCount: number  | undefined) {
        this['business_object_count'] = businessObjectCount;
    }
    public get businessObjectCount(): number | undefined {
        return this['business_object_count'];
    }
    public withLogicEntityCount(logicEntityCount: number): L1Statistic {
        this['logic_entity_count'] = logicEntityCount;
        return this;
    }
    public set logicEntityCount(logicEntityCount: number  | undefined) {
        this['logic_entity_count'] = logicEntityCount;
    }
    public get logicEntityCount(): number | undefined {
        return this['logic_entity_count'];
    }
    public withSubjectAreaStatistics(subjectAreaStatistics: Array<L2Statistic>): L1Statistic {
        this['subject_area_statistics'] = subjectAreaStatistics;
        return this;
    }
    public set subjectAreaStatistics(subjectAreaStatistics: Array<L2Statistic>  | undefined) {
        this['subject_area_statistics'] = subjectAreaStatistics;
    }
    public get subjectAreaStatistics(): Array<L2Statistic> | undefined {
        return this['subject_area_statistics'];
    }
}