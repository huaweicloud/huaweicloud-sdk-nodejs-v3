import { DpeClassifyCreate } from './DpeClassifyCreate';
import { DpeMappingDetail } from './DpeMappingDetail';


export class CreateDpeMappingRequestBody {
    public id?: string;
    public name?: string;
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'dataclass_id'?: string;
    private 'data_source'?: string;
    public status?: string;
    public description?: string;
    private 'create_time'?: string;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'update_time'?: string;
    private 'modifier_id'?: string;
    private 'modifier_name'?: string;
    public mapper?: DpeMappingDetail;
    public classifier?: DpeClassifyCreate;
    public constructor(id?: string, dataclassId?: string, mapper?: DpeMappingDetail) { 
        this['id'] = id;
        this['dataclass_id'] = dataclassId;
        this['mapper'] = mapper;
    }
    public withId(id: string): CreateDpeMappingRequestBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateDpeMappingRequestBody {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): CreateDpeMappingRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): CreateDpeMappingRequestBody {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDataclassId(dataclassId: string): CreateDpeMappingRequestBody {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withDataSource(dataSource: string): CreateDpeMappingRequestBody {
        this['data_source'] = dataSource;
        return this;
    }
    public set dataSource(dataSource: string  | undefined) {
        this['data_source'] = dataSource;
    }
    public get dataSource(): string | undefined {
        return this['data_source'];
    }
    public withStatus(status: string): CreateDpeMappingRequestBody {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): CreateDpeMappingRequestBody {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): CreateDpeMappingRequestBody {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreatorId(creatorId: string): CreateDpeMappingRequestBody {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): CreateDpeMappingRequestBody {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withUpdateTime(updateTime: string): CreateDpeMappingRequestBody {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withModifierId(modifierId: string): CreateDpeMappingRequestBody {
        this['modifier_id'] = modifierId;
        return this;
    }
    public set modifierId(modifierId: string  | undefined) {
        this['modifier_id'] = modifierId;
    }
    public get modifierId(): string | undefined {
        return this['modifier_id'];
    }
    public withModifierName(modifierName: string): CreateDpeMappingRequestBody {
        this['modifier_name'] = modifierName;
        return this;
    }
    public set modifierName(modifierName: string  | undefined) {
        this['modifier_name'] = modifierName;
    }
    public get modifierName(): string | undefined {
        return this['modifier_name'];
    }
    public withMapper(mapper: DpeMappingDetail): CreateDpeMappingRequestBody {
        this['mapper'] = mapper;
        return this;
    }
    public withClassifier(classifier: DpeClassifyCreate): CreateDpeMappingRequestBody {
        this['classifier'] = classifier;
        return this;
    }
}