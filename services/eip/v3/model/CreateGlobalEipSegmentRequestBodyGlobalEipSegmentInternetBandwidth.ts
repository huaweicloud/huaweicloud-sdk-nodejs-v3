import { AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfoTags } from './AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfoTags';


export class CreateGlobalEipSegmentRequestBodyGlobalEipSegmentInternetBandwidth {
    public id?: string;
    private 'ingress_size'?: number;
    private 'charge_mode'?: string;
    public size?: number;
    public name?: string;
    public tags?: Array<AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfoTags>;
    public type?: string;
    public constructor() { 
    }
    public withId(id: string): CreateGlobalEipSegmentRequestBodyGlobalEipSegmentInternetBandwidth {
        this['id'] = id;
        return this;
    }
    public withIngressSize(ingressSize: number): CreateGlobalEipSegmentRequestBodyGlobalEipSegmentInternetBandwidth {
        this['ingress_size'] = ingressSize;
        return this;
    }
    public set ingressSize(ingressSize: number  | undefined) {
        this['ingress_size'] = ingressSize;
    }
    public get ingressSize(): number | undefined {
        return this['ingress_size'];
    }
    public withChargeMode(chargeMode: string): CreateGlobalEipSegmentRequestBodyGlobalEipSegmentInternetBandwidth {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withSize(size: number): CreateGlobalEipSegmentRequestBodyGlobalEipSegmentInternetBandwidth {
        this['size'] = size;
        return this;
    }
    public withName(name: string): CreateGlobalEipSegmentRequestBodyGlobalEipSegmentInternetBandwidth {
        this['name'] = name;
        return this;
    }
    public withTags(tags: Array<AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfoTags>): CreateGlobalEipSegmentRequestBodyGlobalEipSegmentInternetBandwidth {
        this['tags'] = tags;
        return this;
    }
    public withType(type: string): CreateGlobalEipSegmentRequestBodyGlobalEipSegmentInternetBandwidth {
        this['type'] = type;
        return this;
    }
}