import { RedeployConfig } from './RedeployConfig';


export class EventUpdate {
    public notBefore?: string;
    public redeployConfig?: RedeployConfig;
    public constructor() { 
    }
    public withNotBefore(notBefore: string): EventUpdate {
        this['notBefore'] = notBefore;
        return this;
    }
    public withRedeployConfig(redeployConfig: RedeployConfig): EventUpdate {
        this['redeployConfig'] = redeployConfig;
        return this;
    }
}