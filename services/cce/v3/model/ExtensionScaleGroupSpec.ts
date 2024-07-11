import { CapacityReservationSpecification } from './CapacityReservationSpecification';
import { ScaleGroupAutoscaling } from './ScaleGroupAutoscaling';


export class ExtensionScaleGroupSpec {
    public flavor?: string;
    public az?: string;
    public capacityReservationSpecification?: CapacityReservationSpecification;
    public autoscaling?: ScaleGroupAutoscaling;
    public constructor() { 
    }
    public withFlavor(flavor: string): ExtensionScaleGroupSpec {
        this['flavor'] = flavor;
        return this;
    }
    public withAz(az: string): ExtensionScaleGroupSpec {
        this['az'] = az;
        return this;
    }
    public withCapacityReservationSpecification(capacityReservationSpecification: CapacityReservationSpecification): ExtensionScaleGroupSpec {
        this['capacityReservationSpecification'] = capacityReservationSpecification;
        return this;
    }
    public withAutoscaling(autoscaling: ScaleGroupAutoscaling): ExtensionScaleGroupSpec {
        this['autoscaling'] = autoscaling;
        return this;
    }
}