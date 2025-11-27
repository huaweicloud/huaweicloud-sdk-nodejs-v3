import { WorkerConfig } from './WorkerConfig';


export class UpdateClusterSpec {
    public country?: string;
    public city?: string;
    public workerConfig?: WorkerConfig;
    public constructor() { 
    }
    public withCountry(country: string): UpdateClusterSpec {
        this['country'] = country;
        return this;
    }
    public withCity(city: string): UpdateClusterSpec {
        this['city'] = city;
        return this;
    }
    public withWorkerConfig(workerConfig: WorkerConfig): UpdateClusterSpec {
        this['workerConfig'] = workerConfig;
        return this;
    }
}