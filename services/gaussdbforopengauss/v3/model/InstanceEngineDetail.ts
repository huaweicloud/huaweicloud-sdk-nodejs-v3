import { InstanceDetail } from './InstanceDetail';


export class InstanceEngineDetail {
    private 'engine_version'?: string;
    public instances?: Array<InstanceDetail>;
    public constructor() { 
    }
    public withEngineVersion(engineVersion: string): InstanceEngineDetail {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withInstances(instances: Array<InstanceDetail>): InstanceEngineDetail {
        this['instances'] = instances;
        return this;
    }
}