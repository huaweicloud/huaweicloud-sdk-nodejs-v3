

export class DeleteBigkeyScanTaskRequest {
    private 'instance_id'?: string;
    private 'bigkey_id'?: string;
    public constructor(instanceId?: string, bigkeyId?: string) { 
        this['instance_id'] = instanceId;
        this['bigkey_id'] = bigkeyId;
    }
    public withInstanceId(instanceId: string): DeleteBigkeyScanTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBigkeyId(bigkeyId: string): DeleteBigkeyScanTaskRequest {
        this['bigkey_id'] = bigkeyId;
        return this;
    }
    public set bigkeyId(bigkeyId: string  | undefined) {
        this['bigkey_id'] = bigkeyId;
    }
    public get bigkeyId(): string | undefined {
        return this['bigkey_id'];
    }
}