import { NovaAvailabilityZoneState } from './NovaAvailabilityZoneState';


export class NovaAvailabilityZone {
    public hosts: Array<string>;
    public zoneName: string;
    public zoneState: NovaAvailabilityZoneState;
    public constructor(hosts?: any, zoneName?: any, zoneState?: any) { 
        this['hosts'] = hosts;
        this['zoneName'] = zoneName;
        this['zoneState'] = zoneState;
    }
    public withHosts(hosts: Array<string>): NovaAvailabilityZone {
        this['hosts'] = hosts;
        return this;
    }
    public withZoneName(zoneName: string): NovaAvailabilityZone {
        this['zoneName'] = zoneName;
        return this;
    }
    public withZoneState(zoneState: NovaAvailabilityZoneState): NovaAvailabilityZone {
        this['zoneState'] = zoneState;
        return this;
    }
}