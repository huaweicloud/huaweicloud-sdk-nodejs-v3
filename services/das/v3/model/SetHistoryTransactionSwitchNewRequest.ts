import { SetHistoryTransactionSwitchNewRequestBody } from './SetHistoryTransactionSwitchNewRequestBody';


export class SetHistoryTransactionSwitchNewRequest {
    private 'instance_id'?: string;
    public body?: SetHistoryTransactionSwitchNewRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetHistoryTransactionSwitchNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SetHistoryTransactionSwitchNewRequestBody): SetHistoryTransactionSwitchNewRequest {
        this['body'] = body;
        return this;
    }
}