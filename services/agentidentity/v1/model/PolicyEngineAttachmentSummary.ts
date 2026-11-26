import { EntityType } from './EntityType';
import { PolicyEngineMode } from './PolicyEngineMode';


export class PolicyEngineAttachmentSummary {
    private 'entity_type'?: EntityType;
    private 'entity_id'?: string;
    public mode?: PolicyEngineMode;
    private 'attached_at'?: Date;
    public constructor(entityType?: EntityType, entityId?: string, mode?: PolicyEngineMode, attachedAt?: Date) { 
        this['entity_type'] = entityType;
        this['entity_id'] = entityId;
        this['mode'] = mode;
        this['attached_at'] = attachedAt;
    }
    public withEntityType(entityType: EntityType): PolicyEngineAttachmentSummary {
        this['entity_type'] = entityType;
        return this;
    }
    public set entityType(entityType: EntityType  | undefined) {
        this['entity_type'] = entityType;
    }
    public get entityType(): EntityType | undefined {
        return this['entity_type'];
    }
    public withEntityId(entityId: string): PolicyEngineAttachmentSummary {
        this['entity_id'] = entityId;
        return this;
    }
    public set entityId(entityId: string  | undefined) {
        this['entity_id'] = entityId;
    }
    public get entityId(): string | undefined {
        return this['entity_id'];
    }
    public withMode(mode: PolicyEngineMode): PolicyEngineAttachmentSummary {
        this['mode'] = mode;
        return this;
    }
    public withAttachedAt(attachedAt: Date): PolicyEngineAttachmentSummary {
        this['attached_at'] = attachedAt;
        return this;
    }
    public set attachedAt(attachedAt: Date  | undefined) {
        this['attached_at'] = attachedAt;
    }
    public get attachedAt(): Date | undefined {
        return this['attached_at'];
    }
}