

export class Adn {
    private 'charge_mode'?: string;
    private 'bandwidth_size'?: number;
    public constructor(chargeMode?: string) { 
        this['charge_mode'] = chargeMode;
    }
    public withChargeMode(chargeMode: string): Adn {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withBandwidthSize(bandwidthSize: number): Adn {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
}