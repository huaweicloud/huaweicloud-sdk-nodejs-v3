

export class UpdateInstructionLibraryReq {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateInstructionLibraryReq {
        this['name'] = name;
        return this;
    }
}