import { ShareTypeUsageBandwidth } from './ShareTypeUsageBandwidth';
import { ShareTypeUsageCapacity } from './ShareTypeUsageCapacity';
import { ShareTypeUsageQuantity } from './ShareTypeUsageQuantity';


export class ShareTypeUsage {
    public capacity?: ShareTypeUsageCapacity;
    public bandwidth?: ShareTypeUsageBandwidth;
    public quantity?: ShareTypeUsageQuantity;
    public constructor() { 
    }
    public withCapacity(capacity: ShareTypeUsageCapacity): ShareTypeUsage {
        this['capacity'] = capacity;
        return this;
    }
    public withBandwidth(bandwidth: ShareTypeUsageBandwidth): ShareTypeUsage {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withQuantity(quantity: ShareTypeUsageQuantity): ShareTypeUsage {
        this['quantity'] = quantity;
        return this;
    }
}