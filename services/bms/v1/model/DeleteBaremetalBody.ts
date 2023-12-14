import { ServersList } from './ServersList';


export class DeleteBaremetalBody {
    public servers?: Array<ServersList>;
    private 'delete_publicip'?: boolean;
    private 'delete_volume'?: boolean;
    public constructor(servers?: Array<ServersList>, deletePublicip?: boolean) { 
        this['servers'] = servers;
        this['delete_publicip'] = deletePublicip;
    }
    public withServers(servers: Array<ServersList>): DeleteBaremetalBody {
        this['servers'] = servers;
        return this;
    }
    public withDeletePublicip(deletePublicip: boolean): DeleteBaremetalBody {
        this['delete_publicip'] = deletePublicip;
        return this;
    }
    public set deletePublicip(deletePublicip: boolean  | undefined) {
        this['delete_publicip'] = deletePublicip;
    }
    public get deletePublicip(): boolean | undefined {
        return this['delete_publicip'];
    }
    public withDeleteVolume(deleteVolume: boolean): DeleteBaremetalBody {
        this['delete_volume'] = deleteVolume;
        return this;
    }
    public set deleteVolume(deleteVolume: boolean  | undefined) {
        this['delete_volume'] = deleteVolume;
    }
    public get deleteVolume(): boolean | undefined {
        return this['delete_volume'];
    }
}