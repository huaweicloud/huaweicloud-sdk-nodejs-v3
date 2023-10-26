import { Datastore } from './Datastore';
import { ExtendedProperties } from './ExtendedProperties';
import { Instance } from './Instance';
import { SysTags } from './SysTags';


export class CdmCreateClusterReqCluster {
    public scheduleBootTime?: string;
    public isScheduleBootOff?: boolean;
    public instances?: Array<Instance>;
    public datastore?: Datastore;
    private 'extended_properties'?: ExtendedProperties;
    public scheduleOffTime?: string;
    public vpcId?: string;
    public name?: string;
    private 'sys_tags'?: Array<SysTags>;
    public isAutoOff?: boolean;
    public constructor() { 
    }
    public withScheduleBootTime(scheduleBootTime: string): CdmCreateClusterReqCluster {
        this['scheduleBootTime'] = scheduleBootTime;
        return this;
    }
    public withIsScheduleBootOff(isScheduleBootOff: boolean): CdmCreateClusterReqCluster {
        this['isScheduleBootOff'] = isScheduleBootOff;
        return this;
    }
    public withInstances(instances: Array<Instance>): CdmCreateClusterReqCluster {
        this['instances'] = instances;
        return this;
    }
    public withDatastore(datastore: Datastore): CdmCreateClusterReqCluster {
        this['datastore'] = datastore;
        return this;
    }
    public withExtendedProperties(extendedProperties: ExtendedProperties): CdmCreateClusterReqCluster {
        this['extended_properties'] = extendedProperties;
        return this;
    }
    public set extendedProperties(extendedProperties: ExtendedProperties  | undefined) {
        this['extended_properties'] = extendedProperties;
    }
    public get extendedProperties(): ExtendedProperties | undefined {
        return this['extended_properties'];
    }
    public withScheduleOffTime(scheduleOffTime: string): CdmCreateClusterReqCluster {
        this['scheduleOffTime'] = scheduleOffTime;
        return this;
    }
    public withVpcId(vpcId: string): CdmCreateClusterReqCluster {
        this['vpcId'] = vpcId;
        return this;
    }
    public withName(name: string): CdmCreateClusterReqCluster {
        this['name'] = name;
        return this;
    }
    public withSysTags(sysTags: Array<SysTags>): CdmCreateClusterReqCluster {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<SysTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<SysTags> | undefined {
        return this['sys_tags'];
    }
    public withIsAutoOff(isAutoOff: boolean): CdmCreateClusterReqCluster {
        this['isAutoOff'] = isAutoOff;
        return this;
    }
}