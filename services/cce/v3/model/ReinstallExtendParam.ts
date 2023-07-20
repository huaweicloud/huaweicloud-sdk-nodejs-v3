

export class ReinstallExtendParam {
    private 'alpha.cce/NodeImageID'?: string;
    public constructor() { 
    }
    public withAlphaCceNodeImageID(alphaCceNodeImageID: string): ReinstallExtendParam {
        this['alpha.cce/NodeImageID'] = alphaCceNodeImageID;
        return this;
    }
    public set alphaCceNodeImageID(alphaCceNodeImageID: string  | undefined) {
        this['alpha.cce/NodeImageID'] = alphaCceNodeImageID;
    }
    public get alphaCceNodeImageID(): string | undefined {
        return this['alpha.cce/NodeImageID'];
    }
}