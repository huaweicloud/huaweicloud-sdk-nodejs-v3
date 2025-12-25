import { DpeClassifyItemDetail } from './DpeClassifyItemDetail';
import { DpeInfo } from './DpeInfo';


export class DpeClassifyDetail {
    public id?: string;
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'dataclass_id'?: string;
    private 'dataclass_name'?: string;
    private 'mapping_id'?: string;
    private 'direct_classifier'?: string;
    private 'direct_classifier_type_id'?: string;
    private 'create_time'?: string;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'update_time'?: string;
    private 'modifier_id'?: string;
    private 'modifier_name'?: string;
    private 'mapping_info'?: DpeInfo;
    private 'classifier_item_list'?: Array<DpeClassifyItemDetail>;
    public constructor() { 
    }
    public withId(id: string): DpeClassifyDetail {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): DpeClassifyDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): DpeClassifyDetail {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDataclassId(dataclassId: string): DpeClassifyDetail {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withDataclassName(dataclassName: string): DpeClassifyDetail {
        this['dataclass_name'] = dataclassName;
        return this;
    }
    public set dataclassName(dataclassName: string  | undefined) {
        this['dataclass_name'] = dataclassName;
    }
    public get dataclassName(): string | undefined {
        return this['dataclass_name'];
    }
    public withMappingId(mappingId: string): DpeClassifyDetail {
        this['mapping_id'] = mappingId;
        return this;
    }
    public set mappingId(mappingId: string  | undefined) {
        this['mapping_id'] = mappingId;
    }
    public get mappingId(): string | undefined {
        return this['mapping_id'];
    }
    public withDirectClassifier(directClassifier: string): DpeClassifyDetail {
        this['direct_classifier'] = directClassifier;
        return this;
    }
    public set directClassifier(directClassifier: string  | undefined) {
        this['direct_classifier'] = directClassifier;
    }
    public get directClassifier(): string | undefined {
        return this['direct_classifier'];
    }
    public withDirectClassifierTypeId(directClassifierTypeId: string): DpeClassifyDetail {
        this['direct_classifier_type_id'] = directClassifierTypeId;
        return this;
    }
    public set directClassifierTypeId(directClassifierTypeId: string  | undefined) {
        this['direct_classifier_type_id'] = directClassifierTypeId;
    }
    public get directClassifierTypeId(): string | undefined {
        return this['direct_classifier_type_id'];
    }
    public withCreateTime(createTime: string): DpeClassifyDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreatorId(creatorId: string): DpeClassifyDetail {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): DpeClassifyDetail {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withUpdateTime(updateTime: string): DpeClassifyDetail {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withModifierId(modifierId: string): DpeClassifyDetail {
        this['modifier_id'] = modifierId;
        return this;
    }
    public set modifierId(modifierId: string  | undefined) {
        this['modifier_id'] = modifierId;
    }
    public get modifierId(): string | undefined {
        return this['modifier_id'];
    }
    public withModifierName(modifierName: string): DpeClassifyDetail {
        this['modifier_name'] = modifierName;
        return this;
    }
    public set modifierName(modifierName: string  | undefined) {
        this['modifier_name'] = modifierName;
    }
    public get modifierName(): string | undefined {
        return this['modifier_name'];
    }
    public withMappingInfo(mappingInfo: DpeInfo): DpeClassifyDetail {
        this['mapping_info'] = mappingInfo;
        return this;
    }
    public set mappingInfo(mappingInfo: DpeInfo  | undefined) {
        this['mapping_info'] = mappingInfo;
    }
    public get mappingInfo(): DpeInfo | undefined {
        return this['mapping_info'];
    }
    public withClassifierItemList(classifierItemList: Array<DpeClassifyItemDetail>): DpeClassifyDetail {
        this['classifier_item_list'] = classifierItemList;
        return this;
    }
    public set classifierItemList(classifierItemList: Array<DpeClassifyItemDetail>  | undefined) {
        this['classifier_item_list'] = classifierItemList;
    }
    public get classifierItemList(): Array<DpeClassifyItemDetail> | undefined {
        return this['classifier_item_list'];
    }
}