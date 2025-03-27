import { ChangeToPeriod } from './ChangeToPeriod';


export class ChangeVaultChargeModeRequest {
    public body?: ChangeToPeriod;
    public constructor() { 
    }
    public withBody(body: ChangeToPeriod): ChangeVaultChargeModeRequest {
        this['body'] = body;
        return this;
    }
}