import { GetJobInfoResponseBodyJobEntitiesInstance } from './GetJobInfoResponseBodyJobEntitiesInstance';
import { GetJobInfoResponseBodyJobEntitiesVolume } from './GetJobInfoResponseBodyJobEntitiesVolume';


export class GetJobInfoResponseBodyJobEntities {
    public instance?: GetJobInfoResponseBodyJobEntitiesInstance;
    private 'resource_ids'?: Array<string>;
    public volume?: GetJobInfoResponseBodyJobEntitiesVolume;
    private 'public_ip'?: string;
    private 'switch_strategy'?: string;
    public constructor() { 
    }
    public withInstance(instance: GetJobInfoResponseBodyJobEntitiesInstance): GetJobInfoResponseBodyJobEntities {
        this['instance'] = instance;
        return this;
    }
    public withResourceIds(resourceIds: Array<string>): GetJobInfoResponseBodyJobEntities {
        this['resource_ids'] = resourceIds;
        return this;
    }
    public set resourceIds(resourceIds: Array<string>  | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds(): Array<string> | undefined {
        return this['resource_ids'];
    }
    public withVolume(volume: GetJobInfoResponseBodyJobEntitiesVolume): GetJobInfoResponseBodyJobEntities {
        this['volume'] = volume;
        return this;
    }
    public withPublicIp(publicIp: string): GetJobInfoResponseBodyJobEntities {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withSwitchStrategy(switchStrategy: string): GetJobInfoResponseBodyJobEntities {
        this['switch_strategy'] = switchStrategy;
        return this;
    }
    public set switchStrategy(switchStrategy: string  | undefined) {
        this['switch_strategy'] = switchStrategy;
    }
    public get switchStrategy(): string | undefined {
        return this['switch_strategy'];
    }
}