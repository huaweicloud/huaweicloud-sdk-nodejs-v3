

export class NodeContextEntity {
    public id?: string;
    private 'broker_name'?: string;
    private 'broker_id'?: number;
    public address?: string;
    private 'public_address'?: string;
    public constructor() { 
    }
    public withId(id: string): NodeContextEntity {
        this['id'] = id;
        return this;
    }
    public withBrokerName(brokerName: string): NodeContextEntity {
        this['broker_name'] = brokerName;
        return this;
    }
    public set brokerName(brokerName: string  | undefined) {
        this['broker_name'] = brokerName;
    }
    public get brokerName(): string | undefined {
        return this['broker_name'];
    }
    public withBrokerId(brokerId: number): NodeContextEntity {
        this['broker_id'] = brokerId;
        return this;
    }
    public set brokerId(brokerId: number  | undefined) {
        this['broker_id'] = brokerId;
    }
    public get brokerId(): number | undefined {
        return this['broker_id'];
    }
    public withAddress(address: string): NodeContextEntity {
        this['address'] = address;
        return this;
    }
    public withPublicAddress(publicAddress: string): NodeContextEntity {
        this['public_address'] = publicAddress;
        return this;
    }
    public set publicAddress(publicAddress: string  | undefined) {
        this['public_address'] = publicAddress;
    }
    public get publicAddress(): string | undefined {
        return this['public_address'];
    }
}