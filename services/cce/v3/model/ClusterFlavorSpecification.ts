import { MasterFlavorSpec } from './MasterFlavorSpec';


export class ClusterFlavorSpecification {
    public name?: string;
    public nodeCapacity?: number;
    public availableMasterFlavors?: Array<MasterFlavorSpec>;
    public isSoldOut?: boolean;
    public isSupportMultiAZ?: boolean;
    public constructor() { 
    }
    public withName(name: string): ClusterFlavorSpecification {
        this['name'] = name;
        return this;
    }
    public withNodeCapacity(nodeCapacity: number): ClusterFlavorSpecification {
        this['nodeCapacity'] = nodeCapacity;
        return this;
    }
    public withAvailableMasterFlavors(availableMasterFlavors: Array<MasterFlavorSpec>): ClusterFlavorSpecification {
        this['availableMasterFlavors'] = availableMasterFlavors;
        return this;
    }
    public withIsSoldOut(isSoldOut: boolean): ClusterFlavorSpecification {
        this['isSoldOut'] = isSoldOut;
        return this;
    }
    public withIsSupportMultiAZ(isSupportMultiAZ: boolean): ClusterFlavorSpecification {
        this['isSupportMultiAZ'] = isSupportMultiAZ;
        return this;
    }
}