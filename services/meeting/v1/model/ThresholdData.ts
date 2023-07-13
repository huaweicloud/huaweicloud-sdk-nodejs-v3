

export class ThresholdData {
    public receiving?: number;
    public receivingDefault?: number;
    public sending?: number;
    public sendingDefault?: number;
    public constructor() { 
    }
    public withReceiving(receiving: number): ThresholdData {
        this['receiving'] = receiving;
        return this;
    }
    public withReceivingDefault(receivingDefault: number): ThresholdData {
        this['receivingDefault'] = receivingDefault;
        return this;
    }
    public withSending(sending: number): ThresholdData {
        this['sending'] = sending;
        return this;
    }
    public withSendingDefault(sendingDefault: number): ThresholdData {
        this['sendingDefault'] = sendingDefault;
        return this;
    }
}