

export class TransferBackupRequestBody {
    public backups?: Array<string>;
    private 'instance_id'?: string;
    public destination?: string;
    public prefix?: string;
    public constructor(backups?: Array<string>, instanceId?: string, destination?: string) { 
        this['backups'] = backups;
        this['instance_id'] = instanceId;
        this['destination'] = destination;
    }
    public withBackups(backups: Array<string>): TransferBackupRequestBody {
        this['backups'] = backups;
        return this;
    }
    public withInstanceId(instanceId: string): TransferBackupRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDestination(destination: string): TransferBackupRequestBody {
        this['destination'] = destination;
        return this;
    }
    public withPrefix(prefix: string): TransferBackupRequestBody {
        this['prefix'] = prefix;
        return this;
    }
}