import { ServerId } from './ServerId';


export class DeleteServersRequestBody {
    private 'delete_publicip'?: boolean;
    private 'delete_volume'?: boolean;
    public servers?: Array<ServerId>;
    public constructor(servers?: Array<ServerId>) { 
        this['servers'] = servers;
    }
    public withDeletePublicip(deletePublicip: boolean): DeleteServersRequestBody {
        this['delete_publicip'] = deletePublicip;
        return this;
    }
    public set deletePublicip(deletePublicip: boolean  | undefined) {
        this['delete_publicip'] = deletePublicip;
    }
    public get deletePublicip(): boolean | undefined {
        return this['delete_publicip'];
    }
    public withDeleteVolume(deleteVolume: boolean): DeleteServersRequestBody {
        this['delete_volume'] = deleteVolume;
        return this;
    }
    public set deleteVolume(deleteVolume: boolean  | undefined) {
        this['delete_volume'] = deleteVolume;
    }
    public get deleteVolume(): boolean | undefined {
        return this['delete_volume'];
    }
    public withServers(servers: Array<ServerId>): DeleteServersRequestBody {
        this['servers'] = servers;
        return this;
    }
}