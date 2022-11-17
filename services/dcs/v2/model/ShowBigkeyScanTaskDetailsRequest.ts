

export class ShowBigkeyScanTaskDetailsRequest {
    private 'instance_id': string | undefined;
    private 'bigkey_id': string | undefined;
    public constructor(instanceId?: any, bigkeyId?: any) { 
        this['instance_id'] = instanceId;
        this['bigkey_id'] = bigkeyId;
    }
    public withInstanceId(instanceId: string): ShowBigkeyScanTaskDetailsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBigkeyId(bigkeyId: string): ShowBigkeyScanTaskDetailsRequest {
        this['bigkey_id'] = bigkeyId;
        return this;
    }
    public set bigkeyId(bigkeyId: string | undefined) {
        this['bigkey_id'] = bigkeyId;
    }
    public get bigkeyId() {
        return this['bigkey_id'];
    }
}