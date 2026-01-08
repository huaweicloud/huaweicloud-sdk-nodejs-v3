

export class PoolNode {
    public id?: string;
    public name?: string;
    public protocol?: string;
    public type?: string;
    private 'lb_algorithm'?: string;
    public constructor(id?: string, name?: string, protocol?: string, type?: string, lbAlgorithm?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['protocol'] = protocol;
        this['type'] = type;
        this['lb_algorithm'] = lbAlgorithm;
    }
    public withId(id: string): PoolNode {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PoolNode {
        this['name'] = name;
        return this;
    }
    public withProtocol(protocol: string): PoolNode {
        this['protocol'] = protocol;
        return this;
    }
    public withType(type: string): PoolNode {
        this['type'] = type;
        return this;
    }
    public withLbAlgorithm(lbAlgorithm: string): PoolNode {
        this['lb_algorithm'] = lbAlgorithm;
        return this;
    }
    public set lbAlgorithm(lbAlgorithm: string  | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm(): string | undefined {
        return this['lb_algorithm'];
    }
}