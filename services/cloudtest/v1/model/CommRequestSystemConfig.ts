import { SystemConfig } from './SystemConfig';


export class CommRequestSystemConfig {
    public params?: SystemConfig;
    public constructor(params?: SystemConfig) { 
        this['params'] = params;
    }
    public withParams(params: SystemConfig): CommRequestSystemConfig {
        this['params'] = params;
        return this;
    }
}