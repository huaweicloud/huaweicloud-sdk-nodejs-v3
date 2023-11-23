

export class DeleteKafkaUserClientQuotaTaskReq {
    public user?: string;
    public client?: string;
    private 'user-default'?: boolean;
    private 'client-default'?: boolean;
    public constructor() { 
    }
    public withUser(user: string): DeleteKafkaUserClientQuotaTaskReq {
        this['user'] = user;
        return this;
    }
    public withClient(client: string): DeleteKafkaUserClientQuotaTaskReq {
        this['client'] = client;
        return this;
    }
    public withUserDefault(userDefault: boolean): DeleteKafkaUserClientQuotaTaskReq {
        this['user-default'] = userDefault;
        return this;
    }
    public set userDefault(userDefault: boolean  | undefined) {
        this['user-default'] = userDefault;
    }
    public get userDefault(): boolean | undefined {
        return this['user-default'];
    }
    public withClientDefault(clientDefault: boolean): DeleteKafkaUserClientQuotaTaskReq {
        this['client-default'] = clientDefault;
        return this;
    }
    public set clientDefault(clientDefault: boolean  | undefined) {
        this['client-default'] = clientDefault;
    }
    public get clientDefault(): boolean | undefined {
        return this['client-default'];
    }
}