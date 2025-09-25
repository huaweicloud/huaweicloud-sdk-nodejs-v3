import { ShowClusterVolumeRsp } from './ShowClusterVolumeRsp';


export class ClusterDetailInstances {
    public status?: string;
    public resourceId?: string;
    public type?: string;
    public id?: string;
    public name?: string;
    public specCode?: string;
    public azCode?: string;
    public ip?: string;
    public volume?: ShowClusterVolumeRsp;
    public subnetId?: string;
    public constructor() { 
    }
    public withStatus(status: string): ClusterDetailInstances {
        this['status'] = status;
        return this;
    }
    public withResourceId(resourceId: string): ClusterDetailInstances {
        this['resourceId'] = resourceId;
        return this;
    }
    public withType(type: string): ClusterDetailInstances {
        this['type'] = type;
        return this;
    }
    public withId(id: string): ClusterDetailInstances {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ClusterDetailInstances {
        this['name'] = name;
        return this;
    }
    public withSpecCode(specCode: string): ClusterDetailInstances {
        this['specCode'] = specCode;
        return this;
    }
    public withAzCode(azCode: string): ClusterDetailInstances {
        this['azCode'] = azCode;
        return this;
    }
    public withIp(ip: string): ClusterDetailInstances {
        this['ip'] = ip;
        return this;
    }
    public withVolume(volume: ShowClusterVolumeRsp): ClusterDetailInstances {
        this['volume'] = volume;
        return this;
    }
    public withSubnetId(subnetId: string): ClusterDetailInstances {
        this['subnetId'] = subnetId;
        return this;
    }
}