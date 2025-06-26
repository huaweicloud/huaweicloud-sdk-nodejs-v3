

export class UpdateServerReq {
    public name?: string;
    public description?: string;
    private 'maintain_status'?: boolean;
    public constructor() { 
    }
    public withName(name: string): UpdateServerReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateServerReq {
        this['description'] = description;
        return this;
    }
    public withMaintainStatus(maintainStatus: boolean): UpdateServerReq {
        this['maintain_status'] = maintainStatus;
        return this;
    }
    public set maintainStatus(maintainStatus: boolean  | undefined) {
        this['maintain_status'] = maintainStatus;
    }
    public get maintainStatus(): boolean | undefined {
        return this['maintain_status'];
    }
}