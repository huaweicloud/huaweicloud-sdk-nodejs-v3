import { AssociateInstanceGlobalEipRequestBodyGlobalEipAssociateInstanceInfo } from './AssociateInstanceGlobalEipRequestBodyGlobalEipAssociateInstanceInfo';
import { AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfo } from './AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfo';


export class AssociateInstanceGlobalEipRequestBodyGlobalEip {
    private 'associate_instance_info'?: AssociateInstanceGlobalEipRequestBodyGlobalEipAssociateInstanceInfo;
    private 'gc_bandwidth_info'?: AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfo;
    public constructor() { 
    }
    public withAssociateInstanceInfo(associateInstanceInfo: AssociateInstanceGlobalEipRequestBodyGlobalEipAssociateInstanceInfo): AssociateInstanceGlobalEipRequestBodyGlobalEip {
        this['associate_instance_info'] = associateInstanceInfo;
        return this;
    }
    public set associateInstanceInfo(associateInstanceInfo: AssociateInstanceGlobalEipRequestBodyGlobalEipAssociateInstanceInfo  | undefined) {
        this['associate_instance_info'] = associateInstanceInfo;
    }
    public get associateInstanceInfo(): AssociateInstanceGlobalEipRequestBodyGlobalEipAssociateInstanceInfo | undefined {
        return this['associate_instance_info'];
    }
    public withGcBandwidthInfo(gcBandwidthInfo: AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfo): AssociateInstanceGlobalEipRequestBodyGlobalEip {
        this['gc_bandwidth_info'] = gcBandwidthInfo;
        return this;
    }
    public set gcBandwidthInfo(gcBandwidthInfo: AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfo  | undefined) {
        this['gc_bandwidth_info'] = gcBandwidthInfo;
    }
    public get gcBandwidthInfo(): AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfo | undefined {
        return this['gc_bandwidth_info'];
    }
}