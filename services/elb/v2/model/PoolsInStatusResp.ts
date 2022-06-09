import { HealthmonitorsInStatusResp } from './HealthmonitorsInStatusResp';
import { MembersInStatusResp } from './MembersInStatusResp';


export class PoolsInStatusResp {
    public id: string;
    public name: string;
    public members: Array<MembersInStatusResp>;
    private 'operating_status': string | undefined;
    private 'provisioning_status': string | undefined;
    public healthmonitor: HealthmonitorsInStatusResp;
    public constructor(id?: any, name?: any, members?: any, operatingStatus?: any, provisioningStatus?: any, healthmonitor?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['members'] = members;
        this['operating_status'] = operatingStatus;
        this['provisioning_status'] = provisioningStatus;
        this['healthmonitor'] = healthmonitor;
    }
    public withId(id: string): PoolsInStatusResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PoolsInStatusResp {
        this['name'] = name;
        return this;
    }
    public withMembers(members: Array<MembersInStatusResp>): PoolsInStatusResp {
        this['members'] = members;
        return this;
    }
    public withOperatingStatus(operatingStatus: string): PoolsInStatusResp {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: string | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus() {
        return this['operating_status'];
    }
    public withProvisioningStatus(provisioningStatus: string): PoolsInStatusResp {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus() {
        return this['provisioning_status'];
    }
    public withHealthmonitor(healthmonitor: HealthmonitorsInStatusResp): PoolsInStatusResp {
        this['healthmonitor'] = healthmonitor;
        return this;
    }
}