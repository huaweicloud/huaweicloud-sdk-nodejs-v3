

export class ModCorpBasicInfoDTO {
    public address?: string;
    public autoUserCreate?: boolean;
    public constructor() { 
    }
    public withAddress(address: string): ModCorpBasicInfoDTO {
        this['address'] = address;
        return this;
    }
    public withAutoUserCreate(autoUserCreate: boolean): ModCorpBasicInfoDTO {
        this['autoUserCreate'] = autoUserCreate;
        return this;
    }
}