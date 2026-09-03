import { ChangeDeadLockSwitchNewRequestBody } from './ChangeDeadLockSwitchNewRequestBody';


export class ChangeDeadLockSwitchNewRequest {
    public body?: ChangeDeadLockSwitchNewRequestBody;
    public constructor() { 
    }
    public withBody(body: ChangeDeadLockSwitchNewRequestBody): ChangeDeadLockSwitchNewRequest {
        this['body'] = body;
        return this;
    }
}