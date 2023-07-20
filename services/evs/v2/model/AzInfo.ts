import { ZoneState } from './ZoneState';


export class AzInfo {
    public zoneName?: string;
    public zoneState?: ZoneState;
    public constructor(zoneName?: string, zoneState?: ZoneState) { 
        this['zoneName'] = zoneName;
        this['zoneState'] = zoneState;
    }
    public withZoneName(zoneName: string): AzInfo {
        this['zoneName'] = zoneName;
        return this;
    }
    public withZoneState(zoneState: ZoneState): AzInfo {
        this['zoneState'] = zoneState;
        return this;
    }
}