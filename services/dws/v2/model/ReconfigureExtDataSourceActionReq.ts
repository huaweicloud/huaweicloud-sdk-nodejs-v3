import { ReconfigureExtDataSourceAction } from './ReconfigureExtDataSourceAction';


export class ReconfigureExtDataSourceActionReq {
    public reconfigure?: ReconfigureExtDataSourceAction;
    public constructor(reconfigure?: ReconfigureExtDataSourceAction) { 
        this['reconfigure'] = reconfigure;
    }
    public withReconfigure(reconfigure: ReconfigureExtDataSourceAction): ReconfigureExtDataSourceActionReq {
        this['reconfigure'] = reconfigure;
        return this;
    }
}