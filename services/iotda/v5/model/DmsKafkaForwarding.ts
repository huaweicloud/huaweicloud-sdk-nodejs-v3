import { NetAddress } from './NetAddress';


export class DmsKafkaForwarding {
    private 'region_name'?: string;
    private 'project_id'?: string;
    public addresses?: Array<NetAddress>;
    public topic?: string;
    public username?: string;
    public password?: string;
    public mechanism?: string;
    public constructor(regionName?: string, projectId?: string, addresses?: Array<NetAddress>, topic?: string) { 
        this['region_name'] = regionName;
        this['project_id'] = projectId;
        this['addresses'] = addresses;
        this['topic'] = topic;
    }
    public withRegionName(regionName: string): DmsKafkaForwarding {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withProjectId(projectId: string): DmsKafkaForwarding {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAddresses(addresses: Array<NetAddress>): DmsKafkaForwarding {
        this['addresses'] = addresses;
        return this;
    }
    public withTopic(topic: string): DmsKafkaForwarding {
        this['topic'] = topic;
        return this;
    }
    public withUsername(username: string): DmsKafkaForwarding {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): DmsKafkaForwarding {
        this['password'] = password;
        return this;
    }
    public withMechanism(mechanism: string): DmsKafkaForwarding {
        this['mechanism'] = mechanism;
        return this;
    }
}