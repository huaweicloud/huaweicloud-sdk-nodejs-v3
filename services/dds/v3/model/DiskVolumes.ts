

export class DiskVolumes {
    private 'entity_id'?: string;
    private 'entity_name'?: string;
    private 'group_type'?: string;
    public used?: string;
    public size?: string;
    public constructor(entityId?: string, entityName?: string, groupType?: string, used?: string, size?: string) { 
        this['entity_id'] = entityId;
        this['entity_name'] = entityName;
        this['group_type'] = groupType;
        this['used'] = used;
        this['size'] = size;
    }
    public withEntityId(entityId: string): DiskVolumes {
        this['entity_id'] = entityId;
        return this;
    }
    public set entityId(entityId: string  | undefined) {
        this['entity_id'] = entityId;
    }
    public get entityId(): string | undefined {
        return this['entity_id'];
    }
    public withEntityName(entityName: string): DiskVolumes {
        this['entity_name'] = entityName;
        return this;
    }
    public set entityName(entityName: string  | undefined) {
        this['entity_name'] = entityName;
    }
    public get entityName(): string | undefined {
        return this['entity_name'];
    }
    public withGroupType(groupType: string): DiskVolumes {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): string | undefined {
        return this['group_type'];
    }
    public withUsed(used: string): DiskVolumes {
        this['used'] = used;
        return this;
    }
    public withSize(size: string): DiskVolumes {
        this['size'] = size;
        return this;
    }
}