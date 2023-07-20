import { AvailableTag } from './AvailableTag';


export class AvailableZoneV2 {
    public id?: string;
    private 'az_code'?: string;
    private 'az_name'?: string;
    private 'az_id'?: string;
    public status?: string;
    private 'region_id'?: string;
    private 'az_group_id'?: string;
    private 'az_type'?: string;
    private 'az_tags'?: AvailableTag;
    public constructor() { 
    }
    public withId(id: string): AvailableZoneV2 {
        this['id'] = id;
        return this;
    }
    public withAzCode(azCode: string): AvailableZoneV2 {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withAzName(azName: string): AvailableZoneV2 {
        this['az_name'] = azName;
        return this;
    }
    public set azName(azName: string  | undefined) {
        this['az_name'] = azName;
    }
    public get azName(): string | undefined {
        return this['az_name'];
    }
    public withAzId(azId: string): AvailableZoneV2 {
        this['az_id'] = azId;
        return this;
    }
    public set azId(azId: string  | undefined) {
        this['az_id'] = azId;
    }
    public get azId(): string | undefined {
        return this['az_id'];
    }
    public withStatus(status: string): AvailableZoneV2 {
        this['status'] = status;
        return this;
    }
    public withRegionId(regionId: string): AvailableZoneV2 {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withAzGroupId(azGroupId: string): AvailableZoneV2 {
        this['az_group_id'] = azGroupId;
        return this;
    }
    public set azGroupId(azGroupId: string  | undefined) {
        this['az_group_id'] = azGroupId;
    }
    public get azGroupId(): string | undefined {
        return this['az_group_id'];
    }
    public withAzType(azType: string): AvailableZoneV2 {
        this['az_type'] = azType;
        return this;
    }
    public set azType(azType: string  | undefined) {
        this['az_type'] = azType;
    }
    public get azType(): string | undefined {
        return this['az_type'];
    }
    public withAzTags(azTags: AvailableTag): AvailableZoneV2 {
        this['az_tags'] = azTags;
        return this;
    }
    public set azTags(azTags: AvailableTag  | undefined) {
        this['az_tags'] = azTags;
    }
    public get azTags(): AvailableTag | undefined {
        return this['az_tags'];
    }
}