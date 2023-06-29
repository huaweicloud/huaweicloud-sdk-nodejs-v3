

export class PacketThresholdData {
    public receiving?: number;
    public receivingDefault?: number;
    public sending?: number;
    public sendingDefault?: number;
    public constructor() { 
    }
    public withReceiving(receiving: number): PacketThresholdData {
        this['receiving'] = receiving;
        return this;
    }
    public withReceivingDefault(receivingDefault: number): PacketThresholdData {
        this['receivingDefault'] = receivingDefault;
        return this;
    }
    public withSending(sending: number): PacketThresholdData {
        this['sending'] = sending;
        return this;
    }
    public withSendingDefault(sendingDefault: number): PacketThresholdData {
        this['sendingDefault'] = sendingDefault;
        return this;
    }
}