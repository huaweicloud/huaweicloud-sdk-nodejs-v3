import { DpeInfo } from './DpeInfo';
import { DpeMappingFieldDetail } from './DpeMappingFieldDetail';


export class DpeMappingDetail {
    public id?: string;
    public name?: string;
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'dataclass_id'?: string;
    private 'dataclass_name'?: string;
    private 'mapper_type_id'?: string;
    private 'dpe_info'?: DpeInfo;
    private 'create_time'?: string;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'update_time'?: string;
    private 'modifier_id'?: string;
    private 'modifier_name'?: string;
    private 'mapper_field_list'?: Array<DpeMappingFieldDetail>;
    public constructor() { 
    }
    public withId(id: string): DpeMappingDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DpeMappingDetail {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): DpeMappingDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): DpeMappingDetail {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDataclassId(dataclassId: string): DpeMappingDetail {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withDataclassName(dataclassName: string): DpeMappingDetail {
        this['dataclass_name'] = dataclassName;
        return this;
    }
    public set dataclassName(dataclassName: string  | undefined) {
        this['dataclass_name'] = dataclassName;
    }
    public get dataclassName(): string | undefined {
        return this['dataclass_name'];
    }
    public withMapperTypeId(mapperTypeId: string): DpeMappingDetail {
        this['mapper_type_id'] = mapperTypeId;
        return this;
    }
    public set mapperTypeId(mapperTypeId: string  | undefined) {
        this['mapper_type_id'] = mapperTypeId;
    }
    public get mapperTypeId(): string | undefined {
        return this['mapper_type_id'];
    }
    public withDpeInfo(dpeInfo: DpeInfo): DpeMappingDetail {
        this['dpe_info'] = dpeInfo;
        return this;
    }
    public set dpeInfo(dpeInfo: DpeInfo  | undefined) {
        this['dpe_info'] = dpeInfo;
    }
    public get dpeInfo(): DpeInfo | undefined {
        return this['dpe_info'];
    }
    public withCreateTime(createTime: string): DpeMappingDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreatorId(creatorId: string): DpeMappingDetail {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): DpeMappingDetail {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withUpdateTime(updateTime: string): DpeMappingDetail {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withModifierId(modifierId: string): DpeMappingDetail {
        this['modifier_id'] = modifierId;
        return this;
    }
    public set modifierId(modifierId: string  | undefined) {
        this['modifier_id'] = modifierId;
    }
    public get modifierId(): string | undefined {
        return this['modifier_id'];
    }
    public withModifierName(modifierName: string): DpeMappingDetail {
        this['modifier_name'] = modifierName;
        return this;
    }
    public set modifierName(modifierName: string  | undefined) {
        this['modifier_name'] = modifierName;
    }
    public get modifierName(): string | undefined {
        return this['modifier_name'];
    }
    public withMapperFieldList(mapperFieldList: Array<DpeMappingFieldDetail>): DpeMappingDetail {
        this['mapper_field_list'] = mapperFieldList;
        return this;
    }
    public set mapperFieldList(mapperFieldList: Array<DpeMappingFieldDetail>  | undefined) {
        this['mapper_field_list'] = mapperFieldList;
    }
    public get mapperFieldList(): Array<DpeMappingFieldDetail> | undefined {
        return this['mapper_field_list'];
    }
}