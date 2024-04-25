

export class SensitiveDataSecrecyLevelOverviewQueryDTO {
    private 'secrecy_level_id'?: string;
    private 'secrecy_level_name'?: string;
    private 'secrecy_level_number'?: number;
    public count?: number;
    public constructor() { 
    }
    public withSecrecyLevelId(secrecyLevelId: string): SensitiveDataSecrecyLevelOverviewQueryDTO {
        this['secrecy_level_id'] = secrecyLevelId;
        return this;
    }
    public set secrecyLevelId(secrecyLevelId: string  | undefined) {
        this['secrecy_level_id'] = secrecyLevelId;
    }
    public get secrecyLevelId(): string | undefined {
        return this['secrecy_level_id'];
    }
    public withSecrecyLevelName(secrecyLevelName: string): SensitiveDataSecrecyLevelOverviewQueryDTO {
        this['secrecy_level_name'] = secrecyLevelName;
        return this;
    }
    public set secrecyLevelName(secrecyLevelName: string  | undefined) {
        this['secrecy_level_name'] = secrecyLevelName;
    }
    public get secrecyLevelName(): string | undefined {
        return this['secrecy_level_name'];
    }
    public withSecrecyLevelNumber(secrecyLevelNumber: number): SensitiveDataSecrecyLevelOverviewQueryDTO {
        this['secrecy_level_number'] = secrecyLevelNumber;
        return this;
    }
    public set secrecyLevelNumber(secrecyLevelNumber: number  | undefined) {
        this['secrecy_level_number'] = secrecyLevelNumber;
    }
    public get secrecyLevelNumber(): number | undefined {
        return this['secrecy_level_number'];
    }
    public withCount(count: number): SensitiveDataSecrecyLevelOverviewQueryDTO {
        this['count'] = count;
        return this;
    }
}