

export class BandwidthPackageLevel {
    public id?: string;
    public level?: string;
    private 'name_cn'?: string;
    private 'name_en'?: string;
    private 'display_priority'?: number;
    public description?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): BandwidthPackageLevel {
        this['id'] = id;
        return this;
    }
    public withLevel(level: string): BandwidthPackageLevel {
        this['level'] = level;
        return this;
    }
    public withNameCn(nameCn: string): BandwidthPackageLevel {
        this['name_cn'] = nameCn;
        return this;
    }
    public set nameCn(nameCn: string  | undefined) {
        this['name_cn'] = nameCn;
    }
    public get nameCn(): string | undefined {
        return this['name_cn'];
    }
    public withNameEn(nameEn: string): BandwidthPackageLevel {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withDisplayPriority(displayPriority: number): BandwidthPackageLevel {
        this['display_priority'] = displayPriority;
        return this;
    }
    public set displayPriority(displayPriority: number  | undefined) {
        this['display_priority'] = displayPriority;
    }
    public get displayPriority(): number | undefined {
        return this['display_priority'];
    }
    public withDescription(description: string): BandwidthPackageLevel {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: Date): BandwidthPackageLevel {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): BandwidthPackageLevel {
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