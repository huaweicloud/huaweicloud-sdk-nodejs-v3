

export class CreateInstructionLibraryReq {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateInstructionLibraryReq {
        this['name'] = name;
        return this;
    }
}