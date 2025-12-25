

export class ListConnectionsRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    private 'component_name'?: string;
    private 'creator_name'?: string;
    private 'modifier_name'?: string;
    public description?: string;
    private 'create_start_time'?: string;
    private 'create_end_time'?: string;
    private 'update_start_time'?: string;
    private 'update_end_time'?: string;
    private 'is_defense_type'?: boolean;
    public constructor(contentType?: string, workspaceId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
    }
    public withContentType(contentType: string): ListConnectionsRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ListConnectionsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withOffset(offset: number): ListConnectionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListConnectionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListConnectionsRequest {
        this['name'] = name;
        return this;
    }
    public withComponentName(componentName: string): ListConnectionsRequest {
        this['component_name'] = componentName;
        return this;
    }
    public set componentName(componentName: string  | undefined) {
        this['component_name'] = componentName;
    }
    public get componentName(): string | undefined {
        return this['component_name'];
    }
    public withCreatorName(creatorName: string): ListConnectionsRequest {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withModifierName(modifierName: string): ListConnectionsRequest {
        this['modifier_name'] = modifierName;
        return this;
    }
    public set modifierName(modifierName: string  | undefined) {
        this['modifier_name'] = modifierName;
    }
    public get modifierName(): string | undefined {
        return this['modifier_name'];
    }
    public withDescription(description: string): ListConnectionsRequest {
        this['description'] = description;
        return this;
    }
    public withCreateStartTime(createStartTime: string): ListConnectionsRequest {
        this['create_start_time'] = createStartTime;
        return this;
    }
    public set createStartTime(createStartTime: string  | undefined) {
        this['create_start_time'] = createStartTime;
    }
    public get createStartTime(): string | undefined {
        return this['create_start_time'];
    }
    public withCreateEndTime(createEndTime: string): ListConnectionsRequest {
        this['create_end_time'] = createEndTime;
        return this;
    }
    public set createEndTime(createEndTime: string  | undefined) {
        this['create_end_time'] = createEndTime;
    }
    public get createEndTime(): string | undefined {
        return this['create_end_time'];
    }
    public withUpdateStartTime(updateStartTime: string): ListConnectionsRequest {
        this['update_start_time'] = updateStartTime;
        return this;
    }
    public set updateStartTime(updateStartTime: string  | undefined) {
        this['update_start_time'] = updateStartTime;
    }
    public get updateStartTime(): string | undefined {
        return this['update_start_time'];
    }
    public withUpdateEndTime(updateEndTime: string): ListConnectionsRequest {
        this['update_end_time'] = updateEndTime;
        return this;
    }
    public set updateEndTime(updateEndTime: string  | undefined) {
        this['update_end_time'] = updateEndTime;
    }
    public get updateEndTime(): string | undefined {
        return this['update_end_time'];
    }
    public withIsDefenseType(isDefenseType: boolean): ListConnectionsRequest {
        this['is_defense_type'] = isDefenseType;
        return this;
    }
    public set isDefenseType(isDefenseType: boolean  | undefined) {
        this['is_defense_type'] = isDefenseType;
    }
    public get isDefenseType(): boolean | undefined {
        return this['is_defense_type'];
    }
}