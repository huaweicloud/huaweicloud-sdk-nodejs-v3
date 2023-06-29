

export class SetThresholdData {
    public receiving?: number;
    public sending?: number;
    public constructor() { 
    }
    public withReceiving(receiving: number): SetThresholdData {
        this['receiving'] = receiving;
        return this;
    }
    public withSending(sending: number): SetThresholdData {
        this['sending'] = sending;
        return this;
    }
}