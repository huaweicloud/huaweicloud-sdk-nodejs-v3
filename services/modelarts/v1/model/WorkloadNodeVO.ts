import { ResourceRequirementVO } from './ResourceRequirementVO';


export class WorkloadNodeVO {
    public hostIp?: string;
    public npuTopologyPlacement?: string;
    public resourceRequirement?: ResourceRequirementVO;
    public constructor() { 
    }
    public withHostIp(hostIp: string): WorkloadNodeVO {
        this['hostIp'] = hostIp;
        return this;
    }
    public withNpuTopologyPlacement(npuTopologyPlacement: string): WorkloadNodeVO {
        this['npuTopologyPlacement'] = npuTopologyPlacement;
        return this;
    }
    public withResourceRequirement(resourceRequirement: ResourceRequirementVO): WorkloadNodeVO {
        this['resourceRequirement'] = resourceRequirement;
        return this;
    }
}