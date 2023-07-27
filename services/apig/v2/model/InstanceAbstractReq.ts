

export class InstanceAbstractReq {
    public description?: string;
    private 'maintain_begin'?: string;
    private 'maintain_end'?: string;
    public constructor() { 
    }
    public withDescription(description: string): InstanceAbstractReq {
        this['description'] = description;
        return this;
    }
    public withMaintainBegin(maintainBegin: string): InstanceAbstractReq {
        this['maintain_begin'] = maintainBegin;
        return this;
    }
    public set maintainBegin(maintainBegin: string  | undefined) {
        this['maintain_begin'] = maintainBegin;
    }
    public get maintainBegin(): string | undefined {
        return this['maintain_begin'];
    }
    public withMaintainEnd(maintainEnd: string): InstanceAbstractReq {
        this['maintain_end'] = maintainEnd;
        return this;
    }
    public set maintainEnd(maintainEnd: string  | undefined) {
        this['maintain_end'] = maintainEnd;
    }
    public get maintainEnd(): string | undefined {
        return this['maintain_end'];
    }
}