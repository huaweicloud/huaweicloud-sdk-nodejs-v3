

export class VpnUserGroup {
    public id?: string;
    public name?: string;
    public description?: string;
    public type?: string;
    private 'user_number'?: number;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): VpnUserGroup {
        this['id'] = id;
        return this;
    }
    public withName(name: string): VpnUserGroup {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): VpnUserGroup {
        this['description'] = description;
        return this;
    }
    public withType(type: string): VpnUserGroup {
        this['type'] = type;
        return this;
    }
    public withUserNumber(userNumber: number): VpnUserGroup {
        this['user_number'] = userNumber;
        return this;
    }
    public set userNumber(userNumber: number  | undefined) {
        this['user_number'] = userNumber;
    }
    public get userNumber(): number | undefined {
        return this['user_number'];
    }
    public withCreatedAt(createdAt: Date): VpnUserGroup {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): VpnUserGroup {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}