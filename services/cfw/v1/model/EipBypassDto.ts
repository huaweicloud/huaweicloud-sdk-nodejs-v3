

export class EipBypassDto {
    private 'bypass_operation'?: number;
    public constructor(bypassOperation?: number) { 
        this['bypass_operation'] = bypassOperation;
    }
    public withBypassOperation(bypassOperation: number): EipBypassDto {
        this['bypass_operation'] = bypassOperation;
        return this;
    }
    public set bypassOperation(bypassOperation: number  | undefined) {
        this['bypass_operation'] = bypassOperation;
    }
    public get bypassOperation(): number | undefined {
        return this['bypass_operation'];
    }
}