

export class DetachSharedbwDict {
    public name?: string;
    public size?: number;
    private 'charge_mode'?: string;
    public constructor(size?: number, chargeMode?: string) { 
        this['size'] = size;
        this['charge_mode'] = chargeMode;
    }
    public withName(name: string): DetachSharedbwDict {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): DetachSharedbwDict {
        this['size'] = size;
        return this;
    }
    public withChargeMode(chargeMode: string): DetachSharedbwDict {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
}