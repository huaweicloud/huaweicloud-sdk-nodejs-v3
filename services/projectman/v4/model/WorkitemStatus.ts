import { WorkitemStatusStatus } from './WorkitemStatusStatus';


export class WorkitemStatus {
    public id?: string;
    public status?: WorkitemStatusStatus;
    public constructor() { 
    }
    public withId(id: string): WorkitemStatus {
        this['id'] = id;
        return this;
    }
    public withStatus(status: WorkitemStatusStatus): WorkitemStatus {
        this['status'] = status;
        return this;
    }
}