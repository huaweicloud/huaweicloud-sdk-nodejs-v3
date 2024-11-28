import { CreateGlobalEipRequestBodyGlobalEipTags } from './CreateGlobalEipRequestBodyGlobalEipTags';


export class BatchCreateGlobalEipRequestBodyGlobalEipInternetBandwidthInfo {
    public id?: string;
    private 'ingress_size'?: number;
    private 'charge_mode'?: string;
    public size?: number;
    public name?: string;
    public tags?: Array<CreateGlobalEipRequestBodyGlobalEipTags>;
    public type?: string;
    public constructor() { 
    }
    public withId(id: string): BatchCreateGlobalEipRequestBodyGlobalEipInternetBandwidthInfo {
        this['id'] = id;
        return this;
    }
    public withIngressSize(ingressSize: number): BatchCreateGlobalEipRequestBodyGlobalEipInternetBandwidthInfo {
        this['ingress_size'] = ingressSize;
        return this;
    }
    public set ingressSize(ingressSize: number  | undefined) {
        this['ingress_size'] = ingressSize;
    }
    public get ingressSize(): number | undefined {
        return this['ingress_size'];
    }
    public withChargeMode(chargeMode: string): BatchCreateGlobalEipRequestBodyGlobalEipInternetBandwidthInfo {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withSize(size: number): BatchCreateGlobalEipRequestBodyGlobalEipInternetBandwidthInfo {
        this['size'] = size;
        return this;
    }
    public withName(name: string): BatchCreateGlobalEipRequestBodyGlobalEipInternetBandwidthInfo {
        this['name'] = name;
        return this;
    }
    public withTags(tags: Array<CreateGlobalEipRequestBodyGlobalEipTags>): BatchCreateGlobalEipRequestBodyGlobalEipInternetBandwidthInfo {
        this['tags'] = tags;
        return this;
    }
    public withType(type: string): BatchCreateGlobalEipRequestBodyGlobalEipInternetBandwidthInfo {
        this['type'] = type;
        return this;
    }
}