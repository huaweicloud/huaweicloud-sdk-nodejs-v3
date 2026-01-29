import { ComponentInfoOperationHistory } from './ComponentInfoOperationHistory';
import { ComponentVersionInfo } from './ComponentVersionInfo';


export class ComponentInfo {
    public id?: string;
    public name?: string;
    private 'dev_language'?: string;
    private 'dev_language_version'?: string;
    private 'alliance_id'?: string;
    private 'alliance_name'?: string;
    public description?: string;
    public logo?: string;
    public label?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'modifier_id'?: string;
    private 'modifier_name'?: string;
    private 'operation_history'?: Array<ComponentInfoOperationHistory>;
    public versions?: Array<ComponentVersionInfo>;
    private 'component_type'?: string;
    public constructor() { 
    }
    public withId(id: string): ComponentInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ComponentInfo {
        this['name'] = name;
        return this;
    }
    public withDevLanguage(devLanguage: string): ComponentInfo {
        this['dev_language'] = devLanguage;
        return this;
    }
    public set devLanguage(devLanguage: string  | undefined) {
        this['dev_language'] = devLanguage;
    }
    public get devLanguage(): string | undefined {
        return this['dev_language'];
    }
    public withDevLanguageVersion(devLanguageVersion: string): ComponentInfo {
        this['dev_language_version'] = devLanguageVersion;
        return this;
    }
    public set devLanguageVersion(devLanguageVersion: string  | undefined) {
        this['dev_language_version'] = devLanguageVersion;
    }
    public get devLanguageVersion(): string | undefined {
        return this['dev_language_version'];
    }
    public withAllianceId(allianceId: string): ComponentInfo {
        this['alliance_id'] = allianceId;
        return this;
    }
    public set allianceId(allianceId: string  | undefined) {
        this['alliance_id'] = allianceId;
    }
    public get allianceId(): string | undefined {
        return this['alliance_id'];
    }
    public withAllianceName(allianceName: string): ComponentInfo {
        this['alliance_name'] = allianceName;
        return this;
    }
    public set allianceName(allianceName: string  | undefined) {
        this['alliance_name'] = allianceName;
    }
    public get allianceName(): string | undefined {
        return this['alliance_name'];
    }
    public withDescription(description: string): ComponentInfo {
        this['description'] = description;
        return this;
    }
    public withLogo(logo: string): ComponentInfo {
        this['logo'] = logo;
        return this;
    }
    public withLabel(label: string): ComponentInfo {
        this['label'] = label;
        return this;
    }
    public withCreateTime(createTime: string): ComponentInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ComponentInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withCreatorId(creatorId: string): ComponentInfo {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): ComponentInfo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withModifierId(modifierId: string): ComponentInfo {
        this['modifier_id'] = modifierId;
        return this;
    }
    public set modifierId(modifierId: string  | undefined) {
        this['modifier_id'] = modifierId;
    }
    public get modifierId(): string | undefined {
        return this['modifier_id'];
    }
    public withModifierName(modifierName: string): ComponentInfo {
        this['modifier_name'] = modifierName;
        return this;
    }
    public set modifierName(modifierName: string  | undefined) {
        this['modifier_name'] = modifierName;
    }
    public get modifierName(): string | undefined {
        return this['modifier_name'];
    }
    public withOperationHistory(operationHistory: Array<ComponentInfoOperationHistory>): ComponentInfo {
        this['operation_history'] = operationHistory;
        return this;
    }
    public set operationHistory(operationHistory: Array<ComponentInfoOperationHistory>  | undefined) {
        this['operation_history'] = operationHistory;
    }
    public get operationHistory(): Array<ComponentInfoOperationHistory> | undefined {
        return this['operation_history'];
    }
    public withVersions(versions: Array<ComponentVersionInfo>): ComponentInfo {
        this['versions'] = versions;
        return this;
    }
    public withComponentType(componentType: string): ComponentInfo {
        this['component_type'] = componentType;
        return this;
    }
    public set componentType(componentType: string  | undefined) {
        this['component_type'] = componentType;
    }
    public get componentType(): string | undefined {
        return this['component_type'];
    }
}