

export class DeleteInstanceDemandRequest {
    public id?: string;
    private 'delete_publicip'?: boolean;
    private 'delete_volume'?: boolean;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteInstanceDemandRequest {
        this['id'] = id;
        return this;
    }
    public withDeletePublicip(deletePublicip: boolean): DeleteInstanceDemandRequest {
        this['delete_publicip'] = deletePublicip;
        return this;
    }
    public set deletePublicip(deletePublicip: boolean  | undefined) {
        this['delete_publicip'] = deletePublicip;
    }
    public get deletePublicip(): boolean | undefined {
        return this['delete_publicip'];
    }
    public withDeleteVolume(deleteVolume: boolean): DeleteInstanceDemandRequest {
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