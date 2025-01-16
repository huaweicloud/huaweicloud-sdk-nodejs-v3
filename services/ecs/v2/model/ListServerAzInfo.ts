

export class ListServerAzInfo {
    private 'availability_zone_id'?: string;
    public type?: string;
    public mode?: string;
    private 'public_border_group'?: string;
    public alias?: string;
    private 'az_group_ids'?: Array<string>;
    public category?: number;
    public constructor(availabilityZoneId?: string) { 
        this['availability_zone_id'] = availabilityZoneId;
    }
    public withAvailabilityZoneId(availabilityZoneId: string): ListServerAzInfo {
        this['availability_zone_id'] = availabilityZoneId;
        return this;
    }
    public set availabilityZoneId(availabilityZoneId: string  | undefined) {
        this['availability_zone_id'] = availabilityZoneId;
    }
    public get availabilityZoneId(): string | undefined {
        return this['availability_zone_id'];
    }
    public withType(type: string): ListServerAzInfo {
        this['type'] = type;
        return this;
    }
    public withMode(mode: string): ListServerAzInfo {
        this['mode'] = mode;
        return this;
    }
    public withPublicBorderGroup(publicBorderGroup: string): ListServerAzInfo {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withAlias(alias: string): ListServerAzInfo {
        this['alias'] = alias;
        return this;
    }
    public withAzGroupIds(azGroupIds: Array<string>): ListServerAzInfo {
        this['az_group_ids'] = azGroupIds;
        return this;
    }
    public set azGroupIds(azGroupIds: Array<string>  | undefined) {
        this['az_group_ids'] = azGroupIds;
    }
    public get azGroupIds(): Array<string> | undefined {
        return this['az_group_ids'];
    }
    public withCategory(category: number): ListServerAzInfo {
        this['category'] = category;
        return this;
    }
}