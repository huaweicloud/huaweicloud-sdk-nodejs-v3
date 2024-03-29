

export class ListBrokersRespBrokers {
    public ids?: Array<number>;
    private 'broker_name'?: string;
    public constructor() { 
    }
    public withIds(ids: Array<number>): ListBrokersRespBrokers {
        this['ids'] = ids;
        return this;
    }
    public withBrokerName(brokerName: string): ListBrokersRespBrokers {
        this['broker_name'] = brokerName;
        return this;
    }
    public set brokerName(brokerName: string  | undefined) {
        this['broker_name'] = brokerName;
    }
    public get brokerName(): string | undefined {
        return this['broker_name'];
    }
}