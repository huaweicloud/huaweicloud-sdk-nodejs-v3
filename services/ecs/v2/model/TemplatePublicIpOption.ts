import { TemplateBandwidthOption } from './TemplateBandwidthOption';


export class TemplatePublicIpOption {
    private 'publicip_type'?: string;
    private 'charging_mode'?: string;
    public bandwidth?: TemplateBandwidthOption;
    private 'delete_on_termination'?: boolean;
    public constructor() { 
    }
    public withPublicipType(publicipType: string): TemplatePublicIpOption {
        this['publicip_type'] = publicipType;
        return this;
    }
    public set publicipType(publicipType: string  | undefined) {
        this['publicip_type'] = publicipType;
    }
    public get publicipType(): string | undefined {
        return this['publicip_type'];
    }
    public withChargingMode(chargingMode: string): TemplatePublicIpOption {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withBandwidth(bandwidth: TemplateBandwidthOption): TemplatePublicIpOption {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withDeleteOnTermination(deleteOnTermination: boolean): TemplatePublicIpOption {
        this['delete_on_termination'] = deleteOnTermination;
        return this;
    }
    public set deleteOnTermination(deleteOnTermination: boolean  | undefined) {
        this['delete_on_termination'] = deleteOnTermination;
    }
    public get deleteOnTermination(): boolean | undefined {
        return this['delete_on_termination'];
    }
}