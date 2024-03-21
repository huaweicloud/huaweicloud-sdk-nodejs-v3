

export class SecrecyLevel {
    private 'secrecy_level_id'?: string;
    private 'secrecy_level_name'?: string;
    private 'secrecy_level_number'?: number;
    public description?: string;
    private 'created_by'?: string;
    private 'created_at'?: number;
    private 'updated_by'?: string;
    private 'updated_at'?: number;
    private 'instance_id'?: string;
    public constructor() { 
    }
    public withSecrecyLevelId(secrecyLevelId: string): SecrecyLevel {
        this['secrecy_level_id'] = secrecyLevelId;
        return this;
    }
    public set secrecyLevelId(secrecyLevelId: string  | undefined) {
        this['secrecy_level_id'] = secrecyLevelId;
    }
    public get secrecyLevelId(): string | undefined {
        return this['secrecy_level_id'];
    }
    public withSecrecyLevelName(secrecyLevelName: string): SecrecyLevel {
        this['secrecy_level_name'] = secrecyLevelName;
        return this;
    }
    public set secrecyLevelName(secrecyLevelName: string  | undefined) {
        this['secrecy_level_name'] = secrecyLevelName;
    }
    public get secrecyLevelName(): string | undefined {
        return this['secrecy_level_name'];
    }
    public withSecrecyLevelNumber(secrecyLevelNumber: number): SecrecyLevel {
        this['secrecy_level_number'] = secrecyLevelNumber;
        return this;
    }
    public set secrecyLevelNumber(secrecyLevelNumber: number  | undefined) {
        this['secrecy_level_number'] = secrecyLevelNumber;
    }
    public get secrecyLevelNumber(): number | undefined {
        return this['secrecy_level_number'];
    }
    public withDescription(description: string): SecrecyLevel {
        this['description'] = description;
        return this;
    }
    public withCreatedBy(createdBy: string): SecrecyLevel {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withCreatedAt(createdAt: number): SecrecyLevel {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: number  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): number | undefined {
        return this['created_at'];
    }
    public withUpdatedBy(updatedBy: string): SecrecyLevel {
        this['updated_by'] = updatedBy;
        return this;
    }
    public set updatedBy(updatedBy: string  | undefined) {
        this['updated_by'] = updatedBy;
    }
    public get updatedBy(): string | undefined {
        return this['updated_by'];
    }
    public withUpdatedAt(updatedAt: number): SecrecyLevel {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: number  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): number | undefined {
        return this['updated_at'];
    }
    public withInstanceId(instanceId: string): SecrecyLevel {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}