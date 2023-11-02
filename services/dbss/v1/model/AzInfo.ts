

export class AzInfo {
    private 'zone_name'?: string;
    private 'zone_number'?: number;
    private 'az_type'?: string;
    public alias?: string;
    private 'alias_us'?: string;
    public constructor(zoneName?: string, zoneNumber?: number, azType?: string, alias?: string, aliasUs?: string) { 
        this['zone_name'] = zoneName;
        this['zone_number'] = zoneNumber;
        this['az_type'] = azType;
        this['alias'] = alias;
        this['alias_us'] = aliasUs;
    }
    public withZoneName(zoneName: string): AzInfo {
        this['zone_name'] = zoneName;
        return this;
    }
    public set zoneName(zoneName: string  | undefined) {
        this['zone_name'] = zoneName;
    }
    public get zoneName(): string | undefined {
        return this['zone_name'];
    }
    public withZoneNumber(zoneNumber: number): AzInfo {
        this['zone_number'] = zoneNumber;
        return this;
    }
    public set zoneNumber(zoneNumber: number  | undefined) {
        this['zone_number'] = zoneNumber;
    }
    public get zoneNumber(): number | undefined {
        return this['zone_number'];
    }
    public withAzType(azType: string): AzInfo {
        this['az_type'] = azType;
        return this;
    }
    public set azType(azType: string  | undefined) {
        this['az_type'] = azType;
    }
    public get azType(): string | undefined {
        return this['az_type'];
    }
    public withAlias(alias: string): AzInfo {
        this['alias'] = alias;
        return this;
    }
    public withAliasUs(aliasUs: string): AzInfo {
        this['alias_us'] = aliasUs;
        return this;
    }
    public set aliasUs(aliasUs: string  | undefined) {
        this['alias_us'] = aliasUs;
    }
    public get aliasUs(): string | undefined {
        return this['alias_us'];
    }
}