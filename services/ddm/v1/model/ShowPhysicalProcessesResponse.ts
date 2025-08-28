import { PhysicalProcessInfo } from './PhysicalProcessInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPhysicalProcessesResponse extends SdkResponse {
    private 'physical_processes'?: Array<PhysicalProcessInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withPhysicalProcesses(physicalProcesses: Array<PhysicalProcessInfo>): ShowPhysicalProcessesResponse {
        this['physical_processes'] = physicalProcesses;
        return this;
    }
    public set physicalProcesses(physicalProcesses: Array<PhysicalProcessInfo>  | undefined) {
        this['physical_processes'] = physicalProcesses;
    }
    public get physicalProcesses(): Array<PhysicalProcessInfo> | undefined {
        return this['physical_processes'];
    }
    public withTotalCount(totalCount: number): ShowPhysicalProcessesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}