import { StatusVoIpd } from './StatusVoIpd';


export class StatusResponseResult {
    public status?: Array<StatusVoIpd>;
    public constructor() { 
    }
    public withStatus(status: Array<StatusVoIpd>): StatusResponseResult {
        this['status'] = status;
        return this;
    }
}