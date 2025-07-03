

export class CreateAkskModel {
    public descp?: string;
    public constructor() { 
    }
    public withDescp(descp: string): CreateAkskModel {
        this['descp'] = descp;
        return this;
    }
}