import { CreateScheduledUpgradeTaskRequestBody } from './CreateScheduledUpgradeTaskRequestBody';


export class CreateUpgradeScheduleTaskRequest {
    public body?: CreateScheduledUpgradeTaskRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateScheduledUpgradeTaskRequestBody): CreateUpgradeScheduleTaskRequest {
        this['body'] = body;
        return this;
    }
}