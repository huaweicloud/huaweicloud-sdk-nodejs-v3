

export class ListCloudPhoneServersModelOfferingsResponseBodyModels {
    private 'available_zone'?: string;
    private 'model_name'?: string;
    private 'sell_status'?: string;
    public constructor() { 
    }
    public withAvailableZone(availableZone: string): ListCloudPhoneServersModelOfferingsResponseBodyModels {
        this['available_zone'] = availableZone;
        return this;
    }
    public set availableZone(availableZone: string  | undefined) {
        this['available_zone'] = availableZone;
    }
    public get availableZone(): string | undefined {
        return this['available_zone'];
    }
    public withModelName(modelName: string): ListCloudPhoneServersModelOfferingsResponseBodyModels {
        this['model_name'] = modelName;
        return this;
    }
    public set modelName(modelName: string  | undefined) {
        this['model_name'] = modelName;
    }
    public get modelName(): string | undefined {
        return this['model_name'];
    }
    public withSellStatus(sellStatus: string): ListCloudPhoneServersModelOfferingsResponseBodyModels {
        this['sell_status'] = sellStatus;
        return this;
    }
    public set sellStatus(sellStatus: string  | undefined) {
        this['sell_status'] = sellStatus;
    }
    public get sellStatus(): string | undefined {
        return this['sell_status'];
    }
}