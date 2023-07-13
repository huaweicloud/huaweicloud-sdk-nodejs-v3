

export class FlavorAzObject {
    public capacity?: string;
    public unit?: string;
    private 'available_zones'?: Array<string> | undefined;
    private 'az_codes'?: Array<string> | undefined;
    public constructor() { 
    }
    public withCapacity(capacity: string): FlavorAzObject {
        this['capacity'] = capacity;
        return this;
    }
    public withUnit(unit: string): FlavorAzObject {
        this['unit'] = unit;
        return this;
    }
    public withAvailableZones(availableZones: Array<string>): FlavorAzObject {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string> | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones() {
        return this['available_zones'];
    }
    public withAzCodes(azCodes: Array<string>): FlavorAzObject {
        this['az_codes'] = azCodes;
        return this;
    }
    public set azCodes(azCodes: Array<string> | undefined) {
        this['az_codes'] = azCodes;
    }
    public get azCodes() {
        return this['az_codes'];
    }
}