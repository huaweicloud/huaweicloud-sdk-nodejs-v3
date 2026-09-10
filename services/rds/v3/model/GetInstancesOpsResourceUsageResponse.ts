import { ResourceUsage } from './ResourceUsage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetInstancesOpsResourceUsageResponse extends SdkResponse {
    public cpu?: ResourceUsage;
    public mem?: ResourceUsage;
    public disk?: ResourceUsage;
    public io?: ResourceUsage;
    public constructor() { 
        super();
    }
    public withCpu(cpu: ResourceUsage): GetInstancesOpsResourceUsageResponse {
        this['cpu'] = cpu;
        return this;
    }
    public withMem(mem: ResourceUsage): GetInstancesOpsResourceUsageResponse {
        this['mem'] = mem;
        return this;
    }
    public withDisk(disk: ResourceUsage): GetInstancesOpsResourceUsageResponse {
        this['disk'] = disk;
        return this;
    }
    public withIo(io: ResourceUsage): GetInstancesOpsResourceUsageResponse {
        this['io'] = io;
        return this;
    }
}