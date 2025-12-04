

export class DeleteKafkaUserClientQuotaTaskReq {
    public user?: string;
    public client?: string;
    private 'user_default'?: boolean;
    private 'client_default'?: boolean;
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
        this['user_default'] = userDefault;
        return this;
    }
    public set userDefault(userDefault: boolean  | undefined) {
        this['user_default'] = userDefault;
    }
    public get userDefault(): boolean | undefined {
        return this['user_default'];
    }
    public withClientDefault(clientDefault: boolean): DeleteKafkaUserClientQuotaTaskReq {
        this['client_default'] = clientDefault;
        return this;
    }
    public set clientDefault(clientDefault: boolean  | undefined) {
        this['client_default'] = clientDefault;
    }
    public get clientDefault(): boolean | undefined {
        return this['client_default'];
    }
}