import { MysqlProxyAvailable } from './MysqlProxyAvailable';


export class MysqlProxyNodeV3 {
    public id?: string;
    private 'instance_id'?: string;
    public status?: string;
    public name?: string;
    public weight?: number;
    private 'availability_zone'?: Array<MysqlProxyAvailable>;
    public constructor() { 
    }
    public withId(id: string): MysqlProxyNodeV3 {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): MysqlProxyNodeV3 {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: string): MysqlProxyNodeV3 {
        this['status'] = status;
        return this;
    }
    public withName(name: string): MysqlProxyNodeV3 {
        this['name'] = name;
        return this;
    }
    public withWeight(weight: number): MysqlProxyNodeV3 {
        this['weight'] = weight;
        return this;
    }
    public withAvailabilityZone(availabilityZone: Array<MysqlProxyAvailable>): MysqlProxyNodeV3 {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: Array<MysqlProxyAvailable>  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): Array<MysqlProxyAvailable> | undefined {
        return this['availability_zone'];
    }
}