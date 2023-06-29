

export class SetPacketThresholdData {
    public receiving?: number;
    public sending?: number;
    public constructor() { 
    }
    public withReceiving(receiving: number): SetPacketThresholdData {
        this['receiving'] = receiving;
        return this;
    }
    public withSending(sending: number): SetPacketThresholdData {
        this['sending'] = sending;
        return this;
    }
}