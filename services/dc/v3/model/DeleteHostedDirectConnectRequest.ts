

export class DeleteHostedDirectConnectRequest {
    private 'hosted_connect_id'?: string;
    public constructor(hostedConnectId?: string) { 
        this['hosted_connect_id'] = hostedConnectId;
    }
    public withHostedConnectId(hostedConnectId: string): DeleteHostedDirectConnectRequest {
        this['hosted_connect_id'] = hostedConnectId;
        return this;
    }
    public set hostedConnectId(hostedConnectId: string  | undefined) {
        this['hosted_connect_id'] = hostedConnectId;
    }
    public get hostedConnectId(): string | undefined {
        return this['hosted_connect_id'];
    }
}